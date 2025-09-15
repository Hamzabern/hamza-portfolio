<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\SiteSetting;

class siteController extends Controller
{
   public function show()
    {
        return cache()->remember('site_settings_payload', 3600, function(){
            $s = SiteSetting::first();
            if (!$s) {
                return [
                    'site_name'=>'Hamza Bernoussi — Full-Stack Developer',
                    'tagline'=>null,
                    'logo_url'=>null,
                    'favicon_url'=>null,
                    'theme_default'=>['primary'=>'#6C5CE7','background'=>'#0B1020','text'=>'#F8FAFC','accent'=>'#00D1B2'],
                    'social'=>['github'=>null,'linkedin'=>null,'whatsapp'=>null,'email'=>null],
                    'cta'=>['type'=>null,'value'=>null],
                    'seo'=>['meta_title'=>null,'meta_desc'=>null],
                ];
            }
            return [
                'site_name'=>$s->site_name,
                'tagline'=>$s->tagline,
                'logo_url'=>$s->logo_path ? url($s->logo_path) : null,
                'favicon_url'=>$s->favicon_path ? url($s->favicon_path) : null,
                'theme_default'=>$s->theme_default,
                'social'=>$s->social,
                'cta'=>$s->cta,
                'seo'=>$s->seo,
            ];
        });
    }
}
