import React from "react";
import {Route, Redirect, Switch } from "react-router-dom";
import PrivateRoute from "./privateRoute/index";
import Strains from './Strains/Strains';
import Login from "./login/Login";
import CreateUser from './signup/CreateUser';
<<<<<<< HEAD
import Dashboard from "./Dashboard/Dashboard";
=======
import  Dashboard from "./Dashboard/Dashboard";
import PreferenceForm from "./PreferenceFroms"
>>>>>>> 41a37a5ac9a9ad428eab6dd1f8dab1350d1482ce

export default function WelcomePage () {
    return (
        <div className = "wrapper">
            <Switch>
                <Redirect exact from = "/" to= "Login" />
                <Route path="/login" render= {props => <Login {...props} />} />
                <Route path ="/register" >
                    <CreateUser />
                    </Route>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                   <PrivateRoute
          exact
          path="/dashboard/strains"
          component={Strains}
        />
                <PrivateRoute path="/dashboard/preferences" component={PreferenceForm} />
            </Switch>
        </div>
    );
}
