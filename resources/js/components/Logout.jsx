import React, {Component, useEffect, useState} from 'react';
import {
    Link,
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

export default function Logout(){
    const [logout, setLogout] = useState(false);

    async function handleLogOut(e){
        await fetch('/api/logout', {
            method: 'POST'
        }).then(response => {
            return response.json();
        }).then(json => {
            console.log(json);
            window.localStorage.setItem('is_auth', false);
            setLogout(json);
        })
    }

    return(
        <>
            {logout && (<Redirect to="/"/>)}
            <button className="logout" onClick={handleLogOut}>Logout</button>
        </>
    );
}
