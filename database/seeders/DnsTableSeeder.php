<?php

namespace Database\Seeders;

use App\Models\Dns;
use Illuminate\Database\Seeder;

class DnsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Dns::create([
            'id'=>1,
            'dns'=>'192.168.0.1',
            'user_id'=>1,
        ]);

        Dns::create([
            'id'=>2,
            'dns'=>'192.168.0.2',
            'user_id'=>1,
        ]);
    }
}
