import {
    CHANGE_HAZARD_PERSON_VALUE_1,
    CHANGE_HAZARD_PERSON_VALUE_2,
    CHANGE_HAZARD_PERSON_VALUE_3,
    CHANGE_HAZARD_PERSON_VALUE_4,
    CHANGE_HAZARD_PERSON_VALUE_5
} from "../../Actions/Hazard/setHazardPersonValue"

const defaultState = {
    hazardPersonValue1: "",
    hazardPersonValue2: "",
    hazardPersonValue3: "",
    hazardPersonValue4: "",
    hazardPersonValue5: "",
}


export const setHazardPersonValueReducer = (state=defaultState, action) => {

    switch(action.type){
        case CHANGE_HAZARD_PERSON_VALUE_1:
            return {
                ...state,
                hazardPersonValue1: action.payload
            }
        case CHANGE_HAZARD_PERSON_VALUE_2:
            return {
                ...state,
                hazardPersonValue2: action.payload
            }
        case CHANGE_HAZARD_PERSON_VALUE_3:
            return {
                ...state,
                hazardPersonValue3: action.payload
            }
        case CHANGE_HAZARD_PERSON_VALUE_4:
            return {
                ...state,
                hazardPersonValue4: action.payload
            }
        case CHANGE_HAZARD_PERSON_VALUE_5:
            return {
                ...state,
                hazardPersonValue5: action.payload
            }


    }

    return state
}