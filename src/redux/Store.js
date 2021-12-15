import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

//POKES
import dataReducer from './DataDuck'
import adminReducer from './AdminDuck'


const rootReducer = combineReducers({
    data: dataReducer,
    admin: adminReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function generateStore() {
    const store = createStore(rootReducer, composeEnhancers( applyMiddleware(thunk)))
    return store
}