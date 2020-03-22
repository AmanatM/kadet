import axios from 'axios'
import { authHeader } from './misc/authHeader'

const baseUrl = '/api/dispatchers'
 
export const getAllDispatchers = async (page = 1, limit = 10) => {
    const res = await axios.get(`${baseUrl}?page=${page}&limit=${limit}`, {headers: authHeader()})
    return res.data
}

export const patchDispatcher = async (id, data) => {
    const res = await axios.patch(`${baseUrl}/${id}`, data, {headers: authHeader()})

    return res.data
}
