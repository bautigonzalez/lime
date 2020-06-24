import { VIEW_CART } from '../constants'

const initialState = {
    cart : {}
}

export default ( state = initialState, action) => {
    switch(action.type){
        case VIEW_CART:
            return {...state, cart: action.cart}
        default:
            return state;
        }
}