@extends('layouts.admin')
@section('title','Dashboard'); @section('page','Dashboard')

@section('content')
  <div class="grid md:grid-cols-3 gap-4">
    <div class="kpi">
      <div class="text-sm opacity-70">Projets publiés</div>
      <div class="text-3xl font-semibold mt-2">0</div>
    </div>
    <div class="kpi">
      <div class="text-sm opacity-70">Contacts</div>
      <div class="text-3xl font-semibold mt-2">0</div>
    </div>
    <div class="kpi">
      <div class="text-sm opacity-70">Témoignages</div>
      <div class="text-3xl font-semibold mt-2">0</div>
    </div>
  </div>

  <div class="card mt-4">
    <h2 class="text-lg font-semibold mb-3">Dernières actions</h2>
    <p class="opacity-70">Aucune donnée pour l’instant.</p>
  </div>
@endsection
