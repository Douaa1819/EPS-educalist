<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MetierSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $metier = [
            ['name' => 'Education Et Enseignement'],
            ['name' => 'Travaux Publics'],
            ['name' => 'La Presse'],
            ['name' => 'Médecine Et Soins Infirmiers'],
            ['name' => 'Sécurité Nationale'],
            ['name' => 'Tourisme Et Hôtellerie'],
            ['name' => 'Agriculture Et Vétérinaire'],
            ['name' => 'Informatique Et Communications'],
            ['name' => 'Tissu Et Vetements'],
            ['name' => 'Commerce'],
            ['name' => 'Restaurant'],
            ['name' => 'Industrie Chimique Et Pharmaceutique'],
            ['name' => 'Comptabilité Et Gestion'],
            ['name' => 'Électricité Et Électronique'],
            ['name' => 'Rasage Et Beauté'],
            ['name' => 'Assurances'],
            ['name' => 'Mécanique'],
        ];

        DB::table('metier')->insert($metier);
    }
}
