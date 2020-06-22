import React from 'react';
import { Route, Redirect, Switch } from "react-router-dom"

import Login from "./Login";
import CreateUser from "./CreateUser";


export default function WelcomePage () {
    <div className= "wrapper">
        <Switch>
            <Redirect exact from= "/" to= "?login" />
            <Route path= "/login" render= { props => <Login {...props} />} />
            <Route path="/signup" render={props => <CreateUser {...props} />} />
            
        </Switch>
    </div>
}