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



Route::group(['namespace'=>'App\Http\Controllers'], function () {
    Route::post('login', 'Api\AuthController@login');

    Route::group(['middleware'=>'apiJwt'], function () {

        Route::group(['prefix' => '/users'], function () {

            Route::post('register', 'UserController@store');
        });

        Route::group(['prefix' => '/locations'], function () {

            Route::get('/', 'LocationController@show');
        });

        Route::group(['prefix' => '/subnets'], function () {

            Route::get('/', 'SubnetController@show');
        });

    });

});


