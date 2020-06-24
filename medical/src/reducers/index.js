import { combineReducers } from "redux";
import { reducer as signup } from "./signupReducer";
import { reducer as user } from "./userReducer";


export default combineReducers({
 
  signup,
  user,
 
});




