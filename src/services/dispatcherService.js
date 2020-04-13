import axios from 'axios'
import { authHeader } from './misc/authHeader'

const baseUrl = 'https://kadet-assistance.herokuapp.com/api/Users'
 
export const getAllDispatchers = async (page = 1, limit = 12) => {
    //const res = await axios.get(`${baseUrl}?page=${page}&limit=${limit}`, {headers: authHeader()})
    const res = await axios.get(`${baseUrl}/getDispatchers`)
    return res.data
}

export const patchDispatcher = async (id, data) => {
    const res = await axios.patch(`${baseUrl}/${id}`, data)
    return res.data
}

export const getOneDispatcher = async(id) => {
    const res = await axios.get(`${baseUrl}/getUsersById/${id}`)
    return res.data
}
