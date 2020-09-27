<?php

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

/*Route::get('/', function () {
    return view('welcome');
});*/


Auth::routes();
//Route::get('/home', 'HomeController@index')->name('home');
Route::group(['middleware' => ['auth'], 'prefix' => 'admin'], function() {
    Route::resource('events', 'Admin\EventsController');
});

Route::get('/profile/register', function(){
    return view('front.index');
})->name('/profile/register');

Route::get('/profile/login', function(){
    return view('front.index');
})->name('/profile/login');

Route::group(['middleware' => ['authcustom']], function(){
    Route::get('{any}', function(){
        return view('front.index');
    })->where('any', '.*');
});


