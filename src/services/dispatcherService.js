import axios from 'axios'
import { authHeader } from './misc/authHeader'

const baseUrl = 'https://kadet-assistance.herokuapp.com/api/Users'

const headers = {
    "Content-Type": 'application/json; charset=UTF-8',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
}
 
export const getAllDispatchers = async (page = 1, limit = 12) => {
    //const res = await axios.get(`${baseUrl}?page=${page}&limit=${limit}`, {headers: authHeader()})
    const res = await axios.get(`${baseUrl}/getDispatchers`)
    return res.data
}

export const editDispatcher = async (id, data) => {
    const res = await axios.put(`${baseUrl}/PutUser/${id}`, data, {headers})
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
