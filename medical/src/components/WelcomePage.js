import React from "react";
import {Route, Redirect, Switch } from "react-router-dom";

import PrivateRoute from "./privateRoute/index";

import Login from "./login/Login";
import CreateUser from './signup/CreateUser';
import  Dashboard from "./Dashboard/Dashboard";

export default function WelcomePage () {
    return (
        <div className = "wrapper">
            <Switch>
                <Redirect exact from = "/" to= "Login" />
                <Route path="/login" render= {props => <Login {...props} />} />
                <Route path ="/signUp" render= {props => <CreateUser {...props} />} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
        </div>
    );
}
