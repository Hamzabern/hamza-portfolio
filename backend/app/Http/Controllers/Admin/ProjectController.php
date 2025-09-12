<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $r) {
        $q = Project::query()
            ->when($r->q, fn($x)=>$x->where('title','like',"%{$r->q}%"))
            ->orderByDesc('priority')->latest()
            ->paginate(10);
        return view('admin.projects.index', compact('q'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('admin.projects.create');   
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProjectRequest $req) {
        $p = Project::create($this->map($req));
        if ($req->hasFile('cover')) $p->addMediaFromRequest('cover')->toMediaCollection('cover');
        if ($req->hasFile('gallery')) foreach($req->file('gallery') as $img) {
            $p->addMedia($img)->toMediaCollection('gallery');
        }
        return redirect()->route('admin.projects.index')->with('ok','Projet créé');
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        // return view('admin.projects.show', compact('project'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project)
    {
        return view('admin.projects.edit', compact('project'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProjectRequest $request, Project $project)
    {
        $project->update($this->map($req));

        if ($req->hasFile('cover')) {
            $project->clearMediaCollection('cover');
            $project->addMediaFromRequest('cover')->toMediaCollection('cover');
        }
        if ($req->hasFile('gallery')) {
            $project->clearMediaCollection('gallery');
            foreach($req->file('gallery') as $img) {
                $project->addMedia($img)->toMediaCollection('gallery');
            }
        }
        return back()->with('ok','Projet mis à jour');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        $project->delete();
        return back()->with('ok','Projet supprimé');
    }

    /** Liste des archivés */
    public function archived(Request $r) {
        $q = Project::onlyTrashed()
            ->when($r->q, fn($x)=>$x->where('title','like',"%{$r->q}%"))
            ->orderByDesc('deleted_at')->paginate(10);
        return view('admin.projects.archived', compact('q'));
    }

     /** Restaurer un projet archivé */
    public function restore($id) {
        $p = Project::onlyTrashed()->findOrFail($id);
        $p->restore();
        return redirect()->route('admin.projects.archived')->with('ok','Projet restauré');
    }

    /** Suppression définitive (+ nettoyage médias) */
    public function forceDelete($id) {
        $p = Project::onlyTrashed()->findOrFail($id);
        $p->clearMediaCollection('cover');
        $p->clearMediaCollection('gallery');
        $p->forceDelete();
        return redirect()->route('admin.projects.archived')->with('ok','Projet supprimé définitivement');
    }

    private function map(Request $r): array {
        return [
            'title' => (string)$r->input('title'),
            'slug' => $r->filled('slug') ? (string)$r->input('slug') : null,
            'summary' => (string)$r->input('summary'),
            'stack' => collect(explode(',', (string)$r->input('stack')))->map(fn($s)=>trim($s))->filter()->values()->all(),
            'github_url' => (string)$r->input('github_url'),
            'demo_url' => (string)$r->input('demo_url'),
            'theme' => [
                'primary' => $r->input('primary') ?: '#6C5CE7',
                'background' => $r->input('background') ?: '#0B1020',
                'text' => $r->input('text') ?: '#F8FAFC',
                'accent' => $r->input('accent') ?: '#00D1B2',
            ],
            'is_published' => (bool)$r->boolean('is_published'),
            'priority' => (int)$r->integer('priority', 0),
        ];
    }
}
