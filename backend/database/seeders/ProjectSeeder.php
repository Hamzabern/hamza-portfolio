<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use App\Models\Project;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Project::updateOrCreate(
            ['slug' => 'optitask'],
            [
                'title'        => 'Optitask',
                'summary'      => 'Gestion de projets & tâches (Node/React/Tailwind).',
                'stack'        => ['React','Node.js','Express','MongoDB','Tailwind'],
                'theme'        => ['primary' => '#0ea5e9', 'bg' => '#0b1220'],
                'cover_url'    => 'https://picsum.photos/seed/optitask/1200/630',
                'is_published' => true,
            ]
        );

        // Projet publié 2
        Project::updateOrCreate(
            ['slug' => 'portfolio-laravel-react'],
            [
                'title'        => 'Portfolio Laravel + React',
                'summary'      => 'Site personnel performant avec API Laravel et front React.',
                'stack'        => ['Laravel','React','Vite','MySQL','Tailwind'],
                'theme'        => ['primary' => '#22d3ee', 'bg' => '#071521'],
                'cover_url'    => 'https://picsum.photos/seed/portfolio/1200/630',
                'is_published' => true,
            ]
        );

        // Projet non publié (pour vérifier le filtre)
        Project::updateOrCreate(
            ['slug' => 'secret-lab'],
            [
                'title'        => 'Secret Lab',
                'summary'      => 'R&D perso (brouillon).',
                'stack'        => ['Go','Svelte'],
                'theme'        => ['primary' => '#a78bfa', 'bg' => '#0f0b1a'],
                'cover_url'    => null,
                'is_published' => false,
            ]
        );
    }
}
