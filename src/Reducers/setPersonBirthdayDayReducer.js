import {CHANGE_PERSON_BIRTHDAY_1_DAY,
    CHANGE_PERSON_BIRTHDAY_2_DAY,
    CHANGE_PERSON_BIRTHDAY_3_DAY,
    CHANGE_PERSON_BIRTHDAY_4_DAY,
    CHANGE_PERSON_BIRTHDAY_5_DAY

} from "../Actions/setPersonBirthdayDay"

const defaultState = {

    personBirthdayDay_1 : "",
    personBirthdayDay_2 : "",
    personBirthdayDay_3 : "",
    personBirthdayDay_4 : "",
    personBirthdayDay_5 : ""

}

export const setPersonBirthdayDayReducer = (state=defaultState, action) => {

    switch(action.type) {

        case CHANGE_PERSON_BIRTHDAY_1_DAY:
            return {
                ...state,
                personBirthdayDay_1: action.payload

            };
        case CHANGE_PERSON_BIRTHDAY_2_DAY:
            return {
                ...state,
                personBirthdayDay_2: action.payload

            };
        case CHANGE_PERSON_BIRTHDAY_3_DAY:
            return {
                ...state,
                personBirthdayDay_3: action.payload

            };
        case CHANGE_PERSON_BIRTHDAY_4_DAY:
            return {
                ...state,
                personBirthdayDay_4: action.payload

            };
        case CHANGE_PERSON_BIRTHDAY_5_DAY:
            return {
                ...state,
                personBirthdayDay_5: action.payload

            };
    }

            return state;
    }