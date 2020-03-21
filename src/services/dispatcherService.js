import axios from 'axios'
import { authHeader } from './misc/authHeader'

const baseUrl = '/api/dispatchers'
 
export const getAllDispatchers = async () => {
    const res = await axios.get(baseUrl, {headers: authHeader()})
    return res.data
}

export const patchDispatcher = async (id, data) => {
    const res = await axios.patch(`${baseUrl}/${id}`, data, {headers: authHeader()})

    return res.data
}
