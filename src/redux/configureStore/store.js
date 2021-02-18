import { createStore, combineReducers } from 'redux'
import countReducer from '../reducers/countReducer.js'

const configStore = () => {
    const store = createStore(combineReducers({
        count: countReducer
    }))
    return store
}


export default configStore