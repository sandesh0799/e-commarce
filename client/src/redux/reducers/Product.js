import {
    PRODUCT_LIST_REQ, PRODUCT_LIST_REQ_SUCCESS, PRODUCT_LIST_REQ_FAIL, PRODUCT_DEATIL_REQ, PRODUCT_DEATIL_REQ_SUCCESS, PRODUCT_DEATIL_REQ_FAIL
} from '../constants/Product';

// list of products

export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQ:
            return { loading: true, products: [] };

        case PRODUCT_LIST_REQ_SUCCESS:
            return { loading: false, products: action.payload, totalPage: action.payload.totalPage, page: action.payload.page }

        case PRODUCT_LIST_REQ_FAIL:
            return { loading: false, error: action.payload.error }
        default:
            return state
    }
}

// product by id
export const productReducer = (state = { product: { reviews: [] } }, action) => {
    switch (action.type) {
        case PRODUCT_DEATIL_REQ:
            return { loading: true, ...state };

        case PRODUCT_DEATIL_REQ_SUCCESS:
            return { loading: false, product: action.payload }

        case PRODUCT_DEATIL_REQ_FAIL:
            return { loading: false, error: action.payload.error }
        default:
            return state
    }
}