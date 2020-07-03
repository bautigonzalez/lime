import { VIEW_CART, UPDATE_PRODUCT, DELETE_PRODUCT, HISTORY_CART, ADD_INVITADO_CART, DELETE_INVITADO_CART, DELETE_INVITADO_PRODUCT } from "../constants"
import axios from "axios"

const viewCart = (orders) => ({
    type: VIEW_CART,
    orders,
})

const viewHistory = (carts) => ({
    type: HISTORY_CART,
    carts,})

const addInvitadoCart=(product) =>({
  type: ADD_INVITADO_CART ,
  product
})

const deleteInvitadoCart=()=>({
    type: DELETE_INVITADO_CART
})

const deleteInvitadoProduct=(productId)=>({
    type: DELETE_INVITADO_PRODUCT,
    productId
})

export const fetchCart = function(userId){
    return (dispatch)=>{
        if(userId !== "invitado"){
            return axios.get(`/api/user/${userId}/cart`)
            .then(res=>{ 
                let cart = res.data ? res.data : {}
                return dispatch(viewCart(cart))}
            )  
        }

       
    }
}

export const addToCart = function(product, userId){
    return (dispatch)=>{
        if(userId == "invitado"){
            return dispatch(addInvitadoCart(product))
        }
        else{
            return axios.post(`/api/user/${userId}/cart`, {product})
        }
    }
}

export const deleteProduct = function (productId, userId) {
    return (dispatch) => {
        if(userId!=="invitado"){
            return axios.post(`/api/user/${userId}/cart/delete`, { productId })
        }
        else{
            dispatch(deleteInvitadoProduct(productId))
        }
    }
}

export const updateProduct = function (productId, userId, cant) {
    return (dispatch) => {
        if(userId!=="invitado"){
            return axios.put(`/api/user/${userId}/cart`, { productId, cant })
        }
    }
}

export const completeCart = function (userId, email) {
    return (dispatch) => {
        return axios.put(`/api/user/${userId}/cart/checkout`, {email})
    }
}

export const deleteCart = function(){
    return (dispatch)=>{
        return dispatch(deleteInvitadoCart())
    }
}

export const fetchHistoryCart = function (userId) {
    return (dispatch) => {
        return axios.get(`/api/user/${userId}/profile`)
            .then(res => {
                let cart = res.data ? res.data : []
                return dispatch(viewHistory(cart))
            }
            )
    }
}