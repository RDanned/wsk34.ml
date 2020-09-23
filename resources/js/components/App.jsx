import React, { Component } from 'react';
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

export default class Example extends Component {
    constructor() {
        super();
        this.state = {
            isAuth: Boolean(window.localStorage.getItem('is_auth')) ? false : true
        }
    }
    render() {
        return (
            <>
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
                            <Route path="/">
                                <Index/>
                            </Route>
                        </Switch>
                    </Router>
                </div>
            </>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Example />, document.getElementById('root'));
}
