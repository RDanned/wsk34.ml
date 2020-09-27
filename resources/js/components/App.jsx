import React, { Component, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Index from "./Index";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import Event from "./Event";
import Login from "./Login";
import Register from './Register';
import Logout from './Logout';
import { AuthContext } from './context/auth';
import PrivateRoute from "./PrivateRoute";
import Profile from "./Profile";

function App() {
    const existingToken = JSON.parse(localStorage.getItem('tokens'));
    const [authTokens, setAuthTokens] = useState(existingToken);

    const setTokens = (data) => {
        localStorage.setItem('tokens', JSON.stringify(data));
        setAuthTokens(data);
    }

    return (
        <AuthContext.Provider value={{authTokens, setAuthTokens: setTokens}}>
            <div className="container">
                <Router>
                    {authTokens && (<div className="row">
                        <Logout/>
                        <Link to="/profile">Profile</Link>
                        <Link to="/">Main</Link>
                    </div>)}
                    <Switch>
                        <Route path="/profile/login" component={Login}/>
                        <Route path="/profile/register" component={Register}/>
                        <PrivateRoute path="/profile" component={Profile}/>
                        <PrivateRoute path="/event/:id" component={Event}/>
                        <PrivateRoute path="/" component={Index}/>
                        <PrivateRoute path="/logout" component={Logout}/>
                    </Switch>
                </Router>
            </div>
        </AuthContext.Provider>
    );
}

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
