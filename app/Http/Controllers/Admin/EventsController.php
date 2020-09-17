<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use App\Admin\Event;
use App\Admin\Session;

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
        $events = $event->paginate(5);

        return view('admin.events.index', ['events' => $events]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.events.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $event = new Event();
        $event->title = $request->title;
        $event->description = $request->description;
        $event->date = $request->date;
        $event->time = $request->time;
        $event->duration_days = $request->duration;
        $event->location = $request->location;
        $event->standard_price = $request->price;
        $event->capacity = $request->capacity;

        $event->save();

        if($request->has('session_title') && $request->session_title[0] != ""){
            $session_data = [];

            for($i = 0; $i != count($request->session_title); $i++){
                $session_data[] = [
                    'event_id' => $event->id,
                    'time' => $request->session_time[$i],
                    'title' => $request->session_title[$i],
                    'room' => $request->session_room[$i],
                    'speaker' => $request->session_speaker[$i]
                ];
            }

            $session = new Session();
            $session->insert($session_data);
        }


        return redirect('admin/events');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

    }

    public function edit($id)
    {
        $event = new Event();
        $event = $event->find($id);

        $sessions = $event->sessions;

        return view('admin.events.edit', [
            'event' => $event,
            'sessions' => $sessions
        ]);
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
        $event = Event::find($id);

        $event->title = $request->title;
        $event->description = $request->description;
        $event->date = $request->date;
        $event->time = $request->time;
        $event->duration_days = $request->duration;
        $event->location = $request->location;
        $event->standard_price = $request->price;
        $event->capacity = $request->capacity;

        $event->save();

        $i = 0;
        if($request->has('session_id')){
            $session_ids = [];
            $session_data = [];
            foreach ($request->session_id as $id){
                $session_ids[] = $id;
            }

            for(; $i != count($session_ids); $i++){
                $session = new Session();
                $session->where('id', $session_ids[$i])->update([
                    'title' => $request->session_title[$i],
                    'time' => $request->session_time[$i],
                    'room' => $request->session_room[$i],
                    'speaker' => $request->session_speaker[$i],
                ]);
            }
        }

        if($request->has('session_title') && $request->session_title[0] != ""){
            $session_data = [];

            for(; $i != count($request->session_title); $i++){
                $session_data[] = [
                    'event_id' => $event->id,
                    'time' => $request->session_time[$i],
                    'title' => $request->session_title[$i],
                    'room' => $request->session_room[$i],
                    'speaker' => $request->session_speaker[$i]
                ];
            }

            $session = new Session();
            $session->insert($session_data);
        }


        return redirect('admin/events');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $event = Event::find($id);
        $event->sessions()->delete();
        $event->delete();

        return redirect('admin/events');
    }
}
