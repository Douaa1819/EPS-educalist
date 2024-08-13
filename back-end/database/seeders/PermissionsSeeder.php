<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class PermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $permissions = [
            'supprimer utilisateur',
            'ajouter utilisateur',
            'modifier le Role',
            'ajouter articles',
            'editer articles',
            'supprimer articles',
            'ajouter actualités',
            'editer actualités',
            'supprimer actualités'
        ];

        $guardName = 'web'; 

        foreach ($permissions as $permission) {
            if (!Permission::where('name', $permission)->where('guard_name', $guardName)->exists()) {
                Permission::create(['name' => $permission, 'guard_name' => $guardName]);
            }
        }

        // Assigner toutes les permissions au super admin
        $superAdmin = Role::firstOrCreate(['name' => 'super admin']);
        $superAdmin->syncPermissions(Permission::all());
    }
}
