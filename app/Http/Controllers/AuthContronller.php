<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthContronller extends Controller
{
    public function indexLogin()
    {
        return view('login');
    }

    public function indexRevocer()
    {
        return view('recover');
    }
}
