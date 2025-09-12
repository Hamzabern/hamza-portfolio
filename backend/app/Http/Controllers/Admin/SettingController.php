<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\SiteSetting;

class SettingController extends Controller
{
   public function edit() {
        $s = SiteSetting::first() ?? new SiteSetting;
        return view('admin.settings.edit', compact('s'));
   }

   public function update(Request $r) {
       $data = $r->validate([
           'site_name'=>'required|string|min:3',
            'tagline'=>'nullable|string',
            'primary'=>'nullable|string','background'=>'nullable|string','text'=>'nullable|string','accent'=>'nullable|string',
            'github'=>'nullable|url','linkedin'=>'nullable|url','whatsapp'=>'nullable|string','email'=>'nullable|email',
            'cta_type'=>'nullable|in:email,whatsapp,calendly,link','cta_value'=>'nullable|string',
            'meta_title'=>'nullable|string','meta_desc'=>'nullable|string',
            'logo'=>'nullable|image|max:4096','favicon'=>'nullable|image|max:2048',
       ]);

       $s = SiteSetting::first() ?? new SiteSetting;
       $s->site_name = $data['site_name'];
       $s->tagline = $data['tagline'] ?? null;

       $s->theme_default = [
           'primary' => $data['primary'] ?? '#6C5CE7',
           'background' => $data['background'] ?? '#0B1020',
           'text' => $data['text'] ?? '#F8FAFC',
           'accent' => $data['accent'] ?? '#00D1B2',
       ];
       $s->social = [
           'github' => $data['github'] ?? null,
           'linkedin' => $data['linkedin'] ?? null,
           'whatsapp' => $data['whatsapp'] ?? null,
           'email' => $data['email'] ?? null,
       ];
       $s->cta = [
           'type' => $data['cta_type'] ?? null,
           'value' => $data['cta_value'] ?? null,
       ];
       $s->seo = [
           'meta_title' => $data['meta_title'] ?? null,
           'meta_desc' => $data['meta_desc'] ?? null,
       ];
       
       if ($r->hasFile('logo')) {
           $path = $r->file('logo')->store('public/branding');
           $s->logo_path = str::replacefirst('public/', 'storage/', $path);
       }
       if ($r->hasFile('favicon')) {
           $path = $r->file('favicon')->store('public/branding');
           $s->favicon_path = str::replacefirst('public/', 'storage/', $path);
       }

       $s->save();
       cache()->forget('site_settings_payload');
        return back()->with('ok','Paramètres enregistrés');
   }
}
