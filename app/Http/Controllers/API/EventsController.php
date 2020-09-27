<?php

namespace App\Http\Controllers\API;

use App\Http\Resources\EventResource;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Admin\Event;
use App\Http\Resources\Events;
use App\Http\Resources\RegTypes as RegTypesResource;
use App\Admin\RegTypes;
use Illuminate\Support\Facades\Crypt;
use App\Admin\Registration;

class EventsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $event = new Event();
        $events = $event->with('sessions')->get();

        return new Events($events);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = [];

        $event = new Event;

        $reg_type = new RegTypes();

        $data['event'] = new EventResource($event->find($id));
        $data['reg_types'] = new RegTypesResource($reg_type->all());

        return response($data);
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

    public function register(Request $request){
        $user_id = Crypt::decrypt($request->cookie('user_id'));
        $reg = new Registration();
        if(
            $reg->where('event_id', $request->event_id)
                ->where('user_id', $user_id)
                ->count() == 0
        )
        {
            $reg->user_id = $user_id;
            $reg->event_id = $request->event_id;
            $reg->reg_type = $request->reg_type;
            $reg->calc_price = $request->calc_price;
            $reg->date = $request->date;
            $reg->save();
            return response('true');
        } else {
            return response('false');
        }
    }
}
