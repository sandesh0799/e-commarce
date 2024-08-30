import { BASE_URL } from '../constants/BASE_URL'
import {
    USER_LOGIN_REQ,
    USER_LOGIN_REQ_SUCCESS,
    USER_LOGIN_REQ_FAIL,
    USER_LOGOUT,
    USER_REGISTER_REQ,
    USER_REGISTER_REQ_SUCCESS,
    USER_REGISTER_REQ_FAIL
} from '../constants/User'

import axios from 'axios'

export const userLoginAction = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQ })
        const config = {
            headers: {
                "Content-Type": "application/json",
            }
        }
        const { data } = await axios.post(`${BASE_URL}/api/users/login`, { email, password }, config);

        dispatch({ type: USER_LOGIN_REQ_SUCCESS, payload: data });
        localStorage.setItem("userInfo", JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_LOGIN_REQ_FAIL,
            payload: error.response.data.message
        })
    }
}


//user logout action 
export const userLogoutAction = () => async (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({ type: USER_LOGOUT })
    document.location.href = "/login"
};


//register 
export const userRegisterAction = (name, email, password) => async (dispatch) => {
    try {
        console.log('122')
        dispatch({ type: USER_REGISTER_REQ });
        const config = {
            headers: {
                "Content-Type": "application/json",
            }
        }


        const { data } = await axios.post(`${BASE_URL}/api/users`, { name, email, password }, config);

        dispatch({ type: USER_REGISTER_REQ_SUCCESS, payload: data });
        dispatch({ type: USER_LOGIN_REQ_SUCCESS, payload: data });
        localStorage.setItem("userInfo", JSON.stringify(data))


    } catch (error) {
        dispatch({
            type: USER_REGISTER_REQ_FAIL,
            payload: error.response.data.message
        })
    }
}
