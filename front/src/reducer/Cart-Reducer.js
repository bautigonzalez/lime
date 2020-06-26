import { VIEW_CART } from '../constants'

const initialState = {
    orders : {}
}

export default ( state = initialState, action) => {
    switch(action.type){
        case VIEW_CART:
            return {...state, orders: action.orders}
        default:
            return state;
        }
}