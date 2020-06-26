import { LOGIN_USER, LOGOUT } from '../constants'

const initialState = {
    loginUser : {}
}

export default ( state = initialState, action) => {
    switch(action.type){
        case LOGIN_USER:
            return {...state, loginUser: action.user}
        case LOGOUT:
            return {...state, loginUser: action.user}
        default:
            return state;
        }
}