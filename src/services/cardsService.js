import axios from "axios"
import { authHeader } from './misc/authHeader'


//const baseUrl = '/api/cards'
const baseUrl = 'https://kadet-assistance.herokuapp.com/api/Cards'
 
export const getAllCards = async (page = 1, limit = 4) => {
    //const res = await axios.get(`${baseUrl}?page=${page}&limit=${limit}`, {headers: authHeader()})
    const res = await axios.get(`${baseUrl}/GetActiveCards`)
    return res.data
}
export const getInactiveCards = async () => {
    const res = await axios.get(`${baseUrl}/GetInactiveCards`)
    return res.data
}

export const getOneCard = async (id) => {
    //const res = await axios.get(`${baseUrl}/${id}`, {headers: authHeader()})
    const res = await axios.get(`${baseUrl}/GetCard/${id}`)
    return res.data
}

export const patchCard = async (id, data) => {
    const res = await axios.patch(`${baseUrl}/${id}`, data, {headers: authHeader()})
    return res.data
}

export const addCard = async (data) => {
    const res = await axios.post(`${baseUrl}/PostCard`, data)
    return res.data
}

export const activateCard = async (id, data) => {
    const res = await axios.post(`${baseUrl}/ActivateCard`, data, {headers: {'Content-Type': 'application/json'}})
    return res.data
}

export const searchByLastName = async (searchValue) => {
    const res = await axios.get(`${baseUrl}/SearchBySecondName?searchString=${searchValue}`)
    return res.data
}


export const searchByVIN = async (searchValue) => {
    const res = await axios.get(`${baseUrl}/SearchByVIN?searchString=${searchValue}`)
    return res.data
}

export const searchByCardNumber = async (searchValue) => {
    const res = await axios.get(`${baseUrl}/SearchByCardNumber?searchString=${searchValue}`)
    return res.data
}