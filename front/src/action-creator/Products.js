import { RECEIVE_PRODUCTS, SELECT_PRODUCT } from '../constants'
import axios from 'axios'

const receiveProducts = (products) => ({
    type: RECEIVE_PRODUCTS,
    products
})

const selectProduct = (product) => ({
    type: SELECT_PRODUCT,
    product
})

export const fetchProducts = function() {
    return (dispatch) => {
        return axios.get('/api/product')
        .then(res => res.data)
        .then(products => dispatch(receiveProducts(products)))
    }
}

export const fetchProduct = function(id) {
    return (dispatch) => {
        return axios.get(`/api/product/${id}`)
        .then(res => res.data)
        .then(product => dispatch(selectProduct(product)))
    }
}