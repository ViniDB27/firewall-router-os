<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subnet extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'name',
        'ip',
        'netmask_bits',
        'local_id',
        'access',
        'active',
        'user_id'
    ];
}
