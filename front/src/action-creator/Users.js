import { LOGIN_USER, LOGOUT } from '../constants'
import axios from 'axios'

const loginUser = (user) => ({
    type: LOGIN_USER,
    user,
})

const logoutUser = function(){
    return {
        type : LOGOUT,
        user : {}
    }
}

export const logueandome = function(username, password){
    return (dispatch)=>{
        return axios.post("/api/user/login", {username, password})
        .then(res=>dispatch(loginUser(res.data)))
    }
}

export const registrandome = function(data){
    return (dispatch)=>{
        return axios.post("/api/user/register", data)
        .then(res=>dispatch(loginUser(res.data)))
    }
}

export const deslogueandome = function(){
    return (dispatch)=>{
        return axios.get("/api/user/logout")
        .then(()=>dispatch(logoutUser()))
    }
}

export const authenticate = () => (dispatch) =>
    axios.get(`/api/user/check`).then((res) => dispatch(loginUser(res.data)))