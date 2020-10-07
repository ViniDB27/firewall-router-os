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


Route::group(['middleware' => 'web', 'namespace'=>'App\Http\Controllers'], function () {



    Route::group(['prefix' => ''], function () {

        Route::get('/login', 'AuthContronller@indexLogin');

        Route::get('/recover', 'AuthContronller@indexRevocer');
    });

    Route::group([], function () {

        Route::get('/', function () {
            return redirect('/dashboard');
        });

        Route::group(['prefix' => '/dashboard'], function () {

            Route::get('/', 'DashboardController@index');

        });

        Route::group(['prefix' => '/locations'], function () {

            Route::get('/', 'LocationController@index');

        });

        Route::group(['prefix' => '/subnets'], function () {

            Route::get('/', 'SubnetController@index');

        });

        Route::group(['prefix' => '/mikrotiks'], function () {

            Route::get('/', 'MikrotikController@index');

        });

        Route::group(['prefix' => '/hosts'], function () {

            Route::get('/', 'HostController@index');

        });

        Route::group(['prefix' => '/registrations'], function () {

            Route::get('/', 'RegistrationController@index');

        });

        Route::group(['prefix' => '/host-type'], function () {

            Route::get('/', 'TypeHostController@index');

        });

        Route::group(['prefix' => '/domains'], function () {

            Route::get('/', 'DomainController@index');

        });

    });


});


