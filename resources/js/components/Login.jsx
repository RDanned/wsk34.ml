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

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            error: "",
            token: ""
        }
        document.title = "Login";
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(e){
        e.preventDefault();

        let data = new FormData(e.target);

        let result = await fetch('/api/login', {
                method: "POST",
                body: data
            })
            .then((response) => {return response.json()})
            .then(json => {return json})

        if('error' in result){
            this.setState((state) => {return {error: result.error}})
        } else {
            this.setState((state) => {return {error: ""}})
        }

        if('token' in result){
            this.setState((state) => {return {token: result.token}})
            window.localStorage.setItem('is_auth', true);
        }

    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <div className="card card-primary">
                            <div className="card-header">
                                <h3 className="card-title">Login</h3>
                            </div>
                            <form onSubmit={this.handleSubmit}>
                                <div className="card-body">
                                    {this.state.token.length > 0 && (
                                        <Redirect to="/"/>
                                    )}
                                    {this.state.error.length > 0 && (
                                        <div className="form-group">
                                            <div className="alert alert-danger">{this.state.error}</div>
                                        </div>
                                    )}
                                    <div className="form-group">
                                        <label htmlFor="username">Username*</label>
                                        <input type="text" className="form-control" id="username"
                                               placeholder="Username" required name="username"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password*</label>
                                        <input type="password" className="form-control" id="password"
                                               placeholder="Password" required name="password"/>
                                    </div>
                                    <div className="card-footer">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                        <Link to="/register">Register?</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
