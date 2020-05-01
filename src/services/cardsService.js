import axios from "axios"
import { authHeader } from './misc/authHeader'


const baseUrl = '/api/cards'
 
export const getAllCards = async (page = 1, limit = 4) => {
    const res = await axios.get(`${baseUrl}?page=${page}&limit=${limit}`, {headers: authHeader()})
    return res.data
}

export const getOneCard = async (id) => {
    const res = await axios.get(`${baseUrl}/${id}`, {headers: authHeader()})
    return res.data
}

export const patchCard = async (id, data) => {
    const res = await axios.patch(`${baseUrl}/${id}`, data, {headers: authHeader()})
    return res.data
}