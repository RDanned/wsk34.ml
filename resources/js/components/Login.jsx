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

export default class Login extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){

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
                            <form>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="firstname">Firstname*</label>
                                        <input type="text" className="form-control" id="firstname"
                                               placeholder="Firstname" required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lastname">Lastname*</label>
                                        <input type="text" className="form-control" id="lastname"
                                               placeholder="Lastname" required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="username">Username*</label>
                                        <input type="text" className="form-control" id="username"
                                               placeholder="Username" required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email address*</label>
                                        <input type="email" className="form-control" id="email"
                                               placeholder="Enter email" required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password*</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1"
                                               placeholder="Password" required/>
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
