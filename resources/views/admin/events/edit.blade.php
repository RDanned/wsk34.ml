@extends('admin.layout.app')
@section('title', 'Edit event')
@section('content')
    <div class="row">
        <div class="col-12">
            <div class="card">
                <form action="{{ route('events.update', $event) }}" class="form form-sample col-6" method="POST">
                    @csrf
                    @method('PUT')
                    <div class="form-group">
                        <label for="title">Event's title</label>
                        <input type="text" name="title" class="form-control" id="title" value="{{ $event->title }}">
                    </div>
                    <div class="form-group">
                        <label for="description">Description</label>
                        <textarea name="description" id="description" cols="30" rows="10" class="form-control">
                            {{ $event->description }}
                        </textarea>
                    </div>
                    <div class="form-group">
                        <label for="date">Date</label>
                        <input type="date" name="date" class="form-control" id="date" value="{{ $event->date }}">
                    </div>
                    <div class="form-group">
                        <label for="time">Time</label>
                        <input type="time" name="time" class="form-control" id="time" value="{{ $event->time }}">
                    </div>
                    <div class="form-group">
                        <label for="duration">duration</label>
                        <input type="number" name="duration" class="form-control" id="duration" value="{{ $event->duration_days }}">
                    </div>
                    <div class="form-group">
                        <label for="location">location</label>
                        <input type="text" name="location" class="form-control" id="location" value="{{ $event->location }}">
                    </div>
                    <div class="form-group">
                        <label for="price">price</label>
                        <input type="text" name="price" class="form-control" id="price" value="{{ $event->standard_price }}">
                    </div>
                    <div class="form-group">
                        <label for="capacity">capacity</label>
                        <input type="text" name="capacity" class="form-control" id="capacity" value="{{ $event->capacity }}">
                    </div>
                    <div class="form-group">
                        <table class="table table-bordered sessions">
                            <tr>
                                <th style="width: 10px">Session</th>
                                <th>Time</th>
                                <th>Location</th>
                                <th style="width: 40px">Speaker</th>
                            </tr>
                            @if(isset($sessions) && !$sessions->isEmpty())
                                @foreach ($sessions as $session)
                                    <tr>
                                        <td>
                                            <input type="hidden" name="session_id[]" value="{{ $session->id }}">
                                            <input type="text" name="session_title[]" value="{{ $session->title }}">
                                        </td>
                                        <td><input type="time" name="session_time[]" value="{{ $session->time }}"></td>
                                        <td><input type="text" name="session_room[]" value="{{ $session->room }}"></td>
                                        <td><input type="text" name="session_speaker[]" value="{{ $session->speaker }}"></td>
                                    </tr>
                                @endforeach
                            @else
                                <tr>
                                    <td><input type="text" name="session_title[]"></td>
                                    <td><input type="time" name="session_time[]" value="00:00"></td>
                                    <td><input type="text" name="session_room[]"></td>
                                    <td><input type="text" name="session_speaker[]"></td>
                                </tr>
                            @endif
                        </table>
                        <button type="button" class="add-session btn btn btn-primary">Add session</button>
                        <script>
                            $(document).ready(function () {
                                $('.add-session').click(function (e) {
                                    console.log('click')
                                    e.preventDefault();

                                    let row = `
                                    <tr>
                                        <td><input type="text" name="session_title[]"></td>
                                        <td><input type="time" name="session_time[]" value="00:00"></td>
                                        <td><input type="text" name="session_room[]"></td>
                                        <td><input type="text" name="session_speaker[]"></td>
                                    </tr>
                                `;

                                    $('.sessions').append(row);
                                })
                            });
                            /*document.querySelector('.add-session').addEventListener('click', function(e){
                                e.preventDefault();
                                let row = `
                                    <tr>
                                        <td><input type="text" name="session_title[]"></td>
                                        <td><input type="time" name="session_time[]"></td>
                                        <td><input type="text" name="session_room[]"></td>
                                        <td><input type="text" name="session_speaker[]"></td>
                                    </tr>
                                    `;
                                document.querySelector('.sessions').innerHTML += row ;
                            });*/
                        </script>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="form-control">
                    </div>
                </form>
            </div>

        </div>
    </div>
@endsection
