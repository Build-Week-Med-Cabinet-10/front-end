import React from 'react';
import {useForm} from 'react-hook-form';
import styled from 'styled-components';
// import { axiosWithAuth } from "../utilities/axiosWithAuth";
import { connect } from "react-redux";
// import * as Yup from "yup";
import { NavLink } from "react-router-dom";
import * as actionFunctions from "../actions/actionFunctions";



const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;

  input {
    height: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const StyledLabel = styled.label`
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: space-between;

  button {
    width: 48%;
    height: 2rem;
    background-color: grey;
    border-radius: 0.25rem;
    border: 0px;
    color: white;
    font-size: 0.9rem;
    font-weight: 700;

    &:hover {
      background-color: #5d5d5d !important;
    }
  }
`;

const Welcome = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;
//  const {register, errors} = useForm();
 const  onSubmit = (data) => {
    console.log(data)
  }
class CreateUser extends React.Component {


  state = {
    newUser: {
      username: "",
      email: "",
      password: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      newUser: {
        ...this.state.newUser,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    // axiosWithAuth()
      // .post("/api/auth/register", this.state.newUser)
      // .then((res) => {
      //   console.log(res);
        // localStorage.setItem("token", res.data.payload);
        // this.props.history.push("/protected");
      // })
      // .catch((err) =>
      //   console.error("bk: CreateUser.js: login: err.message: ", err.mesage.json)
      // );
  };
  render() {
    return (
      <div>
        <InputForm onSubmit={this.handleSubmit}>
          <Welcome>Register</Welcome>

          <StyledLabel htmlFor="username">Username</StyledLabel>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={this.state.newUser.username}
            onChange={this.handleChange}
            // ref={register}
          />

          <StyledLabel htmlFor="email">Email</StyledLabel>
          <input
            type="email"
            placeholder="you@email.com"
            name="email"
            value={this.state.newUser.email}
            onChange={this.handleChange}
            // ref={register}
          />

          <StyledLabel htmlFor="password">Password</StyledLabel>
          <input
            type="text"
            placeholder="password"
            name="password"
            value={this.state.newUser.password}
            onChange={this.handleChange}
            // ref={register({
            //   required: "PASSWORD REQUIRED",
            //   minLength: { value: 8, message: "Password is too short" },
            // })}
          />

          {/* {errors.password && <p>{errors.password.message}</p>} */}

          <ButtonContainer>
            <button type="submit">Submit</button>

            <button type="reset">Cancel</button>
          </ButtonContainer>
        </InputForm>
      </div>
    );
  }

}
  function  mapPropsToValues ({newUser, email, password}) {
    return {
     usernme: username || "",
     email: email || "",
     password: password || ""
    };
  }

export default connect (mapStateToProps)(CreateUser);
