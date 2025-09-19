<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SiteSetting extends Model
{
    protected $fillable = ['title','tagline','about','theme'];
    protected $casts = [
        'theme' => 'array',
    ];
}
