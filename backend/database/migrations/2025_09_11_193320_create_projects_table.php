<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
       Schema::create('projects', function (Blueprint $t) {
            $t->id();
            $t->string('title');
            $t->string('slug')->unique();
            $t->string('summary', 500)->nullable();
            $t->json('stack')->nullable();             
            $t->string('github_url')->nullable();
            $t->string('demo_url')->nullable();
            $t->json('theme')->nullable();             
            $t->string('cover_path')->nullable();     
            $t->json('gallery_paths')->nullable();    
            $t->boolean('is_published')->default(false);
            $t->integer('priority')->default(0);
            $t->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
