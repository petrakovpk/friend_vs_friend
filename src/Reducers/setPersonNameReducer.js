import {CHANGE_PERSON_NAME_1,
    CHANGE_PERSON_NAME_2,
    CHANGE_PERSON_NAME_3,
    CHANGE_PERSON_NAME_4,
    CHANGE_PERSON_NAME_5

} from "../Actions/setPersonName"


const defaultState = {

    personName_1 : "",
    personName_2 : "",
    personName_3 : "",
    personName_4 : "",
    personName_5 : ""

}

export const setPersonNameReducer = (state=defaultState, action) => {

    switch(action.type) {

        case CHANGE_PERSON_NAME_1:
            return {
                ...state,
                personName_1: action.payload

            };

        case CHANGE_PERSON_NAME_2:
            return {
                ...state,
                personName_2: action.payload

            };
        case CHANGE_PERSON_NAME_3:
            return {
                ...state,
                personName_3: action.payload

            };
        case CHANGE_PERSON_NAME_4:
            return {
                ...state,
                personName_4: action.payload

            };
        case CHANGE_PERSON_NAME_5:
            return {
                ...state,
                personName_5: action.payload

            };
    }


    return state
}