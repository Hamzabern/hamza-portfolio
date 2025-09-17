<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Project;

class ProjectController extends Controller
{
    public function index() {
        $projects = Project::where('is_published', true)
            ->orderByDesc('priority')->latest()->get();

        return $projects->map(fn($p) => $this->toPayload($p))->values();
    }

    public function show($slug) {
        $p = Project::where('slug', $slug)
            ->where('is_published', true)
            ->firstOrFail();

        return $this->toPayload($p);
    }

     private function toPayload(Project $p): array
    {
        return [
            'title'        => $p->title,
            'slug'         => $p->slug,
            'summary'      => $p->summary,
            'stack'        => $p->stack,
            'github_url'   => $p->github_url,
            'demo_url'     => $p->demo_url,
            'theme'        => $p->theme,
            'cover_url'    => optional($p->getFirstMedia('cover'))->getUrl(),
            'gallery_urls' => $p->getMedia('gallery')->map->getUrl()->all(),
            'priority'     => $p->priority,
            'published'    => (bool)$p->is_published,
            'og_image_url' => route('og.project', ['slug' => $p->slug]),
            'created_at'   => $p->created_at?->toISOString(),
        ];
    }
}
