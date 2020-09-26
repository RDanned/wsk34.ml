import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import {useAuth} from './context/auth';

/*export default class Login extends Component {
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
}*/

export default function Login(){
    const [isLogged, setLogged] = useState(false);
    const [isError, setError] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthTokens } = useAuth();

    async function handleSubmit(e){
        e.preventDefault();

        let data = new FormData(e.target);

        let result = await fetch('/api/login', {
            method: "POST",
            body: data
        })
            .then((response) => {return response.json()})
            .then(json => {return json})

        if('error' in result){
            setError(true);
        } else {
        }

        if('token' in result && result.token.length != 0){
            setAuthTokens(result.token);
            setLogged(true);
        }
    }

    if(isLogged)
        return (<Redirect to="/"/>);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-6">
                    <div className="card card-primary">
                        <div className="card-header">
                            <h3 className="card-title">Login</h3>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="card-body">
                                {isError && (
                                    <div className="form-group">
                                        <div className="alert alert-danger">Wrong login or password!</div>
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
