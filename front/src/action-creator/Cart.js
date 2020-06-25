import { VIEW_CART } from "../constants"
import axios from "axios"

const viewCart = (orders) => ({
    type: VIEW_CART,
    orders,
})

export const fetchCart = function(userId){
    return (dispatch)=>{
        return axios.get(`/api/user/${userId}/cart`)
        .then(res=>dispatch(viewCart(res.data)))
    }
}

export const addToCart = function(product, userId){
    return (dispatch)=>{
        return axios.post(`/api/user/${userId}/cart`, {product})
    }
}
