import { LOGIN_USER } from '../constants'

const initialState = {
    loginUser : {}
}

export default ( state = initialState, action) => {
    switch(action.type){
        case LOGIN_USER:
            return {...state, loginUser: action.user}
        default:
            return state;
        }
}