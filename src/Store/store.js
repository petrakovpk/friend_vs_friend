import {combineReducers, createStore} from 'redux'
import {setPersonNameReducer} from "../Reducers/setPersonNameReducer";
import {setHoroMapReducer} from "../Reducers/setHoroMapReducer"


const store = createStore(combineReducers({setPersonNameReducer, setHoroMapReducer}))

export default store;