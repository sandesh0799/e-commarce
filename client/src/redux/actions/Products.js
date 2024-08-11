import axios from "axios";
import {
    PRODUCT_LIST_REQ, PRODUCT_LIST_REQ_SUCCESS, PRODUCT_LIST_REQ_FAIL, PRODUCT_DEATIL_REQ, PRODUCT_DEATIL_REQ_SUCCESS, PRODUCT_DEATIL_REQ_FAIL
} from '../constants/Product';
import { BASE_URL } from "../constants/BASE_URL";

export const productListAction = async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQ });
        const { data } = await axios.get(`${BASE_URL}/api/products`)
        dispatch({ type: PRODUCT_LIST_REQ_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: PRODUCT_LIST_REQ_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
    }

}

export const productAction = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DEATIL_REQ });
        const { data } = await axios.get(`${BASE_URL}/api/products/${id}`)
        dispatch({ type: PRODUCT_DEATIL_REQ_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: PRODUCT_DEATIL_REQ_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
    }

}