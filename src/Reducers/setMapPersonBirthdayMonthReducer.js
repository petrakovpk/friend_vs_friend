import {

    CHANGE_MAP_PERSON_BIRTHDAY_MONTH_1,
    CHANGE_MAP_PERSON_BIRTHDAY_MONTH_2,
    CHANGE_MAP_PERSON_BIRTHDAY_MONTH_3,
    CHANGE_MAP_PERSON_BIRTHDAY_MONTH_4,
    CHANGE_MAP_PERSON_BIRTHDAY_MONTH_5

} from "../Actions/setMapPersonBirthdayMonth"

const defaultState = {

    mapPersonBirthdayMonth1: "",
    mapPersonBirthdayMonth2: "",
    mapPersonBirthdayMonth3: "",
    mapPersonBirthdayMonth4: "",
    mapPersonBirthdayMonth5: ""
}

export const setMapPersonBirthdayMonthReducer = (state=defaultState, action) => {

    switch(action.type){


            case CHANGE_MAP_PERSON_BIRTHDAY_MONTH_1:
            return {
                ...state,
                mapPersonBirthdayMonth1: action.payload
            }
             case CHANGE_MAP_PERSON_BIRTHDAY_MONTH_2:
            return {
                ...state,
                mapPersonBirthdayMonth2: action.payload
            }
             case CHANGE_MAP_PERSON_BIRTHDAY_MONTH_3:
            return {
                ...state,
                mapPersonBirthdayMonth3: action.payload
            }
             case CHANGE_MAP_PERSON_BIRTHDAY_MONTH_4:
            return {
                ...state,
                mapPersonBirthdayMonth4: action.payload
            }
             case CHANGE_MAP_PERSON_BIRTHDAY_MONTH_5:
            return {
                ...state,
                mapPersonBirthdayMonth5: action.payload
            }
    }

    return state
}