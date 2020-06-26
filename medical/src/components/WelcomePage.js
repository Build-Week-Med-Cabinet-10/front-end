import React, {useState} from "react";
import {Route, Redirect, Switch, useHistory } from "react-router-dom";

import PrivateRoute from "./privateRoute/index";
import Strains from "./Strains/Strains";
import Login from "./login/Login";
import CreateUser from './signup/CreateUser';
import  Dashboard from "./Dashboard/Dashboard";
import PreferenceForm from "./PreferenceFroms";
import {getToken, clearToken} from  ".././utilities"
import {axiosWithAuth} from ".././utilities"

export default function WelcomePage () {
    
   
   

    const token = getToken();
    const {push} = useHistory();
    const handleLogOut = () => { 
 
    clearToken();
    push ("/login")

    }
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
        <PrivateRoute exact path="/dashboard/preferences" component={PreferenceForm} />
       
                {/* <PrivateRoute path="/dashboard/preferences" component={PreferenceForm} /> */}
            </Switch>
             <button onClick= {() => handleLogOut()}>logout</button>
        </div>
    );
}
