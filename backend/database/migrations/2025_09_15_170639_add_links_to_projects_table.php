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
        Schema::table('projects', function (Blueprint $t) {
            if (!Schema::hasColumn('projects', 'github_url')) {
                $t->string('github_url', 191)->nullable()->after('stack');
            }
            if (!Schema::hasColumn('projects', 'demo_url')) {
                $t->string('demo_url', 191)->nullable()->after('github_url');
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('projects', function (Blueprint $t) {
            if (Schema::hasColumn('projects', 'github_url')) {
                $t->dropColumn('github_url');
            }
            if (Schema::hasColumn('projects', 'demo_url')) {
                $t->dropColumn('demo_url');
            }
        });
    }
};
