import {

    CHANGE_MAP_PERSON_BIRTHDAY_YEAR_1,
    CHANGE_MAP_PERSON_BIRTHDAY_YEAR_2,
    CHANGE_MAP_PERSON_BIRTHDAY_YEAR_3,
    CHANGE_MAP_PERSON_BIRTHDAY_YEAR_4,
    CHANGE_MAP_PERSON_BIRTHDAY_YEAR_5

} from "../../Actions/Horo/setMapPersonBirthdayYear"

const defaultState = {

    mapPersonBirthdayYear1: "",
    mapPersonBirthdayYear2: "",
    mapPersonBirthdayYear3: "",
    mapPersonBirthdayYear4: "",
    mapPersonBirthdayYear5: ""
}

export const setMapPersonBirthdayYearReducer = (state=defaultState, action) => {

    switch(action.type){


            case CHANGE_MAP_PERSON_BIRTHDAY_YEAR_1:
            return {
                ...state,
                mapPersonBirthdayYear1: action.payload
            }
             case CHANGE_MAP_PERSON_BIRTHDAY_YEAR_2:
            return {
                ...state,
                mapPersonBirthdayYear2: action.payload
            }
             case CHANGE_MAP_PERSON_BIRTHDAY_YEAR_3:
            return {
                ...state,
                mapPersonBirthdayYear3: action.payload
            }
             case CHANGE_MAP_PERSON_BIRTHDAY_YEAR_4:
            return {
                ...state,
                mapPersonBirthdayYear4: action.payload
            }
             case CHANGE_MAP_PERSON_BIRTHDAY_YEAR_5:
            return {
                ...state,
                mapPersonBirthdayYear5: action.payload
            }
    }

    return state
}