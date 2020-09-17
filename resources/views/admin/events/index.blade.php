@extends('admin.layout.app')
@section('title', 'Events')
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
                            <td style="display: flex;">
                                <a href="{{ route('events.edit', $event) }}" class="btn btn-warning" onsubmit="return confirm('A u s?');">Edit</a>
                                <form action="{{ route('events.destroy', $event) }}" method="POST">
                                    @csrf
                                    @method('DELETE')
                                    <input type="submit" class="btn btn-danger" value="Delete">
                                </form>
                            </td>
                        </tr>
                    @endforeach
                </table>
                {{ $events->links() }}
            </div>
        </div>
    </div>
@endsection
