import React, { Component, useState} from 'react'

import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class CreateUser extends Component {
//add functions
    render (){
        return (
            <Form>
            Register form
             <FormGroup>
                 <Label>New User Name</Label>  
                 <input type="text"/>
                 <Label>E-mail</Label>
                 <input type = "text"/>
                 <Label>Password</Label>
                 <input type= "password" />
                 <Button>Submit</Button>
                 <Button>Cancel</Button>
             </FormGroup>
            </Form>
        )
    }
}
export default CreateUser;