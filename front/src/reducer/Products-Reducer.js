import { SEARCH_PRODUCTS } from '../constants'

const initialState = {
    list : []
}

export default ( state= initialState, action) => {
    switch(action.type) {
        case SEARCH_PRODUCTS:
            return {...state, list: action.products}
        default:
            return state;
    }
}