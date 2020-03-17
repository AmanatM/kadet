import axios from 'axios'
import { authHeader } from './misc/authHeader'

const baseUrl = '/api/dispatchers'
 
export const getAllDispatchers = async () => {
    
    const res = await axios.get(baseUrl, {headers: authHeader()})

    return res.data
}
