@extends('admin.layout.app')
@section('content')
    <div class="row">
        <div class="col-12">
            <div class="card">
                <form action="{{ route('events.store') }}" class="form form-sample col-6" method="POST">
                    @csrf
                    <div class="form-group">
                        <label for="title">Event's title</label>
                        <input type="text" name="title" class="form-control" id="title">
                    </div>
                    <div class="form-group">
                        <label for="description">Description</label>
                        <textarea name="description" id="description" cols="30" rows="10" class="form-control"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="date">Date</label>
                        <input type="date" name="date" class="form-control" id="date">
                    </div>
                    <div class="form-group">
                        <label for="time">Time</label>
                        <input type="time" name="time" class="form-control" id="time">
                    </div>
                    <div class="form-group">
                        <label for="duration">duration</label>
                        <input type="number" name="duration" class="form-control" id="duration">
                    </div>
                    <div class="form-group">
                        <label for="location">location</label>
                        <input type="text" name="location" class="form-control" id="location">
                    </div>
                    <div class="form-group">
                        <label for="price">price</label>
                        <input type="text" name="price" class="form-control" id="price">
                    </div>
                    <div class="form-group">
                        <label for="capacity">capacity</label>
                        <input type="text" name="capacity" class="form-control" id="capacity">
                    </div>
                    <div class="form-group">
                        <input type="submit" class="form-control">
                    </div>
                </form>
            </div>

        </div>
    </div>
@endsection
