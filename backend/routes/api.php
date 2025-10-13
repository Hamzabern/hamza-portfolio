<?php

use Illuminate\Support\Facades\Route;
use App\Models\SiteSetting;
use App\Models\Project;
use App\Http\Controllers\Api\ContactController;


Route::get('/health', fn() => response()->json(['ok'=>true,'time'=>now()->toIso8601String()]));

Route::get('/site', function () {
    return response()->json(SiteSetting::query()->first() ?? (object)[]);
});

Route::get('/projects', function () {
    $projects = Project::query()
        ->where('is_published', true)
        ->orderByDesc('created_at')
        ->get(['title','slug','summary','stack','theme','cover_url','created_at']);
    return response()->json($projects);
});

Route::get('/projects/{slug}', function (string $slug) {
    $project = Project::query()
        ->where('slug', $slug)
        ->where('is_published', true)
        ->firstOrFail();
    return response()->json($project);
});

Route::middleware('throttle:contact')->post('/contact', ContactController::class);
Route::get('/health', fn() => response()->json(['ok'=>true,'time'=>now()]));
