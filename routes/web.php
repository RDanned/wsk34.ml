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

//Auth::routes();

//Route::get('/home', 'HomeController@index')->name('home');
Route::resource('admin/events', 'Admin\EventsController');

Route::get('/register', function(){
    return view('front.index');
})->name('register');

Route::get('/login', function(){
    return view('front.index');
})->name('login');

Route::group(['middleware' => ['authcustom']], function(){
    Route::get('{any}', function(){
        return view('front.index');
    })->where('any', '.*');
});
