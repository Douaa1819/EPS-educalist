<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Spatie\Permission\Models\Permission;

class PermissionController extends Controller
{
    public function index()
    {
        $permissions = Permission::all();
        return response()->json($permissions);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'guard_name' => 'required|string|max:255', // Assurez-vous que guard_name est spécifié
        ]);
    
        // Créez la permission avec le guard_name spécifié
        $permission = Permission::create([
            'name' => $request->input('name'),
            'guard_name' => $request->input('guard_name'),
        ]);
    
        return response()->json($permission, 201);
    }
    
    public function update(Request $request, $id)
    {
        $permission = Permission::findOrFail($id);
        $permission->update($request->all());
        return response()->json($permission, 200);
    }

    public function destroy($id)
    {
        $permission = Permission::find($id);
        
        if (!$permission) {
            return response()->json(['message' => 'Permission not found'], 404);
        }
    
        $permission->delete();
        return response()->json(null, 204);
    }
    
    public function getUsers(Request $request)
    {
        $search = $request->input('search', '');

        $query = User::with('roles', 'permissions');

        if ($search) {
            $query->where(function ($q) use ($search) {
                $q->where('firstName', 'like', "%{$search}%")
                    ->orWhere('lastName', 'like', "%{$search}%")
                    ->orWhere('email', 'like', "%{$search}%");
            });
        }

        $users = $query->paginate(10, ['*'], 'page');

        $users->getCollection()->transform(function ($user) {
            return [
                'id' => $user->id,
                'firstName' => $user->firstName,
                'email' => $user->email,
                'roles' => $user->roles->pluck('name'),
                'permissions' => $user->permissions->pluck('name'),
            ];
        });

        return response()->json($users);
    }


    public function getRoles()
    {
        $roles = Role::with('permissions')->get()->map(function ($role) {
            return [
                'id' => $role->id,
                'name' => $role->name,
                'permissions' => $role->permissions->pluck('name'),
            ];
        });
        return response()->json($roles);
    }

    public function getPermissions()
    {
        $permissions = Permission::all();
        return response()->json($permissions);
    }

    public function assignRolePermissions(Request $request)
    {
        $request->validate([
            'role_id' => 'required|exists:roles,id',
            'permissions' => 'required|array',
            'permissions.*' => 'exists:permissions,name',
        ]);

        $role = Role::find($request->role_id); // Changez ici
        if (!$role) {
            return response()->json(['message' => 'Role not found'], 404);
        }

        $currentPermissions = $role->permissions->pluck('name')->toArray();

        foreach ($request->permissions as $permission) {
            if (in_array($permission, $currentPermissions)) {
                $role->revokePermissionTo($permission);
            } else {
                $role->givePermissionTo($permission);
            }
        }

        return response()->json(['message' => 'Permissions updated successfully for the role']);
    }

    public function assignUserPermissions(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'permissions' => 'required|array',
            'permissions.*' => 'exists:permissions,name',
        ]);

        $user = User::findOrFail($request->user_id);

        $currentPermissions = $user->permissions->pluck('name')->toArray();

        foreach ($request->permissions as $permission) {
            if (!in_array($permission, $currentPermissions)) {
                $user->givePermissionTo($permission);
            }
        }

        foreach ($currentPermissions as $permission) {
            if (!in_array($permission, $request->permissions)) {
                $user->revokePermissionTo($permission);
            }
        }

        return response()->json(['message' => 'Permissions updated successfully for the user']);
    }



    public function getUserPermissions(Request $request)
    {
        $user = $request->user(); 
        if (!$user) {
            return response()->json(['message' => 'Unauthenticated.'], 401);
        }
    
 
        $user->load('roles', 'permissions'); 
        $roles = $user->roles;
        $permissions = $user->permissions->pluck('name'); 
    
        return response()->json([
            'permissions' => $permissions,
            'roles' => $roles,
            'isSuperAdmin' => $user->isSuperAdmin()
        ]);
    }
    
}
