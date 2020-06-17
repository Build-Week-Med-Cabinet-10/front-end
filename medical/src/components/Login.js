import React, { Component, useState} from 'react'

import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class Login  extends Component {
    render () {
        return (
           <div>
           <Form className= "login">
                <h1 className="font-weight-bold">MedKit</h1>
                <h2>Welcome</h2>
                <FormGroup>
                    <Label>User Name</Label>
                    <input
                    type= "text"
                    // name= "username"         
                    />
                    <Label>Password</Label>
                    <input
                    type = "password"
                    // name = "password" 
                    /> 
                </FormGroup>
            </Form>
            </div>
        )
    }
}

export default  Login;