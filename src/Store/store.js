import {combineReducers, createStore} from 'redux'

import {setPersonNameReducer} from "../Reducers/Person/setPersonNameReducer";
import {setPersonBirthdayDayReducer} from "../Reducers/Person/setPersonBirthdayDayReducer";
import {setPersonBirthdayMonthReducer} from "../Reducers/Person/setPersonBirthdayMonthReducer";
import {setPersonBirthdayYearReducer} from "../Reducers/Person/setPersonBirthdayYearReducer";
import {setPersonZodiacSignReducer} from "../Reducers/Person/setPersonZodiacSignReducer"

import {setMapPersonNameReducer} from "../Reducers/Horo/setMapPersonNameReducer"
import {setMapPersonBirthdayDayReducer} from "../Reducers/Horo/setMapPersonBirthdayDayReducer"
import {setMapPersonBirthdayMonthReducer} from "../Reducers/Horo/setMapPersonBirthdayMonthReducer"
import {setMapPersonBirthdayYearReducer} from "../Reducers/Horo/setMapPersonBirthdayYearReducer"
import {setMapPersonRelationType} from "../Reducers/Horo/setMapPersonRelationType"
import {setMapRelationText} from "../Reducers/Horo/setMapRelationText";
import {setMapRelationHeader} from "../Reducers/Horo/setMapRelationHeader";

import {setHazardHeaderReducer} from "../Reducers/Hazard/setHazardHeaderReducer"
import {setHazardTextReducer} from "../Reducers/Hazard/setHazardTextReducer"
import {setHazardPersonNameReducer} from "../Reducers/Hazard/setHazardPersonNameReducer"
import {setHazardPersonValueReducer} from "../Reducers/Hazard/setHazardPersonValueReducer"

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
    setMapPersonBirthdayYearReducer,
    setMapRelationText,
    setMapRelationHeader,
    setHazardHeaderReducer,
    setHazardTextReducer,
    setHazardPersonNameReducer,
    setHazardPersonValueReducer

}))

export default store;