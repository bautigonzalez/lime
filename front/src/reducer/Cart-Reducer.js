import { VIEW_CART, HISTORY_CART, ADD_INVITADO_CART } from '../constants'

const initialState = {
    orders : {},
    carts: [],
    products: []
}

export default ( state = initialState, action) => {
    switch(action.type){
        case VIEW_CART:
            return {...state, orders: action.orders}
        case HISTORY_CART:
            return { ...state, carts: action.carts }
        case ADD_INVITADO_CART :
            return {...state , products:[...state.products, action.product]}
        default:
            return state
        }
}