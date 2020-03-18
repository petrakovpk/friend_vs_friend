import {CHANGE_HAZARD_HEADER} from "../../Actions/Hazard/setHazardHeader"


const defaultState = {
    hazardHeader: ""
}


export const setHazardHeaderReducer = (state=defaultState, action) => {



    switch(action.type) {

        case CHANGE_HAZARD_HEADER:
            return{
                ...state,
                hazardHeader: action.payload
            }

    }

    return state
}