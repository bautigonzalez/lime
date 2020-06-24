import { RECEIVE_PRODUCTS, SELECT_PRODUCT } from '../constants'

const initialState = {
    products: [],
    product:{}
}

export default ( state= initialState, action) => {
    switch(action.type) {
        case RECEIVE_PRODUCTS:
            return {...state, products: action.products}
        case SELECT_PRODUCT:
            return {...state, product: action.product}
        default:
            return state;
    }
}