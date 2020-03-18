import {CHANGE_MAP_RELATION_HEADER} from "../../Actions/Horo/setMapRelationHeader"


const defaultState = {
    mapRelationHeader: "Выберите человека"
}


export const setMapRelationHeader = (state=defaultState, action) => {



    switch(action.type) {

        case CHANGE_MAP_RELATION_HEADER:
            return{
                ...state,
                mapRelationHeader: action.payload
            }

    }

    return state
}