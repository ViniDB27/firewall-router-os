<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mikrotik extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'name',
        'subnet_id',
        'ip_wan',
        'ip_lan',
        'gateway',
        'netmask_bits',
        'dns1',
        'dns2',
        'username',
        'password',
        'active',
        'user_id'
    ];


}
