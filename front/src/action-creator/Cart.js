import { VIEW_CART } from "../constants"
import axios from "axios"

const viewCart = (orders) => ({
    type: VIEW_CART,
    orders,
})

export const fetchCart = function(userId){
    return (dispatch)=>{
        return axios.get(`/api/user/${userId}/cart`)
        .then(res=>
        { let cart = res.data ? res.data : {}
            return dispatch(viewCart(cart))}
        ) 
    }
}

export const addToCart = function(product, userId){
    return (dispatch)=>{
        return axios.post(`/api/user/${userId}/cart`, {product})
    }
}
