<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = ['title','slug','summary','stack','theme','cover_url','is_published'];
    protected $casts = [
        'stack' => 'array',
        'theme' => 'array',
        'is_published' => 'boolean',
    ];
}
