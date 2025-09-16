<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Admin\ProjectController as AdminProject;
use App\Http\Controllers\Admin\SettingController as AdminSetting;
use App\Http\Controllers\Admin\ContactController as AdminContact;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;
use App\Models\Project;

Route::get('/sitemap.xml', function () {
    $sm = Sitemap::create()
      ->add(Url::create('/')->setPriority(1.0))
      ->add(Url::create('/projects')->setPriority(0.8));
    Project::where('is_published',true)->get()->each(function($p) use ($sm){
        $sm->add(Url::create("/projects/{$p->slug}")->setLastModificationDate($p->updated_at));
    });
    return $sm->toResponse(request());
});
Route::view('/robots.txt', 'robots')->name('robots');

Route::get('/', fn () => view('welcome'));

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', function () {
        return auth()->user()->is_admin
            ? redirect()->route('admin.home')
            : view('dashboard'); 
    })->name('dashboard');

    // --- Zone Admin ---
    Route::prefix('admin')->name('admin.')->middleware('admin')->group(function () {

        // Accueil admin
        Route::view('/', 'admin.dashboard')->name('home');

        // Projects CRUD (index, create, store, show, edit, update, destroy)
        Route::get('/projects', [AdminProject::class, 'index'])->name('projects.index');
        Route::get('/projects/create', [AdminProject::class, 'create'])->name('projects.create');
        Route::post('/projects', [AdminProject::class, 'store'])->name('projects.store');
        // Route::get('/projects/{project}', [AdminProject::class, 'show'])->name('projects.show');
        Route::get('/projects/{project}/edit', [AdminProject::class, 'edit'])->name('projects.edit');
        Route::put('/projects/{project}', [AdminProject::class, 'update'])->name('projects.update');
        Route::delete('/projects/{project}', [AdminProject::class, 'destroy'])->name('projects.destroy');
        Route::get('/projects/archived', [AdminProject::class, 'archived'])->name('projects.archived');
        Route::post('/projects/{id}/restore', [AdminProject::class, 'restore'])->name('projects.restore');
        Route::delete('/projects/{id}/force', [AdminProject::class, 'forceDelete'])->name('projects.force');
        // Route::get('/projects/{project}', [AdminProject::class, 'show'])->name('projects.show');
        Route::get('/contacts', [AdminContact::class,'index'])->name('contacts.index');
        Route::get('/contacts/{contact}', [AdminContact::class,'show'])->name('contacts.show');
        Route::delete('/contacts/{contact}', [AdminContact::class,'destroy'])->name('contacts.destroy');


        // (plus tard) Settings, Testimonials, Media...
        Route::get('/settings', [AdminSetting::class, 'edit'])->name('settings.edit');
        Route::post('/settings', [AdminSetting::class, 'update'])->name('settings.update');
    });

    // Profil (Breeze)
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
