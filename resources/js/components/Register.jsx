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

export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            error: "",
            token: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(e){
        e.preventDefault();

        let data = new FormData(e.target);

        let result = await fetch('/api/register', {
                method: 'POST',
                body: data
            })
            .then(response => {
                return response.json()
            })
            .then(json => {
                return json;
            });

        if('error' in result){
            this.setState((state) => {return {error: result.error}})
        }

        if('token' in result){
            this.setState((state) => {return {token: result.token}})
            window.localStorage.setItem('token', result.token);
        }


    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <div className="card card-primary">
                            <div className="card-header">
                                <h3 className="card-title">Quick Example</h3>
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
                                        <label htmlFor="firstname">Firstname*</label>
                                        <input type="text" className="form-control" id="firstname"
                                               placeholder="Firstname" required name="firstname"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lastname">Lastname*</label>
                                        <input type="text" className="form-control" id="lastname"
                                               placeholder="Lastname" required name="lastname"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="username">Username*</label>
                                        <input type="text" className="form-control" id="username"
                                               placeholder="Username" required name="username"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email address*</label>
                                        <input type="email" className="form-control" id="email"
                                               placeholder="Enter email" required name="email"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password*</label>
                                        <input type="password" className="form-control" id="password"
                                               placeholder="Password" required name="password"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="photo">Linkedin url</label>
                                        <input type="text" name="linkedin_url" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="photo">Photo</label>
                                        <input type="file" name="photo" className="form-control" accept=".jpg, .jpeg, .png"/>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
