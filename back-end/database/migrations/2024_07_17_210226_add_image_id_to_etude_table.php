<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddImageIdToEtudeTable extends Migration
{
    public function up()
    {
        Schema::table('etude', function (Blueprint $table) {
            $table->foreignId('image_id')->nullable()->constrained('images')->onDelete('set null');
        });
    }

    public function down()
    {
        Schema::table('etude', function (Blueprint $table) {
            $table->dropForeign(['image_id']);
            $table->dropColumn('image_id');
        });
    }
}
