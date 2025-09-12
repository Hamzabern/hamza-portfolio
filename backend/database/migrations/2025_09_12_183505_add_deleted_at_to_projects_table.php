<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;

return new class extends \Illuminate\Database\Migrations\Migration {
    public function up(): void {
        if (!Schema::hasColumn('projects', 'deleted_at')) {
            Schema::table('projects', function (Blueprint $t) {
                $t->softDeletes();
            });
        }
    }
    public function down(): void {
        if (Schema::hasColumn('projects', 'deleted_at')) {
            Schema::table('projects', function (Blueprint $t) {
                $t->dropSoftDeletes();
            });
        }
    }
};
