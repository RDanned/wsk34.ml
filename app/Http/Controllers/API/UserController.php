<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Front\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = new User();
        $output = [
            'token' => '',
            'error' => ''
        ];

        try{
            if($user->where('email', $request->email)->count() != 0){
                throw new \Exception('This email already exists');
            }

            $user->username = $request->username;
            $user->email = $request->email;
            $user->password = Hash::make($request->password);

            $user->first_name = $request->firstname;
            $user->last_name = $request->lastname;

            if($request->has('linkedin_url')){
                $user->linkedin_url = $request->linkedin_url;
            }

            if($request->has('photo')){
                $photo_path = $request->file('photo')->store('photos', 'public');
                $user->photo = $photo_path;
            }

            $user->remember_token = md5($request->username);

            $user->save();

            $output = [
                'token' => $user->remember_token
            ];

            return response($output, 200)->cookie('token', $output['token'], 3000, '/');

        } catch (\Exception $e){
            $output = [
                'error' => $e->getMessage()
            ];

            return response($output, 422);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
