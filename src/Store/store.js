import {combineReducers, createStore} from 'redux'
import {setPersonNameReducer} from "../Reducers/setPersonNameReducer";
import {setMapPersonNameReducer} from "../Reducers/setMapPersonNameReducer"
import {setMapPersonBirthdayReducer} from "../Reducers/setMapPersonBirthdayReducer"
import {setPersonBirthdayReducer} from "../Reducers/setPersonBirthdayReducer";
import {setPersonZodiacSignReducer} from "../Reducers/setPersonZodiacSignReducer"
import {setMapPersonRelationType} from "../Reducers/setMapPersonRelationType"

const store = createStore(combineReducers({
    setPersonNameReducer,
    setMapPersonNameReducer,
    setPersonBirthdayReducer,
    setPersonZodiacSignReducer,
    setMapPersonBirthdayReducer,
    setMapPersonRelationType

}))

export default store;