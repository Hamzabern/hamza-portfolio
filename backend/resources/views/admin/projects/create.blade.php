@extends('layouts.admin')
@section('title','Modifier un projet'); @section('page','Modifier un projet')

@section('content')
  <form method="post" action="{{ route('admin.projects.store') }}" enctype="multipart/form-data" class="card space-y-4">
    @csrf
    <div class="grid md:grid-cols-2 gap-4">
      <div>
        <label class="block text-sm mb-1">Titre</label>
        <input name="title" class="input" required>
      </div>
      <div>
        <label class="block text-sm mb-1">Slug (auto si vide)</label>
        <input name="slug" class="input">
      </div>
      <div class="md:col-span-2">
        <label class="block text-sm mb-1">Résumé</label>
        <textarea name="summary" class="input" rows="3"></textarea>
      </div>
      <div>
        <label class="block text-sm mb-1">Stack (séparée par des virgules)</label>
        <input name="stack" class="input" placeholder="Laravel, React, MySQL">
      </div>
      <div><label class="block text-sm mb-1">GitHub</label><input name="github_url" class="input"></div>
      <div><label class="block text-sm mb-1">Demo</label><input name="demo_url" class="input"></div>

      <div><label class="block text-sm mb-1">Primary</label><input type="color" name="primary" class="input" value="#6C5CE7"></div>
      <div><label class="block text-sm mb-1">Background</label><input type="color" name="background" class="input" value="#0B1020"></div>
      <div><label class="block text-sm mb-1">Text</label><input type="color" name="text" class="input" value="#F8FAFC"></div>
      <div><label class="block text-sm mb-1">Accent</label><input type="color" name="accent" class="input" value="#00D1B2"></div>

      <div><label class="block text-sm mb-1">Cover</label><input type="file" name="cover" accept="image/*" class="input"></div>
      <div><label class="block text-sm mb-1">Galerie (multi)</label><input type="file" name="gallery[]" multiple accept="image/*" class="input"></div>

      <div><label class="block text-sm mb-1">Publié</label><input type="checkbox" name="is_published" value="1"></div>
      <div><label class="block text-sm mb-1">Priority</label><input type="number" name="priority" class="input" value="0"></div>
    </div>

    <div class="flex gap-2">
      <button class="btn btn-primary">Enregistrer</button>
      <a href="{{ route('admin.projects.index') }}" class="btn">Annuler</a>
    </div>
  </form>
@endsection
