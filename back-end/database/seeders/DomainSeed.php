<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DomainSeed extends Seeder
{
    public function run(): void
    {
        $domaine = [
            ['name' => 'Agriculture - paysage'],
            ['name' => 'Alimentation - agroalimentaire'],
            ['name' => 'Animaux'],
            ['name' => 'Architecture - décoration'],
            ['name' => 'Armée – sécurité - secours'],
            ['name' => 'Artisanat d’art – design - mode'],
            ['name' => 'Banque - finance - assurance'],
            ['name' => 'Biologie - chimie'],
            ['name' => 'BTP - urbanisme'],
            ['name' => 'Cinéma – audiovisuel - jeux vidéo'],
            ['name' => 'Commerce - immobilier'],
            ['name' => 'Communication - journalisme - marketing'],
            ['name' => 'Culture – spectacle - patrimoine'],
            ['name' => 'Droit - justice'],
            ['name' => 'Edition - imprimerie - livre'],
            ['name' => 'Électricité - électronique - robotique'],
            ['name' => 'Énergie'],
            ['name' => 'Enseignement - formation - insertion'],
            ['name' => 'Environnement – eau – déchets - propreté'],
            ['name' => 'Gestion – comptabilité - RH'],
            ['name' => 'Hôtellerie - restauration - tourisme'],
            ['name' => 'Transport - logistique'],
        ];

        DB::table('domaine')->insert($domaine);
    }
}
