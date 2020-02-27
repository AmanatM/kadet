import axios from 'axios'
const baseUrl = '/api/notes'

export const loginUser = async (credentials) => {
    const res = await axios.get(`${baseUrl}/`, credentials)
    return res.data
}