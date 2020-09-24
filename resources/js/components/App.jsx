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

function App() {
    const existingToken = JSON.parse(localStorage.getItem('tokens'));
    const [authTokens, setAuthTokens] = useState(existingToken);

    const setTokens = (data) => {
        localStorage.setItem('tokens', JSON.stringify(data));
        setAuthTokens(data);
    }

    return (
        <AuthContext.Provider value={false}>
            <div className="container">
                <Router>
                    <div className="row"><Logout/></div>
                    <Switch>
                        <Route path="/logout">
                            <Logout/>
                        </Route>
                        <Route path="/register">
                            <Register/>
                        </Route>
                        <Route path="/login">
                            <Login/>
                        </Route>
                        <Route path="/event/:id">
                            <Event/>
                        </Route>
                        <PrivateRoute path="/" component={Index}/>
                    </Switch>
                </Router>
            </div>
        </AuthContext.Provider>
    );
}

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
