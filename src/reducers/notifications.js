// const notificationsMock = [
//     {
//         heading: 'Informative',
//         text: 'Some information',
//         type: 'info',
//         time: 1000
//     },
//     {
//         heading: 'Some error',
//         text: 'An error occured',
//         type: 'error',
//         time: 1000
//     },
//     {
//         heading: 'Success',
//         type: 'success',
//         time: 1000
//     },
// ]

const reducer = (state = [], action) => {
    switch(action.type) {
        case 'NOTIFY':
            return [...state, action.data]
        case 'CLEAR':
            return []
        case 'CLOSE_NOTIFICATION':
            let newNotifications = state.filter(item => item.id !== action.data)
            return newNotifications
        default:
            return state
        
    }
}

const getRandomId = () => {
    return Math.floor((Math.random() * 99999999))
}

export const notify = (notification) => {
    return {
        type: 'NOTIFY',
        data: {...notification, id: getRandomId()}
        }
}

export const clearNotifications = () => {
    return {
        type: 'CLEAR'
    }
}

export const closeNotification = (id) => {
    return {
        type: 'CLOSE_NOTIFICATION',
        data: id
    }
}


export default reducer