import React from 'react';
import {
    Route,
    Redirect
} from 'react-router-dom';
import { useAuth } from './context/auth';

function PrivateRoute({component: Component, ...rest}){
    const { authTokens } = useAuth();
    return (
        <Route
            {...rest}
            render={props =>
                authTokens ?
                (<Component {...props}/>)
                :
                (<Redirect to="/profile/login"/>)
            }
        />
    );
}

export default PrivateRoute;
