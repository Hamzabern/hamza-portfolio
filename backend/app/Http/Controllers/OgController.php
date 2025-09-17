<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\SiteSetting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;

class OgController extends Controller
{
    public function project(string $slug, Request $request)
    {
        // 1) Données
        $project = Project::where('slug', $slug)->firstOrFail();
        $site    = SiteSetting::first();

        $w = 1200; $h = 630;
        $cachePath = "public/og/{$slug}.png";

        // 2) Cache (si pas de refresh explicite)
        if (Storage::exists($cachePath) && !$request->boolean('refresh')) {
            return $this->stream(Storage::path($cachePath));
        }

        // 3) Couleurs (avec défauts)
        $t        = $project->theme ?? [];
        $bg       = $t['background'] ?? '#0B1020';
        $primary  = $t['primary']   ?? '#6C5CE7';
        $text     = $t['text']      ?? '#F8FAFC';
        $accent   = $t['accent']    ?? '#00D1B2';

        // 4) Image de base
        $manager = new ImageManager(new Driver());
        $img = $manager->create($w, $h, $bg);

        // 5) Overlay semi-transparent (plein cadre)
        $img->drawRectangle(0, 0, function ($rect) use ($w, $h, $primary) {
            $rect->size($w, $h);
            $rect->background($primary . 'CC'); // 80% opacity
        });

        // 6) Barre accent en bas
        $img->drawRectangle(0, $h - 10, function ($rect) use ($w, $accent) {
            $rect->size($w, 10);
            $rect->background($accent);
        });

        // 7) Cover (si dispo) dans un cadre à droite
        if ($cover = $project->getFirstMedia('cover')) {
            try {
                $coverImg = $manager->read($cover->getPath())->cover(520, 320);
                $frame = $manager->create(540, 340, $text . '20');
                $frame->place($coverImg, 'center');
                $img->place($frame, 'top-left', $w - 72 - 540, 200);
            } catch (\Throwable $e) {
                // si la cover n'est pas lisible, on ignore (ne casse rien)
            }
        }

        // 8) Texte (SEULEMENT si FreeType + TTF réels)
        $freetypeOk = \function_exists('imageftbbox');
        $fontBold = public_path('fonts/Inter-Bold.ttf');
        $fontReg  = public_path('fonts/Inter-Regular.ttf');
        $hasBold  = $freetypeOk && \is_file($fontBold) && \filesize($fontBold) > 0;
        $hasReg   = $freetypeOk && \is_file($fontReg)  && \filesize($fontReg)  > 0;

        // Titre projet
        $title = mb_strimwidth($project->title ?? 'Project', 0, 70, '…', 'UTF-8');
        if ($hasBold) {
            $img->text($title, 72, 220, function ($font) use ($fontBold, $text) {
                $font->filename($fontBold);
                $font->size(64);
                $font->color($text);
                $font->valign('top');
            });
        }

        // Summary (si dispo)
        if (!empty($project->summary) && $hasReg) {
            $summary = mb_strimwidth(strip_tags($project->summary), 0, 180, '…', 'UTF-8');
            $img->text($summary, 72, 300, function ($font) use ($fontReg, $text) {
                $font->filename($fontReg);
                $font->size(30);
                $font->color($text . 'CC');
                $font->valign('top');
            });
        }

        // Nom du site (en haut à droite)
        $siteName = $site->site_name ?? 'Portfolio';
        if ($hasReg) {
            $img->text($siteName, $w - 72, 72, function ($font) use ($fontReg, $text) {
                $font->filename($fontReg);
                $font->size(26);
                $font->color($text . 'CC');
                $font->align('right');
                $font->valign('top');
            });
        }

        // 9) Sauvegarde + réponse
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
