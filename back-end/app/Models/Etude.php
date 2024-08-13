<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Etude extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'description',
        'user_id',
        'pays_id',
        'domaine_id',
        'metier_id',
        'specialite_id',
        'created_at',
    ];
    public function pays()
    {
        return $this->belongsTo(Pays::class, 'pays_id');
    }
}
