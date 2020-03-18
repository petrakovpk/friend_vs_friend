import {CHANGE_PERSON_BIRTHDAY_1_YEAR,
    CHANGE_PERSON_BIRTHDAY_2_YEAR,
    CHANGE_PERSON_BIRTHDAY_3_YEAR,
    CHANGE_PERSON_BIRTHDAY_4_YEAR,
    CHANGE_PERSON_BIRTHDAY_5_YEAR

} from "../../Actions/Person/setPersonBirthdayYear"

const defaultState = {

    personBirthdayYear_1 : "",
    personBirthdayYear_2 : "",
    personBirthdayYear_3 : "",
    personBirthdayYear_4 : "",
    personBirthdayYear_5 : ""

}

export const setPersonBirthdayYearReducer = (state=defaultState, action) => {

    switch(action.type) {

        case CHANGE_PERSON_BIRTHDAY_1_YEAR:
            return {
                ...state,
                personBirthdayYear_1: action.payload

            };
        case CHANGE_PERSON_BIRTHDAY_2_YEAR:
            return {
                ...state,
                personBirthdayYear_2: action.payload

            };
        case CHANGE_PERSON_BIRTHDAY_3_YEAR:
            return {
                ...state,
                personBirthdayYear_3: action.payload

            };
        case CHANGE_PERSON_BIRTHDAY_4_YEAR:
            return {
                ...state,
                personBirthdayYear_4: action.payload

            };
        case CHANGE_PERSON_BIRTHDAY_5_YEAR:
            return {
                ...state,
                personBirthdayYear_5: action.payload

            };
    }

            return state;
    }