import React, {useState, useEffect} from 'react';
import {
    Link
} from 'react-router-dom';

function Event(props){

    return(
        <tr>
            <td>{props.i}</td>
            <td>{props.reg.event.title}</td>
            <td>{props.reg.event.date}</td>
            <td>{props.reg.calc_price}</td>
            <td>
                <select name="" id="">
                    <option value="">bad</option>
                    <option value="">good</option>
                    <option value="">очень good</option>
                </select>
            </td>
        </tr>
    )
}

export default function Profile(props){
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('/api/profile')
            .then(responce => {return responce.json()})
            .then(json => {
                let res = json.data.map((reg, i) => (<Event i={i + 1} reg={reg}/>))
                setEvents(res);
            });
    }, [])



    return(
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">Bordered Table</h3>
            </div>
            <div className="card-body">
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Event</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {events}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
