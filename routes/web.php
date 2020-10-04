<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect('/dashboard');
});

Route::get('/login', function () {
    return view('login');
});

Route::get('/recover', function () {
    return view('recover');
});

Route::get('/dashboard', function () {
    return view('dashboard');
});

Route::get('/locations', function () {
    return view('locations');
});

Route::get('/subnets', function () {
    return view('subnets');
});

Route::get('/mikrotiks', function () {
    return view('mikrotiks');
});

Route::get('/hosts', function () {
    return view('hosts');
});

Route::get('/registrations', function () {
    return view('registrations');
});

Route::get('/host-type', function () {
    return view('typehost');
});

Route::get('/domains', function () {
    return view('domain');
});
