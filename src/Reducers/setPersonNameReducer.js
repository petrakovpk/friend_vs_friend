import {CHANGE_PERSON_NAME_1} from "../Actions/setPersonName"


const defaultState = {

    personName_1 : ""
}

export const setPersonNameReducer = (state=defaultState, action) => {

    switch(action.type) {

        case CHANGE_PERSON_NAME_1:
            return {
                ...state,
                personName_1: action.payload

            };
    }


    return state;
}