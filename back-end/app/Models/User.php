<?php


namespace App\Models;

use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Notifications\ResetPasswordNotification;


class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles;



    protected $fillable = [
        'lastName',
        'firstName',
        'google_id',
        'facebook_id',
        'email',
        'role',
        'location',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function redacteur()
    {
        return $this->hasOne(Redacteur::class);
    }

    public function etudiant()
    {
        return $this->hasOne(Etudiant::class);
    }

    public function admin()
    {
        return $this->hasOne(Admin::class);
    }

    public function sendPasswordResetNotification($token)
{
    $this->notify(new ResetPasswordNotification($token));
}


public function isSuperAdmin()
    {
        return $this->role === 'super admin';
    }
}
