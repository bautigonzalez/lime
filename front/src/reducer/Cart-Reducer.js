import { VIEW_CART , ADD_INVITADO_CART } from '../constants'




const initialState = {
    orders : {} ,
    products: []
}

export default ( state = initialState, action) => {
    switch(action.type){
        case VIEW_CART:
            return {...state, orders: action.orders}
        case ADD_INVITADO_CART :
            return {...state , products:[...state.products, action.product]}
        default:
            return state
        }
}