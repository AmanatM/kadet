import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'


import userReducer from './reducers/user'
import notificationsReducer from './reducers/notifications'

const reduce_all = combineReducers({
    user: userReducer,
    notifications: notificationsReducer
})

const store = createStore(reduce_all, composeWithDevTools(applyMiddleware(thunk)))

export default store