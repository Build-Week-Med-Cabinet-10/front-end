
import axios from "axios";
import { axiosWithAuth, getToken } from "../utilities";

export const FETCH_STRAINS_START = "FETCH_STRAINS_START";
export const FETCH_STRAINS_SUCCESS = "FETCH_STRAINS_SUCCESS";
export const FETCH_STRAINS_FAILURE = "FETCH_STRAINS_FAILURE";
export const fetchStrains = () => (dispatch) => {
    dispatch({ type: FETCH_STRAINS_START });



   const getStrainsList = e => {
        const token = JSON.parse(localStorage.getItem('token'))

        axiosWithAuth()
            .get('api/auth/cannabis', token)
            .then(res => {
                console.log(res);
                this.setState({ strains: res.data })
            })
            .catch(error =>
                console.log(error)
            )
    };
};