import { RECEIVE_REVIEWS, ADD_REVIEW } from '../constants'
import axios from 'axios'

const receiveReviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews
})

const addReviews = (review) => ({
    type: ADD_REVIEW,
    review
})

export const fetchReviews = function (productId) {
    return (dispatch) => {
        return axios.get(`/api/product/${productId}/review`)
            .then(res => res.data)
            .then(reviews => dispatch(receiveReviews(reviews)))
    }
}

export const addReview = function (content, stars, userId, productId) {
    return (dispatch) => {
        return axios.post(`/api/product/${productId}/review`, { content,stars,userId })
            .then(res => dispatch(addReviews(res.data)))

    }
}