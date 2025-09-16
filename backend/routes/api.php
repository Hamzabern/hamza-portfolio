<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\SiteController;
use App\Http\Controllers\Api\ContactController;


Route::get('/projects', [ProjectController::class,'index']);
Route::get('/projects/{slug}', [ProjectController::class,'show']);
Route::get('/site', [SiteController::class,'show']);
Route::post('/contact', [ContactController::class,'store'])->middleware('throttle:6,1'); 
