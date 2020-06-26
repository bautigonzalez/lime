import { SEARCH_PRODUCTS } from '../constants'
import axios from 'axios'

const searchProducts = (search) => ({
    type: SEARCH_PRODUCTS,
    search 
})


export const searching = function(search){
    return (dispatch)=>{
        dispatch(searchProducts(search))
    }
}