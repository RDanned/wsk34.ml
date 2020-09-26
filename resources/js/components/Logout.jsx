import React, {Component, useEffect, useState} from 'react';
import {
    Link,
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import {useAuth} from "./context/auth";

export default function Logout(){
    const {setAuthTokens} = useAuth();
    const [logout, setLogout] = useState(false);

    async function handleLogOut(e){
        await fetch('/api/logout', {
            method: 'POST'
        }).then(response => {
            return response.json();
        }).then(json => {
            setAuthTokens(false);
            setLogout(json);
        })
    }

    if(logout)
        return (<Redirect to="/"/>);

    return(
        <>
            <button className="logout" onClick={handleLogOut}>Logout</button>
        </>
    );
}
