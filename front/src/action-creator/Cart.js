import { VIEW_CART, UPDATE_PRODUCT, DELETE_PRODUCT } from "../constants"
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

export const deleteProduct = function (productId, userId) {
    return (dispatch) => {
        return axios.post(`/api/user/${userId}/cart/delete`, { productId })
    }
}

export const updateProduct = function (productId, userId, cant) {
    return (dispatch) => {
        return axios.put(`/api/user/${userId}/cart`, { productId, cant })
    }
}

export const completeCart = function (userId) {
    return (dispatch) => {
        return axios.put(`/api/user/${userId}/cart/checkout`)
    }
}