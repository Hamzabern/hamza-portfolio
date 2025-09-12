<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SiteSetting extends Model {
    protected $fillable = ['site_name','tagline','logo_path','favicon_path','theme_default','social','cta','seo'];
    protected $casts = [
        'theme_default'=>'array','social'=>'array','cta'=>'array','seo'=>'array'
    ];
}

