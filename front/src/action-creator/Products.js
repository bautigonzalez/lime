import { SEARCH_PRODUCTS } from '../constants'
import axios from 'axios'

const searchProducts = (products) => ({
    type: SEARCH_PRODUCTS,
    products
})

export const buscando = function(product) {
    return (dispatch) => {
        return axios.get('/api/product', {product} )
        .then(res =>dispatch(searchProducts(res.data)))
    }
}