@extends('layouts.admin')
@section('title','Projects'); @section('page','Projects')

@section('content')
  <div class="card">
    <div class="flex items-center justify-between mb-4">
      <form method="get" class="flex gap-2">
        <input name="q" value="{{ request('q') }}" class="input" placeholder="Rechercher un projet…">
        <button class="btn">Rechercher</button>
      </form>
      <a href="{{ route('admin.projects.create') }}" class="btn btn-primary">+ Nouveau</a>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead>
          <tr class="text-left border-b">
            <th class="py-2">Titre</th>
            <th>Slug</th>
            <th>Publié</th>
            <th>Priority</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          @forelse($q as $p)
            <tr class="border-b last:border-0">
              <td class="py-2 font-medium">{{ $p->title }}</td>
              <td>{{ $p->slug }}</td>
              <td>{{ $p->is_published ? 'Oui' : 'Non' }}</td>
              <td>{{ $p->priority }}</td>
              <td class="text-right">
                <a class="btn" href="{{ route('admin.projects.edit',$p) }}">Edit</a>
                <form method="post" action="{{ route('admin.projects.destroy',$p) }}" class="inline">
                  @csrf @method('DELETE')
                  <button class="btn" onclick="return confirm('Supprimer ?')">Delete</button>
                </form>
              </td>
            </tr>
          @empty
            <tr><td colspan="5" class="py-8 text-center opacity-70">Aucun projet</td></tr>
          @endforelse
        </tbody>
      </table>
    </div>

    <div class="mt-4">{{ $q->links() }}</div>
  </div>
@endsection
