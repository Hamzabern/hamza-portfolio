{{-- resources/views/admin/projects/archived.blade.php --}}
@extends('layouts.admin')
@section('title','Projets archivés'); @section('page','Projets archivés')

@section('content')
  <div class="card">
    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead>
          <tr class="text-left border-b">
            <th class="py-2">Titre</th>
            <th>Slug</th>
            <th>Archivé le</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          @forelse($q as $p)
            <tr class="border-b last:border-0">
              <td class="py-2 font-medium">{{ $p->title }}</td>
              <td>{{ $p->slug }}</td>
              <td>{{ $p->deleted_at }}</td>
              <td class="text-right">
                <form method="post" action="{{ route('admin.projects.restore',$p->id) }}" class="inline">
                  @csrf
                  <button class="btn">Restaurer</button>
                </form>
                <form method="post" action="{{ route('admin.projects.force',$p->id) }}" class="inline" onsubmit="return confirm('Supprimer définitivement ?')">
                  @csrf @method('DELETE')
                  <button class="btn">Suppr. définitive</button>
                </form>
              </td>
            </tr>
          @empty
            <tr><td colspan="4" class="py-8 text-center opacity-70">Aucun projet archivé</td></tr>
          @endforelse
        </tbody>
      </table>
    </div>
    <div class="mt-4">{{ $q->links() }}</div>
  </div>
@endsection
