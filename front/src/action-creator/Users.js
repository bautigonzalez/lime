import { LOGIN_USER } from '../constants'
import axios from 'axios'

const loginUser = (user) => ({
    type: LOGIN_USER,
    user,
})

export const logueandome = function(username, password){
    return (dispatch)=>{
        return axios.post("/api/user/login", {username, password})
        .then(res=>dispatch(loginUser(res.data)))
    }
}

export const registrandome = function(username, password){
    return (dispatch)=>{
        return axios.post("/api/user/register", {username, password})
        .then(res=>dispatch(loginUser(res.data)))
    }
}

