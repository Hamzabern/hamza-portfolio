<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\SiteSetting;

class SiteSettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        SiteSetting::query()->firstOrCreate(
            ['title' => 'Hamza Bernoussi — Portfolio'],
            [
                'tagline' => 'Full-Stack Developer',
                'about'   => 'Portfolio minimal propulsé par Laravel + React.',
                'theme'   => ['primary' => '#111827', 'accent' => '#22d3ee'],
            ]
        );
    }
}
