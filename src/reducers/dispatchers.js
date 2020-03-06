import { getAllDispatchers } from "../services/dispatcherService"

const reducer = (state = null, action) => {
    switch(action.type) {
        case 'ALL_DISPATCHERS':
            return action.data
        default:
            return state
        
    }
}

export const getDispatchers = () => {
    return async dispatch => {
        const all_dispatchers = await getAllDispatchers()

        dispatch({
            type: 'ALL_DISPATCHERS',
            data: all_dispatchers
        })
    }
}

export default reducer