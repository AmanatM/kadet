import axios from 'axios'
const baseUrl = '/api/dispatchers'

export const getAllDispatchers = async () => {
    const res = await axios.get(baseUrl)
    return res.data
}
