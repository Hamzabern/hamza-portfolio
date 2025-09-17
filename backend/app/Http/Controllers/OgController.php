<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\SiteSetting;
use Illuminate\Http\Request;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
use Illuminate\Support\Facades\Storage;

class OgController extends Controller
{
    public function project(string $slug, Request $request)
    {
        $project = Project::where('slug', $slug)->firstOrFail();
        $site = SiteSetting::first();

        $w = 1200; $h = 630;

        $cachePath = "public/og/{$slug}.png";
        if (Storage::exists($cachePath) && !$request->boolean('refresh')) {
            return $this->stream(Storage::path($cachePath));
        }

        $t = $project->theme ?? [];
        $bg      = $t['background'] ?? '#0B1020';
        $primary = $t['primary']   ?? '#6C5CE7';
        $text    = $t['text']      ?? '#F8FAFC';
        $accent  = $t['accent']    ?? '#00D1B2';

        $manager = new ImageManager(new Driver());
        $img = $manager->create($w, $h, $bg);

        // overlay semi-transparent
        $img->drawRectangle(0, 0, function ($rect) use ($w, $h, $primary) {
            $rect->size($w, $h);
            $rect->background($primary . 'CC'); // 80% opacity
        });

        // barre accent en bas
        $img->drawRectangle(0, $h - 10, function ($rect) use ($w, $accent) {
            $rect->size($w, 10);
            $rect->background($accent);
        });

        // chemins de polices (facultatifs)
        $fontBold = public_path('fonts/Inter-Bold.ttf');
        $fontReg  = public_path('fonts/Inter-Regular.ttf');
        $hasBold = is_file($fontBold);
        $hasReg  = is_file($fontReg);

        // Titre
        $title = mb_strimwidth($project->title ?? 'Project', 0, 70, '…', 'UTF-8');
        $img->text($title, 72, 220, function ($font) use ($fontBold, $hasBold, $text) {
            // if ($hasBold) { $font->filename($fontBold); }  // N'appeler filename QUE si le fichier existe
            $font->size(64);
            $font->color($text);
            $font->valign('top');
        });

        // Summary
        if (!empty($project->summary)) {
            $summary = mb_strimwidth(strip_tags($project->summary), 0, 180, '…', 'UTF-8');
            $img->text($summary, 72, 300, function ($font) use ($fontReg, $hasReg, $text) {
                if ($hasReg) { $font->filename($fontReg); }
                $font->size(30);
                $font->color($text . 'CC');
                $font->valign('top');
            });
        }

        // Site name en haut droite
        $siteName = $site->site_name ?? 'Portfolio';
        $img->text($siteName, $w - 72, 72, function ($font) use ($fontReg, $hasReg, $text) {
            if ($hasReg) { $font->filename($fontReg); }
            $font->size(26);
            $font->color($text . 'CC');
            $font->align('right');
            $font->valign('top');
        });

        // vignette cover à droite (si existe)
        if ($cover = $project->getFirstMedia('cover')) {
            $coverImg = $manager->read($cover->getPath())->cover(520, 320);
            $frame = $manager->create(540, 340, $text . '20');
            $frame->place($coverImg, 'center');
            $img->place($frame, 'top-left', $w - 72 - 540, 200);
        }

        Storage::makeDirectory('public/og');
        $img->save(Storage::path($cachePath), 90, 'png');

        return $this->stream(Storage::path($cachePath));
    }

    private function stream(string $absPath)
    {
        return response()->file($absPath, [
            'Cache-Control' => 'public, max-age=86400',
            'Content-Type'  => 'image/png',
        ]);
    }
}
