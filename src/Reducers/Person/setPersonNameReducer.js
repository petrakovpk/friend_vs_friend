import {CHANGE_PERSON_NAME_1,
    CHANGE_PERSON_NAME_2,
    CHANGE_PERSON_NAME_3,
    CHANGE_PERSON_NAME_4,
    CHANGE_PERSON_NAME_5

} from "../../Actions/Person/setPersonName"


const defaultState = {

    personName_1 : "Паша",
    personName_2 : "Саша",
    personName_3 : "Вася",
    personName_4 : "Коля",
    personName_5 : "Даня"

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