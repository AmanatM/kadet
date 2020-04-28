import axios from 'axios'
import { authHeader } from './misc/authHeader'

const baseUrl = '/api/dispatchers'
 
export const getAllDispatchers = async (page = 1, limit = 4) => {
    const res = await axios.get(`${baseUrl}?page=${page}&limit=${limit}`, {headers: authHeader()})
    return res.data
}

export const postDispatcher = async (data) => {
    const res = await axios.post(`${baseUrl}`, data,  {headers: authHeader()})
    return res.data
}

export const patchDispatcher = async (id, data) => {
    const res = await axios.patch(`${baseUrl}/${id}`, data, {headers: authHeader()})
    return res.data
}

export const getOneDispatcher = async(id) => {
    const res = await axios.get(`${baseUrl}/${id}`, {headers: authHeader()})
    return res.data
}