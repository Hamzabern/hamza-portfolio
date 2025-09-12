<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Project;

class ProjectController extends Controller
{
    public function index() {
        return Project::where('is_published', true)
            ->orderByDesc('priority')->latest()->get()
            ->map(fn($p)=>$this->toPayload($p));
    }

    public function show($slug) {
        $p = Project::where('slug',$slug)->where('is_published',true)->firstOrFail();
        return $this->toPayload($p);
    }

    private function toPayload(Project $p): array {
        return [
            'title' => $p->title,
            'slug' => $p->slug,
            'summary' => $p->summary,
            'stack' => $p->stack,
            'github_url' => $p->github_url,
            'demo_url' => $p->demo_url,
            'theme' => $p->theme,
            'cover_url' => $p->cover_path ? asset('storage/'.$p->cover_path) : null,
            'gallery_urls' => collect($p->gallery_paths ?? [])->map(fn($x)=>asset('storage/'.$x))->values(),
            'priority' => $p->priority,
            'published' => $p->is_published,
            'created_at' => $p->created_at,
        ];
    }
}
