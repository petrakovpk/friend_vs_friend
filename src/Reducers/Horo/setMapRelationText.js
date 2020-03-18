import {CHANGE_MAP_RELATION_TEXT} from "../../Actions/Horo/setMapRelationText"


const defaultState = {
    mapRelationText: "Выберите связь"
}


export const setMapRelationText = (state=defaultState, action) => {



    switch(action.type) {

        case CHANGE_MAP_RELATION_TEXT:
            return{
                ...state,
                mapRelationText: action.payload
            }

    }

    return state
}