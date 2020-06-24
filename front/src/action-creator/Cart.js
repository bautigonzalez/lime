import { VIEW_CART } from "../constants"
import axios from "axios"

const viewCart = (cart) => ({
    type: VIEW_CART,
    cart,
})

export const fetchCart = function(userId){
    return (dispatch)=>{
        return axios.get(`/api/user/${userId}/cart`)
        .then(res=>dispatch(viewCart(res.data[0])))
    }
}