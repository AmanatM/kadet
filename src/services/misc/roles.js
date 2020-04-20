import axios from 'axios'

const baseUrl = "https://kadet-assistance.herokuapp.com/api/Roles"

export const getPositions = async () => {
    const res = await axios.get(baseUrl)
    return res.data
}