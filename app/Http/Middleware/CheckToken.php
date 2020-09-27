<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Crypt;
use App\Front\User;

class CheckToken
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
        if($request->hasCookie('token')){
            $user_id = Crypt::decrypt($request->cookie('user_id'));
            $user = User::find($user_id);
            if($user->remember_token == $request->cookie('token'))
                return $next($request);
            else
                return response('Not auth', 422);
        } else {
            return response('Not auth', 422);
        }
    }
}
