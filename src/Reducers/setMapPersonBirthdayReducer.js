import {

    CHANGE_MAP_PERSON_BIRTHDAY_DAY_1,
    CHANGE_MAP_PERSON_BIRTHDAY_DAY_2,
    CHANGE_MAP_PERSON_BIRTHDAY_DAY_3,
    CHANGE_MAP_PERSON_BIRTHDAY_DAY_4,
    CHANGE_MAP_PERSON_BIRTHDAY_DAY_5

} from "../Actions/setMapPersonBirthday"

const defaultState = {

    mapPersonBirthdayDay1: "",
    mapPersonBirthdayDay2: "",
    mapPersonBirthdayDay3: "",
    mapPersonBirthdayDay4: "",
    mapPersonBirthdayDay5: ""
}

export const setMapPersonBirthdayReducer = (state=defaultState, action) => {

    switch(action.type){


            case CHANGE_MAP_PERSON_BIRTHDAY_DAY_1:
            return {
                ...state,
                mapPersonBirthdayDay1: action.payload
            }
             case CHANGE_MAP_PERSON_BIRTHDAY_DAY_2:
            return {
                ...state,
                mapPersonBirthdayDay2: action.payload
            }
             case CHANGE_MAP_PERSON_BIRTHDAY_DAY_3:
            return {
                ...state,
                mapPersonBirthdayDay3: action.payload
            }
             case CHANGE_MAP_PERSON_BIRTHDAY_DAY_4:
            return {
                ...state,
                mapPersonBirthdayDay4: action.payload
            }
             case CHANGE_MAP_PERSON_BIRTHDAY_DAY_5:
            return {
                ...state,
                mapPersonBirthdayDay5: action.payload
            }
    }

    return state
}