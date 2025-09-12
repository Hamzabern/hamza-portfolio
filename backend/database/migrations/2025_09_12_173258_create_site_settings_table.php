<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
   public function up(): void {
    Schema::create('site_settings', function (Blueprint $t) {
        $t->id();
        $t->string('site_name')->default('Hamza Bernoussi — Full-Stack Developer');
        $t->string('tagline')->nullable();
        $t->string('logo_path')->nullable();
        $t->string('favicon_path')->nullable();
        $t->json('theme_default')->nullable(); 
        $t->json('social')->nullable();        
        $t->json('cta')->nullable();          
        $t->json('seo')->nullable();         
        $t->timestamps();
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('site_settings');
    }
};
