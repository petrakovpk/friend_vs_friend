import {CHANGE_HAZARD_TEXT} from "../../Actions/Hazard/setHazardText"


const defaultState = {
    hazardText: "Выберите человека"
}


export const setHazardTextReducer = (state=defaultState, action) => {



    switch(action.type) {

        case CHANGE_HAZARD_TEXT:
            return{
                ...state,
                hazardText: action.payload
            }

    }

    return state
}