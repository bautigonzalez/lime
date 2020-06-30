import { RECEIVE_REVIEWS, ADD_REVIEW } from '../constants'

const initialState = {
    reviews: [],
    review: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_REVIEWS:
            return { ...state, reviews: action.reviews }
        case ADD_REVIEW:
            return { ...state, review: action.review }
            default:
            return state;
    }
}