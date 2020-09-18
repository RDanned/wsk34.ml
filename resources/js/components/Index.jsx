import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function IndexPage(props){
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('/api/events')
            .then((response) => {
                return response.json();
            })
            .then((json) =>{
                setEvents(json.data);
            })
    }, []);

    console.log(events)

    return(
        <div className="row events">
            {events.map((event) =>(
                <div className="col-12 event">
                    <h2>{event.title}</h2>
                    <p>{event.description}</p>
                    {event.sessions.length > 0 &&
                        <div>
                            <h3>Sessions</h3>
                            <ul>
                                {event.sessions.map((session) => (
                                    <li>{session.title}</li>
                                ))}
                            </ul>
                        </div>
                    }
                    <Link to={`/event/${event.id}`} className="event__link">Register</Link>
                </div>
            ))}
        </div>
    )
}
