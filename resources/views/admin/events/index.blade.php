@extends('admin.layout.app')
@section('content')
    <div class="row">
        <div class="col-12">
            <div class="card">
                <a href="{{ route('events.create') }}">Create Event</a>
                <table class="table">
                    <tr>
                        <th>Event</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                    @foreach($events as $event)
                        <tr>
                            <td>{{ $event->title }}</td>
                            <td>{{ $event->date }}</td>
                            <td>{{ $event->standard_price }}</td>
                            <td>
                            acts
                            </td>
                        </tr>
                    @endforeach
                </table>
            </div>
        </div>
    </div>
@endsection
