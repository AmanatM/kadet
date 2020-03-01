import axios from 'axios'
const baseUrl = '/api/users'

export const loginUser = async (credentials) => {
    const res = await axios.get(`${baseUrl}/`, credentials)
    return res.data
}