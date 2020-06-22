import * as types from "../actions/actionTypes";

const user = JSON.parse(localStorage.getItem("user"));

export const initialState = {
username: user ? user.username : "",
email: user ? user.email : "",
password: user ? user.password: "",
};

export const combinedReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case types.SIGN_UP:
            return state;
            case types.LOGIN:
                return initialState;

    }
}
export default [combinedReducer, initialState];