<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', function () {
        return auth()->user()->is_admin
            ? redirect()->route('admin.home')
            : view('dashboard');
    })->name('dashboard');

    Route::middleware('admin')->group(function () {
        Route::view('/admin', 'admin.dashboard')->name('admin.home');

        Route::resource('admin/projects', \App\Http\Controllers\Admin\ProjectController::class)
            ->names('admin.projects');
    });

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
