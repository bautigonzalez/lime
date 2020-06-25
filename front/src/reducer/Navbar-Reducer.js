import { SEARCH_PRODUCTS } from '../constants'

const initialState = {
    search: ""
} 

export default ( state= initialState, action) => {
    switch(action.type) {
        case SEARCH_PRODUCTS:
            return {...state, search: action.search}
        default: 
            return state;
    }
}  
