@extends('layouts.admin')
@section('title','Contacts'); @section('page','Contacts')

@section('content')
  <div class="card">
    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead><tr class="text-left border-b">
          <th class="py-2">Nom</th><th>Email</th><th>Sujet</th><th>Date</th><th></th>
        </tr></thead>
        <tbody>
          @forelse($q as $c)
            <tr class="border-b last:border-0">
              <td class="py-2 font-medium">{{ $c->name }}</td>
              <td>{{ $c->email }}</td>
              <td>{{ $c->subject }}</td>
              <td>{{ $c->created_at->diffForHumans() }}</td>
              <td class="text-right">
                <a class="btn" href="{{ route('admin.contacts.show',$c) }}">Voir</a>
                <form method="post" action="{{ route('admin.contacts.destroy',$c) }}" class="inline" onsubmit="return confirm('Supprimer ?')">
                  @csrf @method('DELETE') <button class="btn">Suppr</button>
                </form>
              </td>
            </tr>
          @empty
            <tr><td colspan="5" class="py-8 text-center opacity-70">Aucun message</td></tr>
          @endforelse
        </tbody>
      </table>
    </div>
    <div class="mt-4">{{ $q->links() }}</div>
  </div>
@endsection
