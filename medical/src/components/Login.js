import React, {useEffect} from 'react';
import { axiosWithAuth } from "../utilities/axiosWithAuth";
// import { useHistory } from "react-router-dom"
// import { connect } from "react-redux";
// import {useForm} from 'react-hook-form';
import styled from 'styled-components';


 const InputForm = styled.form
  `
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  

    input {
        height: 1.5rem;
        margin-bottom: 1rem;
    }
  
  `

 const  StyledLabel = styled.label
  `
  font-weight: 600;
  margin-bottom: .5rem;
  text-align: center;
  
  `

  const  ButtonContainer = styled.div
  `
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: space-between;

    button {
        width: 48%;
        height: 2rem;
        background-color: grey;
        border-radius: .25rem;
        border: 0px;
        color: white;
        font-size: .9rem;
        font-weight: 700;

            &:hover {
                background-color: #5d5d5d !important;
            }

    }  
  `

   const Welcome = styled.h2
  `
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  
  
  `
  
class   Login extends React.Component {
//user creds
state ={
  credentials: {
    email: "",
    password: ""
  },
  newState: {
    loggedUserName: ""
  },

};



// newState ={
//   user:{
//     userName: "Not Logged In"
//   }
// };


// const { post } = useHistory();

//temp comment out
  // const {register,/* handleChange,*/  errors} = useForm();
   
  handleChange = e => {
      this.setState({
        credentials: {
          ...this.state.credentials,
          [e.target.name]: e.target.value
        }
      });
    };

   handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
    .post("/api/auth/login",this.state.credentials)
    .then( res => {
      console.log("the username is",  res.data.username);
    
      console.log("the token is",  res.data.token)
    })
  
    .catch ( (err) =>
      console.error("bk: Login.js: login: err.message: ", err.message.json)
      );
  }
 //temp comment out
  //  onSubmit = (data) => {
  //   console.log("the data", data)
  // }


render(){
  return (

    <div>
    

      <InputForm onSubmit={this.handleSubmit}>

          <Welcome>Welcome</Welcome>


        <StyledLabel htmlFor="email">E-Mail</StyledLabel> 
        <input 
        type="text" 
        placeholder="E-mail"
        name="email"
        value={this.state.credentials.email}
        onChange={this.handleChange}
        // ref={register} 
        />
       

        <StyledLabel htmlFor="password">Password</StyledLabel>
        <input 
        type="text" 
        placeholder="password"
        name="password" 
        value={this.state.credentials.password}
        onChange = {this.handleChange}
        // ref={register({required: "PASSWORD REQUIRED", minLength: {value: 8, message: "Password is too short"}})}
        />
       

        {/* {errors.password && <p>{errors.password.message}</p>} */}
        
     
        <ButtonContainer>
     
            <button type="submit" onSubmit= {console.log("the data",this.data)}>Submit</button>

            <button type="reset">Cancel</button>

        </ButtonContainer>
 



      </InputForm>
     
      


    </div>
  );
}
}

export default Login;
