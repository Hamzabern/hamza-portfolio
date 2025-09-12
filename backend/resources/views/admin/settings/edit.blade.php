@extends('layouts.admin')
@section('title','Settings'); @section('page','Settings')

@section('content')
@if(session('ok')) <div class="card bg-green-50 dark:bg-green-900/30 border border-green-200">✅ {{ session('ok') }}</div> @endif

<form method="post" action="{{ route('admin.settings.update') }}" enctype="multipart/form-data" class="card space-y-6">
  @csrf

  <div class="grid md:grid-cols-2 gap-4">
    <div>
      <label class="block text-sm mb-1">Site name</label>
      <input name="site_name" class="input" value="{{ old('site_name',$s->site_name) }}" required>
    </div>
    <div>
      <label class="block text-sm mb-1">Tagline</label>
      <input name="tagline" class="input" value="{{ old('tagline',$s->tagline) }}">
    </div>

    <div>
      <label class="block text-sm mb-1">Logo</label>
      @if($s->logo_path) <img src="{{ url($s->logo_path) }}" class="h-10 mb-2"> @endif
      <input type="file" name="logo" accept="image/*" class="input">
    </div>
    <div>
      <label class="block text-sm mb-1">Favicon</label>
      @if($s->favicon_path) <img src="{{ url($s->favicon_path) }}" class="h-10 mb-2"> @endif
      <input type="file" name="favicon" accept="image/*" class="input">
    </div>

    @php $t = $s->theme_default ?? []; @endphp
    <div><label class="block text-sm mb-1">Primary</label><input type="color" name="primary" class="input" value="{{ old('primary',$t['primary'] ?? '#6C5CE7') }}"></div>
    <div><label class="block text-sm mb-1">Background</label><input type="color" name="background" class="input" value="{{ old('background',$t['background'] ?? '#0B1020') }}"></div>
    <div><label class="block text-sm mb-1">Text</label><input type="color" name="text" class="input" value="{{ old('text',$t['text'] ?? '#F8FAFC') }}"></div>
    <div><label class="block text-sm mb-1">Accent</label><input type="color" name="accent" class="input" value="{{ old('accent',$t['accent'] ?? '#00D1B2') }}"></div>

    <div><label class="block text-sm mb-1">GitHub</label><input name="github" class="input" value="{{ old('github',$s->social['github'] ?? '') }}"></div>
    <div><label class="block text-sm mb-1">LinkedIn</label><input name="linkedin" class="input" value="{{ old('linkedin',$s->social['linkedin'] ?? '') }}"></div>
    <div><label class="block text-sm mb-1">WhatsApp</label><input name="whatsapp" class="input" value="{{ old('whatsapp',$s->social['whatsapp'] ?? '') }}"></div>
    <div><label class="block text-sm mb-1">Email</label><input name="email" type="email" class="input" value="{{ old('email',$s->social['email'] ?? '') }}"></div>

    <div>
      <label class="block text-sm mb-1">CTA Type</label>
      <select name="cta_type" class="input">
        @foreach(['email','whatsapp','calendly','link'] as $opt)
          <option value="{{ $opt }}" @selected(old('cta_type',$s->cta['type'] ?? '')===$opt)>{{ ucfirst($opt) }}</option>
        @endforeach
      </select>
    </div>
    <div>
      <label class="block text-sm mb-1">CTA Value</label>
      <input name="cta_value" class="input" value="{{ old('cta_value',$s->cta['value'] ?? '') }}">
    </div>

    <div class="md:col-span-2">
      <label class="block text-sm mb-1">Meta title (default)</label>
      <input name="meta_title" class="input" value="{{ old('meta_title',$s->seo['meta_title'] ?? '') }}">
    </div>
    <div class="md:col-span-2">
      <label class="block text-sm mb-1">Meta description (default)</label>
      <textarea name="meta_desc" class="input" rows="2">{{ old('meta_desc',$s->seo['meta_desc'] ?? '') }}</textarea>
    </div>
  </div>

  <div class="flex gap-2">
    <button class="btn btn-primary">Enregistrer</button>
    <a href="{{ route('admin.home') }}" class="btn">Annuler</a>
  </div>
</form>
@endsection
