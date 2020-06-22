import * as types from "./actionTypes";
import { axiosWithAuth } from "../utilities/axiosWithAuth";



const registerApi = "https://med-cabinet-backend.herokuapp.com/api/auth/register";
const loginApi = "https://med-cabinet-backend.herokuapp.com/api/auth/login";

// signup

export const newUser = (userData, history) => dispatch => {
    axiosWithAuth()
    .post(registerApi, userData)
    .then(({ data }) => {
    dispatch({ type: types.SIGN_UP })
    localStorage.setItem ("token", data.token);
    history.push("/login")
    })
    .catch (err => console.log(err))
};

