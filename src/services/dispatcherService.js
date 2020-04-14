import axios from 'axios'
import { authHeader } from './misc/authHeader'

const baseUrl = 'https://kadet-assistance.herokuapp.com/api/Users'
 
export const getAllDispatchers = async (page = 1, limit = 12) => {
    //const res = await axios.get(`${baseUrl}?page=${page}&limit=${limit}`, {headers: authHeader()})
    const res = await axios.get(`${baseUrl}/getDispatchers`)
    return res.data
}

export const editDispatcher = async (id, data) => {
    const res = await axios.put(`${baseUrl}/PutUser/${id}`, data)
    return res.data
}

export const postDispatcher = async (data) => {
    const res = await axios.post(`${baseUrl}/PostUser`, data, {
        headers : {
            'Content-Type' : 'application/json; charset=UTF-8'
        }
    })
    return res.data
}

export const getOneDispatcher = async(id) => {
    const res = await axios.get(`${baseUrl}/getUsersById/${id}`)
    return res.data
}
