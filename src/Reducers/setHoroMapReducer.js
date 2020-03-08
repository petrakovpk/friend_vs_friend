import {
    CHANGE_MAP_PERSON_NAME_1,
    CHANGE_MAP_PERSON_NAME_2,
    CHANGE_MAP_PERSON_NAME_3,
    CHANGE_MAP_PERSON_NAME_4,
    CHANGE_MAP_PERSON_NAME_5

} from "../Actions/setHoroMap"

const defaultState = {
    mapPersonName1 : "",
    mapPersonName2 : "",
    mapPersonName3 : "",
    mapPersonName4 : "",
    mapPersonName5 : ""
}

export const setHoroMapReducer = (state=defaultState, action) => {

    switch(action.type){
        case CHANGE_MAP_PERSON_NAME_1:
            return {
                ...state,
                mapPersonName1: action.payload
            }
        case CHANGE_MAP_PERSON_NAME_2:
            return {
                ...state,
                mapPersonName2: action.payload
            }
        case CHANGE_MAP_PERSON_NAME_3:
            return {
                ...state,
                mapPersonName3: action.payload
            }
        case CHANGE_MAP_PERSON_NAME_4:
            return {
                ...state,
                mapPersonName4: action.payload
            }
        case CHANGE_MAP_PERSON_NAME_5:
            return {
                ...state,
                mapPersonName5: action.payload
            }
    }

    return state
}