<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SpecialiteSeeder extends Seeder
{
    public function run(): void
    {
        $specialites = [
            ['name' => 'Arts'],
            ['name' => 'Biologie & écologie'],
            ['name' => 'Histoire-géographie, géopolitique et sciences politiques'],
            ['name' => 'Humanités, littérature et philosophie'],
            ['name' => 'Langues, littérature et culture étrangère et régionale'],
            ['name' => 'Littérature, Langues et cultures de l’Antiquité'],
            ['name' => 'Mathématiques'],
            ['name' => 'Numérique et sciences informatiques'],
            ['name' => 'Physique-chimie'],
            ['name' => 'Sciences de la vie et de la Terre'],
            ['name' => 'Sciences de l’ingénieur'],
            ['name' => 'Sciences économiques et sociales'],
            ['name' => 'Éducation Physique, Pratiques et Culture Sportives'],
        ];

        DB::table('specialites')->insert($specialites);
    }
}
