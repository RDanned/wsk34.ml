<?php

use Illuminate\Http\Request;

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
Auth::routes();

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

/*Route::group(['middleware' => ['web']], function () {

});*/
//Route::post('/event/:id', );
/*Route::post('events/register', function (Request $request){
  App\Http\Controllers\Api\EventsController::register
});//'API\EventsController@register'*/
Route::get('profile', 'API\UserController@index');
Route::post('register', 'API\UserController@store');
Route::post('login', 'API\UserController@login');
Route::post('logout', 'API\UserController@logout');
Route::resource('events', 'API\EventsController');
Route::post('event/register', 'API\EventsController@register');
