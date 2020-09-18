import React, {Component, useEffect, useState} from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
    useParams
} from 'react-router-dom';

export default function Event(){
    const [event, setEvent] = useState([]);

    const params = useParams();

    useEffect(()=>{
        fetch(`/api/events/${params.id}`)
            .then(response => {
                return response.json()
            })
            .then(json => {
                setEvent(json.data)
            })
    }, []);

    return(
        <div className="row event">
            <div className="col-12">
                <h1>{event.title}</h1>
                <p>{event.description}</p>
            </div>
            <Link to={`/events/`}>Back</Link>
        </div>
    )
}
