import React, { Component, useState} from 'react'

import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import styled from 'styled-components';

 const ButtonDiv = styled.div`
  flex-direction: row,
  
`;




class Login  extends Component {
    //add function
    render () {
        return (
           <div>
           <Form className= "Login"
           style = {{
               display: "flex",
              flexDirection: 'column',
            
           }}
           >
                <h1 className="font-weight-bold">MedKit</h1>
                <h2>Welcome</h2>
               
                <FormGroup>
                 <div
                 style = {{
                     display:"flex",
                     flexDirection: "column",
                     alignContent: "center",
                     justfyContent: "center"
                 }} 
                 >
                    <Label>User Name</Label>
                    <input
                    type= "text"
                     name= "username"  
                     style = {{
                         width: "200px",
                         alignSelf: "center"
                     }}       
                    />
                    <Label>Password</Label>
                    <input
                    type = "password"
                     name = "password" 
                                style={{
                                    width: "200px",
                                    alignSelf: "center"
                                }}
                    /> 
                     </div>
                </FormGroup>
               
                <ButtonDiv>
                <Button
                style= {{
                    marginRight: "5px"
                }}
                >Login</Button>
                <Button
                            style={{
                                marginLeft: "5px"
                            }}
                >Cancel</Button>
                </ButtonDiv>
            </Form>
            </div>
        )
    }
}

export default  Login;