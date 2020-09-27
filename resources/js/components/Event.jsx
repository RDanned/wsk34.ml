import React, {Component, useEffect, useState} from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
    useParams
} from 'react-router-dom';

const  RegisterForm = (props) => {
    console.log("price s")
    console.log(props.price)

    let sPrice = props.price;
    const [price, setPrice] = useState();
    const [regType, setType] = useState(1);
    const [isRegged, setRegged] = useState(false);
    const [isError, setError] = useState(false);
    let options = props.regTypes.map(type => <option value={type.id}>{type.name}</option>);
    const params = useParams();

    useEffect(() => {
        let regTypes = props.regTypes;

        setPrice(props.price)
        let oldPrice = price;

        regTypes.map((item) => {
            if(item.id == regType)
                setPrice(Math.round(sPrice - (sPrice * item.discount)));
        });
    }, [props.price, regType]);


    function handleChangeType(e){
        e.preventDefault();
        let select = e.target;
        setType(select.value)
    }

    async function register(e){
        let data = {
            event_id: params.id,
            reg_type: regType,
            calc_price: price,
            date: Date.now() / 1000
        };

        await fetch('/api/event/register', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                return response.json()
            })
            .then(json => {
                console.log(json)
                if(json)
                    setRegged(json);
                else
                    setError(!json);
            });
        ;
    }

    if(isRegged){
        return (<div className="alert-danger">You registered!</div>)
    }

    return(
        <div>
            {isError &&
                (<div className="alert-danger">You already registered!</div>)
            }
            <label htmlFor="">Reg type</label>
            <select onChange={handleChangeType} name="reg_type" id="reg_type" className="form-control">
                {options}
            </select>
            <label htmlFor="">You pay: </label>
            <span>{price}</span>
            <p>
                <button onClick={register}>Register for event</button>
            </p>
            <br/>
            <p>
                <Link to={`/events/`}>Back</Link>
            </p>
        </div>
    );
}

export default function Event(){
    const [event, setEvent] = useState([]);
    const [regTypes, setRegTypes] = useState([]);
    const params = useParams();

    useEffect(()=>{
        fetch(`/api/events/${params.id}`)
            .then(response => {
                return response.json()
            })
            .then(json => {
                setRegTypes(json.reg_types);
                setEvent(json.event);
            });
    }, []);

    return(
        <div className="row event form">
            <div className="col-12">
                <h1>{event.title}</h1>
                <p>{event.description}</p>
            </div>
            <RegisterForm regTypes={regTypes} price={event.standard_price}/>
        </div>
    )
}
