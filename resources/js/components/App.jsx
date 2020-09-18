import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Index from "./Index";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Event from "./Event";

export default class Example extends Component {
    render() {
        return (
            <div className="container">
                <Router>
                    <Switch>
                        <Route path="/event/:id">
                            <Event/>
                        </Route>
                        <Route path="/">
                            <Index/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Example />, document.getElementById('root'));
}
