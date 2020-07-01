import { SEARCH_USERS } from "../constants"
import axios from "axios"

const searchUsers = (users) => ({
    type: SEARCH_USERS,
    users
})

export const fetchUsers = function() {
    return (dispatch) => {
        return axios.get('/api/admin')
        .then(res => res.data)
        .then(users => dispatch(searchUsers(users)))
    }
}

export const setAdmin = function(userId, state) {
    return (dispatch) => {
        return axios.put(`/api/admin/${userId}`, {state} )
        .then(res => res.data)
        .then(users => dispatch(searchUsers(users)))
    }
}


