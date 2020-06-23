import { REGISTER_USER } from '../constants'

const initialState = {
    registerUser : {}
}

export default ( state = initialState, action) => {
    switch(action.type){
        case REGISTER_USER:
            return {...state, registerUser: action.user}
        default:
            return state;
        }
}