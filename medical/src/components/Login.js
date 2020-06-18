import React from 'react';
import {useForm} from 'react-hook-form';
import styled from 'styled-components';

function Login() {

  const {register, handleSubmit, errors} = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }

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

  const StyledLabel = styled.label
  `
  font-weight: 600;
  margin-bottom: .5rem;
  text-align: center;
  
  `

  const ButtonContainer = styled.div
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

  return (

    <div>
      

      <InputForm onSubmit={handleSubmit(onSubmit)}>

          <Welcome>Welcome</Welcome>


        <StyledLabel htmlFor="username">Username</StyledLabel> 
        <input 
        type="text" 
        placeholder="Username"
        name="username"
        ref={register} />
       

        <StyledLabel htmlFor="password">Password</StyledLabel>
        <input 
        type="text" 
        placeholder="password"
        name="password" 
        ref={register({required: "PASSWORD REQUIRED", minLength: {value: 8, message: "Password is too short"}})}/>
       

        {errors.password && <p>{errors.password.message}</p>}
        
     
        <ButtonContainer>
     
            <button type="submit">Submit</button>

            <button type="reset">Cancel</button>

        </ButtonContainer>
 



      </InputForm>
     
      


    </div>
  );
}

export default Login;
