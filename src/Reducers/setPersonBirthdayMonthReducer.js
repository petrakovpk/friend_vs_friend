import {CHANGE_PERSON_BIRTHDAY_1_MONTH,
    CHANGE_PERSON_BIRTHDAY_2_MONTH,
    CHANGE_PERSON_BIRTHDAY_3_MONTH,
    CHANGE_PERSON_BIRTHDAY_4_MONTH,
    CHANGE_PERSON_BIRTHDAY_5_MONTH

} from "../Actions/setPersonBirthdayMonth"

const defaultState = {

    personBirthdayMonth_1 : "",
    personBirthdayMonth_2 : "",
    personBirthdayMonth_3 : "",
    personBirthdayMonth_4 : "",
    personBirthdayMonth_5 : ""

}

export const setPersonBirthdayMonthReducer = (state=defaultState, action) => {

    switch(action.type) {

        case CHANGE_PERSON_BIRTHDAY_1_MONTH:
            return {
                ...state,
                personBirthdayMonth_1: action.payload

            };
        case CHANGE_PERSON_BIRTHDAY_2_MONTH:
            return {
                ...state,
                personBirthdayMonth_2: action.payload

            };
        case CHANGE_PERSON_BIRTHDAY_3_MONTH:
            return {
                ...state,
                personBirthdayMonth_3: action.payload

            };
        case CHANGE_PERSON_BIRTHDAY_4_MONTH:
            return {
                ...state,
                personBirthdayMonth_4: action.payload

            };
        case CHANGE_PERSON_BIRTHDAY_5_MONTH:
            return {
                ...state,
                personBirthdayMonth_5: action.payload

            };
    }

            return state;
    }