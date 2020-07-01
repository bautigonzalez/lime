import axios from 'axios'


export const publicar = (product) => dispatch => {
    console.log("esto es product: ", product)
    return axios.post('/api/product', product)
}
