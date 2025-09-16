<!doctype html>
<html lang="fr" class="h-full" x-data="{dark: JSON.parse(localStorage.getItem('adm_dark') ?? 'false')}"
      x-bind:class="dark ? 'dark' : ''" x-init="$watch('dark', v => localStorage.setItem('adm_dark', JSON.stringify(v)))">
<head>
  <meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
  <title>@yield('title','Admin')</title>
  @vite(['resources/css/app.css','resources/js/app.js'])
</head>
<body class="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
  <div class="flex min-h-screen">

    <!-- Sidebar -->
    <aside class="hidden md:flex w-72 flex-col gap-3 p-4 border-r border-slate-200 dark:border-slate-800">
      <a href="{{ route('admin.home') }}" class="flex items-center gap-3 text-xl font-bold">
        <span class="inline-flex w-10 h-10 rounded-2xl bg-indigo-500/90 items-center justify-center text-white shadow">⚡</span>
        <span>Admin</span>
      </a>
      <nav class="mt-4 grid gap-1">
        <x-admin.nav-item href="{{ route('admin.home') }}"     label="Dashboard" icon="🏠" />
        <x-admin.nav-item href="{{ route('admin.projects.index') }}" label="Projects"  icon="📦" />
        <x-admin.nav-item href="{{ route('admin.settings.edit') }}"  label="Settings"  icon="⚙️" />
        <x-admin.nav-item href="{{ route('admin.projects.archived') }}" label="Archived"  icon="🗃️" />
        <x-admin.nav-item href="{{ route('admin.contacts.index') }}" label="Contacts" icon="✉️" />
      </nav>
      <div class="mt-auto text-xs opacity-60">Connecté : {{ auth()->user()->name }}</div>
    </aside>

    <!-- Content -->
    <main class="flex-1 p-4 md:p-8">
      <!-- Topbar -->
      <header class="flex items-center justify-between mb-6">
        <div class="flex items-center gap-3">
          <button class="md:hidden p-2 rounded-lg border">☰</button>
          <h1 class="text-2xl font-semibold">@yield('page','')</h1>
        </div>
        <div class="flex items-center gap-3">
          <input class="input" placeholder="Rechercher…"/>
          <button x-on:click="dark=!dark" class="btn" title="Dark/Light">🌓</button>
          <form method="POST" action="{{ route('logout') }}">
            @csrf <button class="btn" title="Logout">⎋</button>
          </form>
        </div>
      </header>

      <div class="space-y-6 fade-in">@yield('content')</div>
    </main>
  </div>
</body>
</html>
