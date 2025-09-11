@extends('layouts.admin')
@section('title','Dashboard'); @section('page','Dashboard')

@section('content')
  <div class="grid md:grid-cols-3 gap-4">
    <div class="bg-white dark:bg-slate-900 rounded-2xl p-4 shadow">
      <div class="text-sm opacity-70">Projets publiés</div>
      <div class="text-3xl font-semibold mt-2">0</div>
    </div>
    <div class="bg-white dark:bg-slate-900 rounded-2xl p-4 shadow">
      <div class="text-sm opacity-70">Contacts</div>
      <div class="text-3xl font-semibold mt-2">0</div>
    </div>
    <div class="bg-white dark:bg-slate-900 rounded-2xl p-4 shadow">
      <div class="text-sm opacity-70">Témoignages</div>
      <div class="text-3xl font-semibold mt-2">0</div>
    </div>
  </div>

  <div class="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow">
    <h2 class="text-lg font-semibold mb-3">Dernières actions</h2>
    <p class="opacity-70">Aucune donnée pour l’instant. On branchera ça quand on aura Projects/Contacts.</p>
  </div>
@endsection
