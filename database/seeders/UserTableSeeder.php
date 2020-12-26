<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'id'=>1,
            'name'=>'Super Admin',
            'email'=>'super@admin.com',
            'password'=>bcrypt('fros2020*'),
            'administrator'=>true,
            'moderator'=>false,
            'visitant'=>false,
            'active'=>true

        ]);
    }
}
