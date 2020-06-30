import { VIEW_CART, HISTORY_CART } from '../constants'

const initialState = {
    orders : {},
    carts: []
}

export default ( state = initialState, action) => {
    switch(action.type){
        case VIEW_CART:
            return {...state, orders: action.orders}
        case HISTORY_CART:
            return { ...state, carts: action.carts }
        default:
            return state;
        }
}