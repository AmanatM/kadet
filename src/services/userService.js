import axios from 'axios'
import {authHeader} from './misc/authHeader'
const baseUrl = '/api/login'

export const loginUser = async (credentials) => {
    const res = await axios.post(`${baseUrl}/`, credentials)
    return res.data
}

export const getUserData = async (id) => {
    const res = await axios.get(`/api/users/${id}`, {headers: authHeader()} )
    return res.data
}

