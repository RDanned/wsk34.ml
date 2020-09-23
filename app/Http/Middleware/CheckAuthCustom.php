<?php

namespace App\Http\Middleware;

use Closure;
use App\Front\User;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Auth\Middleware\Authenticate as Middleware;

class CheckAuthCustom
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        //dd($request);
        if($request->hasCookie('token') && $request->hasCookie('user_id')){
            $id = Crypt::decrypt($request->cookie('user_id'));
            $token = $request->cookie('token');
            $user = $this->getUser($id);
            if($user->remember_token != $token){
                return redirect('login');
            } else {
                return $next($request);
            }
        } else {
            return redirect('login');
        }
    }
    /*protected function redirectTo($request){
        if($request->hasCookie('token') && $request->hasCookie('user_id')){
            $id = Crypt::decrypt($request->cookie('token'));
            $token = $request->cookie('token');
            $user = $this->getUser($id);
            if($user->remember_token != $token){
                return route('login');
            }
        } else {
            return route('login');
        }
        //return $next($request);
    }*/

    public function getUser($id){
        return $user = User::find($id);
    }
}
