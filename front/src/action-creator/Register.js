import { REGISTER_USER } from '../constants'
import axios from 'axios'

const registerUser = (user) => ({
    type: REGISTER_USER,
    user,
})

export const registrandome = function(username, password){
    return (dispatch)=>{
        return axios.post("/api/user/register", {username, password})
        .then(res=>dispatch(registerUser(res.data)))
    }
}