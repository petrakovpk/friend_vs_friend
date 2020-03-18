import {
    CHANGE_HAZARD_PERSON_NAME_1,
    CHANGE_HAZARD_PERSON_NAME_2,
    CHANGE_HAZARD_PERSON_NAME_3,
    CHANGE_HAZARD_PERSON_NAME_4,
    CHANGE_HAZARD_PERSON_NAME_5
} from "../../Actions/Hazard/setHazardPersonName"

const defaultState = {
    hazardPersonName1: "",
    hazardPersonName2: "",
    hazardPersonName3: "",
    hazardPersonName4: "",
    hazardPersonName5: "",
}


export const setHazardPersonNameReducer = (state=defaultState, action) => {

    switch(action.type){
        case CHANGE_HAZARD_PERSON_NAME_1:
            return {
                ...state,
                hazardPersonName1: action.payload
            }
        case CHANGE_HAZARD_PERSON_NAME_2:
            return {
                ...state,
                hazardPersonName2: action.payload
            }
        case CHANGE_HAZARD_PERSON_NAME_3:
            return {
                ...state,
                hazardPersonName3: action.payload
            }
        case CHANGE_HAZARD_PERSON_NAME_4:
            return {
                ...state,
                hazardPersonName4: action.payload
            }
        case CHANGE_HAZARD_PERSON_NAME_5:
            return {
                ...state,
                hazardPersonName5: action.payload
            }


    }

    return state
}