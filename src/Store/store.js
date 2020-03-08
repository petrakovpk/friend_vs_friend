import {combineReducers, createStore} from 'redux'
import {setPersonNameReducer} from "../Reducers/setPersonNameReducer";



const store = createStore(combineReducers({setPersonNameReducer}))

export default store;