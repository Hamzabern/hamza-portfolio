@extends('layouts.admin')
@section('title','Modifier un projet'); @section('page','Modifier un projet')

@section('content')
  <div class="flex items-center justify-between">
    <a href="{{ route('admin.projects.index') }}" class="btn">← Retour</a>

    <div class="flex items-center gap-2">
      {{-- Preview public (front React utilisera /projects/{slug}) --}}
      @if($project->slug)
        <a href="/projects/{{ $project->slug }}" target="_blank" class="btn">Preview</a>
      @endif

      @if($project->deleted_at)
        <form method="post" action="{{ route('admin.projects.restore', $project->id) }}" class="inline">
          @csrf
          <button class="btn">Restaurer</button>
        </form>
        <form method="post" action="{{ route('admin.projects.force', $project->id) }}" class="inline" onsubmit="return confirm('Supprimer définitivement ? Cette action est irréversible.')">
          @csrf @method('DELETE')
          <button class="btn">Suppr. définitive</button>
        </form>
      @else
        <form method="post" action="{{ route('admin.projects.destroy', $project) }}" class="inline" onsubmit="return confirm('Archiver ce projet ?')">
          @csrf @method('DELETE')
          <button class="btn">Archiver</button>
        </form>
      @endif
    </div>
  </div>

  <form method="post" action="{{ route('admin.projects.update', $project) }}" enctype="multipart/form-data" class="card space-y-4 mt-4">
    @csrf
    @method('PUT')

    <div class="grid md:grid-cols-2 gap-4">
      <div>
        <label class="block text-sm mb-1">Titre</label>
        <input name="title" class="input" value="{{ old('title',$project->title) }}" required>
      </div>
      <div>
        <label class="block text-sm mb-1">Slug (auto si vide)</label>
        <input name="slug" class="input" value="{{ old('slug',$project->slug) }}">
      </div>

      <div class="md:col-span-2">
        <label class="block text-sm mb-1">Résumé</label>
        <textarea name="summary" class="input" rows="3">{{ old('summary',$project->summary) }}</textarea>
      </div>

      <div>
        <label class="block text-sm mb-1">Stack (séparée par virgules)</label>
        <input name="stack" class="input" value="{{ old('stack', implode(', ', $project->stack ?? [])) }}">
      </div>
      <div>
        <label class="block text-sm mb-1">GitHub</label>
        <input name="github_url" class="input" value="{{ old('github_url',$project->github_url) }}">
      </div>
      <div>
        <label class="block text-sm mb-1">Demo</label>
        <input name="demo_url" class="input" value="{{ old('demo_url',$project->demo_url) }}">
      </div>

      @php $t = $project->theme ?? []; @endphp
      <div><label class="block text-sm mb-1">Primary</label><input type="color" name="primary" class="input" value="{{ old('primary',$t['primary'] ?? '#6C5CE7') }}"></div>
      <div><label class="block text-sm mb-1">Background</label><input type="color" name="background" class="input" value="{{ old('background',$t['background'] ?? '#0B1020') }}"></div>
      <div><label class="block text-sm mb-1">Text</label><input type="color" name="text" class="input" value="{{ old('text',$t['text'] ?? '#F8FAFC') }}"></div>
      <div><label class="block text-sm mb-1">Accent</label><input type="color" name="accent" class="input" value="{{ old('accent',$t['accent'] ?? '#00D1B2') }}"></div>

      <div>
        <label class="block text-sm mb-1">Cover</label>
        @if($project->getFirstMediaUrl('cover'))
          <img src="{{ $project->getFirstMediaUrl('cover') }}" alt="" class="w-40 h-24 object-cover rounded mb-2">
        @endif
        <input type="file" name="cover" accept="image/*" class="input">
      </div>

      <div>
        <label class="block text-sm mb-1">Galerie (multi)</label>
        <div class="flex gap-2 mb-2">
          @foreach($project->getMedia('gallery') as $m)
            <img src="{{ $m->getUrl() }}" class="w-20 h-20 object-cover rounded">
          @endforeach
        </div>
        <input type="file" name="gallery[]" multiple accept="image/*" class="input">
      </div>

      <div>
        <label class="block text-sm mb-1">Publié</label>
        <input type="checkbox" name="is_published" value="1" @checked(old('is_published', $project->is_published))>
      </div>

      <div>
        <label class="block text-sm mb-1">Priority</label>
        <input type="number" name="priority" class="input" value="{{ old('priority',$project->priority) }}">
      </div>
    </div>

    <div class="flex gap-2">
      <button class="btn btn-primary">Enregistrer</button>
      <a href="{{ route('admin.projects.index') }}" class="btn">Annuler</a>
    </div>
  </form>
@endsection
