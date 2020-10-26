<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



Route::group(['prefix' => '/v1','namespace'=>'App\Http\Controllers'], function () {
    Route::post('login', 'Api\AuthController@login');
    Route::post('/register', 'UserController@store');

    Route::group(['middleware'=>'apiJwt'], function () {

        Route::group(['prefix' => '/users'], function () {

            Route::get('/info', 'UserController@show');
        });

        Route::group(['prefix' => '/locations'], function () {

            Route::get('/', 'LocationController@show');
            Route::post('/', 'LocationController@store');
            Route::put('/{id}', 'LocationController@update');
            Route::delete('/{id}', 'LocationController@destroy');
        });

        Route::group(['prefix' => '/subnets'], function () {

            Route::get('/', 'SubnetController@show');
            Route::post('/', 'SubnetController@store');
            Route::put('/{id}', 'SubnetController@update');
            Route::delete('/{id}', 'SubnetController@destroy');
        });

        Route::group(['prefix' => '/mikrotiks'], function () {

            Route::get('/', 'MikrotikController@show');
            Route::post('/', 'MikrotikController@store');
            Route::put('/{id}', 'MikrotikController@update');
            Route::delete('/{id}', 'MikrotikController@destroy');
        });

        Route::group(['prefix' => '/hosts'], function () {

            Route::get('/', 'HostController@show');
            Route::post('/', 'HostController@store');
            Route::put('/{id}', 'HostController@update');
            Route::delete('/{id}', 'HostController@destroy');
        });

        Route::group(['prefix' => '/host-type'], function () {

            Route::get('/', 'TypeHostController@show');
            Route::post('/', 'TypeHostController@store');
            Route::put('/{id}', 'TypeHostController@update');
            Route::delete('/{id}', 'TypeHostController@destroy');
        });

        Route::group(['prefix' => '/domains'], function () {

            Route::get('/', 'DomainController@show');
            Route::post('/', 'DomainController@store');
            Route::put('/{id}', 'DomainController@update');
            Route::delete('/{id}', 'DomainController@destroy');
        });

    });

});


