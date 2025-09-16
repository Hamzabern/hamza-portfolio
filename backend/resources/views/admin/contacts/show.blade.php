@extends('layouts.admin')
@section('title','Message'); @section('page','Message')

@section('content')
  <div class="card p-6 space-y-3">
    <div><b>Nom:</b> {{ $contact->name }}</div>
    <div><b>Email:</b> <a class="underline" href="mailto:{{ $contact->email }}">{{ $contact->email }}</a></div>
    <div><b>Sujet:</b> {{ $contact->subject ?? '—' }}</div>
    <div class="pt-3 border-t"><b>Message:</b><div class="mt-2 whitespace-pre-wrap">{{ $contact->message }}</div></div>
    <div class="text-xs opacity-60 pt-3 border-t">
      IP: {{ $contact->meta['ip'] ?? '' }} · UA: {{ $contact->meta['ua'] ?? '' }}
    </div>
    <div class="flex gap-2 pt-3">
      <a href="{{ route('admin.contacts.index') }}" class="btn">← Retour</a>
      <form method="post" action="{{ route('admin.contacts.destroy',$contact) }}" onsubmit="return confirm('Supprimer ?')">
        @csrf @method('DELETE') <button class="btn">Supprimer</button>
      </form>
    </div>
  </div>
@endsection
