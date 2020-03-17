import {combineReducers, createStore} from 'redux'

import {setPersonNameReducer} from "../Reducers/setPersonNameReducer";
import {setPersonBirthdayDayReducer} from "../Reducers/setPersonBirthdayDayReducer";
import {setPersonBirthdayMonthReducer} from "../Reducers/setPersonBirthdayMonthReducer";
import {setPersonBirthdayYearReducer} from "../Reducers/setPersonBirthdayYearReducer";
import {setPersonZodiacSignReducer} from "../Reducers/setPersonZodiacSignReducer"

import {setMapPersonNameReducer} from "../Reducers/setMapPersonNameReducer"
import {setMapPersonBirthdayDayReducer} from "../Reducers/setMapPersonBirthdayDayReducer"
import {setMapPersonBirthdayMonthReducer} from "../Reducers/setMapPersonBirthdayMonthReducer"
import {setMapPersonBirthdayYearReducer} from "../Reducers/setMapPersonBirthdayYearReducer"

import {setMapPersonRelationType} from "../Reducers/setMapPersonRelationType"

const store = createStore(combineReducers({
    setPersonNameReducer,
    setMapPersonNameReducer,
    setPersonBirthdayDayReducer,
    setPersonZodiacSignReducer,
    setMapPersonBirthdayDayReducer,
    setMapPersonRelationType,
    setPersonBirthdayMonthReducer,
    setPersonBirthdayYearReducer,
    setMapPersonBirthdayMonthReducer,
    setMapPersonBirthdayYearReducer

}))

export default store;