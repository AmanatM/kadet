let initialState = {
    heading: '',
    text: '',
    type: 'info',
    timed: false,
    time: 2000
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'NOTIFY':
            return action.data
        default:
            return state
        
    }
}

export const notify = (notification) => {
    return {
        type: 'NOTIFY',
        data: {...notification,
            timed: typeof(notification.timed) === 'boolean' ? notification.timed : false,
            type: notification.type ? notification.type : 'info',
            time: notification.time ? notification.time : 3000
        }
    }
}

export default reducer