<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Project extends Model
{
    protected $fillable = [
        'title','slug','summary','stack','github_url','demo_url','theme','is_published','priority'
    ];

    protected $casts = [
        'stack' => 'array',
        'theme' => 'array',
        'is_published' => 'boolean',
    ];

    protected static function booted(): void
    {
        static::saving(function($p){
            if (!$p->slug) $p->slug = \Str::slug($p->title);
        });
    }
}
