<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\SiteController;

Route::get('/projects', [ProjectController::class,'index']);
Route::get('/projects/{slug}', [ProjectController::class,'show']);
Route::get('/site', [SiteController::class,'show']);
