@extends('layouts.admin')
@section('title','Dashboard'); @section('page','Dashboard')

@section('content')
  <!-- KPIs -->
  <div class="grid md:grid-cols-3 gap-4">
    <div class="kpi">
      <div class="text-sm opacity-70">Projets publiés</div>
      <div class="text-3xl font-semibold mt-2">{{ \App\Models\Project::where('is_published',true)->count() }}</div>
    </div>
    <div class="kpi">
      <div class="text-sm opacity-70">Projets archivés</div>
      <div class="text-3xl font-semibold mt-2">{{ \App\Models\Project::onlyTrashed()->count() }}</div>
    </div>
    <div class="kpi">
      <div class="text-sm opacity-70">Dernière mise à jour</div>
      <div class="text-3xl font-semibold mt-2">
        {{ optional(\App\Models\Project::latest('updated_at')->first())->updated_at?->diffForHumans() ?? '—' }}
      </div>
    </div>
  </div>

  <!-- Quick actions -->
  <div class="grid md:grid-cols-3 gap-4">
    <a href="{{ route('admin.projects.create') }}" class="card p-5 flex items-start gap-3 hover:-translate-y-0.5 hover:shadow-lg transition">
      <div class="text-2xl">➕</div>
      <div>
        <div class="font-semibold">Nouveau projet</div>
        <div class="text-sm opacity-70">Ajoute un case study avec couleurs, cover & galerie</div>
      </div>
    </a>
    <a href="{{ route('admin.projects.index') }}" class="card p-5 flex items-start gap-3 hover:-translate-y-0.5 hover:shadow-lg transition">
      <div class="text-2xl">📦</div>
      <div>
        <div class="font-semibold">Gérer les projets</div>
        <div class="text-sm opacity-70">Rechercher, éditer, publier/archiver</div>
      </div>
    </a>
    <a href="{{ route('admin.settings.edit') }}" class="card p-5 flex items-start gap-3 hover:-translate-y-0.5 hover:shadow-lg transition">
      <div class="text-2xl">⚙️</div>
      <div>
        <div class="font-semibold">Paramètres du site</div>
        <div class="text-sm opacity-70">Nom, logo, couleurs globales, réseaux, CTA</div>
      </div>
    </a>
  </div>

  <!-- Dernières actions (placeholder) -->
  <div class="card p-6">
    <h2 class="text-lg font-semibold mb-3">Dernières actions</h2>
    <p class="opacity-70">On branchera l’historique après (events/activities).</p>
  </div>
@endsection
