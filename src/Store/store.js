import {combineReducers, createStore} from 'redux'
import {setPersonNameReducer} from "../Reducers/setPersonNameReducer";
import {setMapPersonNameReducer} from "../Reducers/setMapPersonNameReducer"
import {setMapPersonBirthdayDayReducer} from "../Reducers/setMapPersonBirthdayDayReducer"
import {setPersonBirthdayDayReducer} from "../Reducers/setPersonBirthdayDayReducer";
import {setPersonZodiacSignReducer} from "../Reducers/setPersonZodiacSignReducer"
import {setMapPersonRelationType} from "../Reducers/setMapPersonRelationType"

const store = createStore(combineReducers({
    setPersonNameReducer,
    setMapPersonNameReducer,
    setPersonBirthdayDayReducer,
    setPersonZodiacSignReducer,
    setMapPersonBirthdayDayReducer,
    setMapPersonRelationType

}))

export default store;