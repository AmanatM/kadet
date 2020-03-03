import { loginUser } from '../services/userService'
 
const reducer = (state = null, action) => {
    switch(action.type) {
        case 'LOGIN':
            return action.data

        case 'LOGOUT':
            return null

        case 'INITUSER':
            return action.data
            
        case  'UPDATE_USER':
            return action.data

        default:
            return state
        
    }
}

export const login = (credentials) => {
    return async dispatch => {
        const loggedUser = await loginUser(credentials)

        window.localStorage.setItem(
            'user', JSON.stringify(loggedUser)
        ) 
        dispatch({
            type: 'LOGIN',
            data: loggedUser
        })
    }
}

export const logout = () => {
    window.localStorage.removeItem('user')
    return {
        type: 'LOGOUT'
    }
}

export const initUser = () => {
    const userFromLocalStorage = window.localStorage.getItem('user')

    if (userFromLocalStorage) {
        let loggedUser = JSON.parse(userFromLocalStorage)
        return {
            type: 'INITUSER',
            data: loggedUser
        }
    }

    return {
        type: 'INITUSER',
        data: null
    }
}

export default reducer