<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PaysSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $countries = [
            ['name' => 'Allemagne'],
            ['name' => 'Canada'],
            ['name' => 'France'],
            ['name' => 'Japon'],
            ['name' => 'Italie'],
            ['name' => 'Portugal'],
            ['name' => 'Russie'],
            ['name' => 'Malysie'],
            ['name' => 'Taiwan'],
            ['name' => 'Suède'],
            ['name' => 'Vietnam'],
            ['name' => 'Singapour'],
            ['name' => 'Grèce'],
            ['name' => 'Pologne'],
            ['name' => 'Norvège'],
            ['name' => 'Malte'],
            ['name' => 'Danemark'],
            ['name' => 'Brésil'],
        ];

        DB::table('pays')->insert($countries);
    }
}
