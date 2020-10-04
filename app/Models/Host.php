<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Host extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'name',
        'mikrotik_id',
        'mac',
        'ip',
        'gateway',
        'netmask_bits',
        'dns1',
        'dns2',
        'domain_id',
        'host_type_id',
        'host_permission_id',
        'skype',
        'lower_port',
        'high_port',
        'fixed',
        'active',
        'user_id'
    ];
}
