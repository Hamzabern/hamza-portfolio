<?php
use App\Http\Controllers\Api\ProjectController;

Route::get('/projects', [ProjectController::class,'index']);
Route::get('/projects/{slug}', [ProjectController::class,'show']);

