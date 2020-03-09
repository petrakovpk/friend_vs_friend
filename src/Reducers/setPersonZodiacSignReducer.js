import {CHANGE_PERSON_ZODIAC_SIGN_1,
    CHANGE_PERSON_ZODIAC_SIGN_2


} from "../Actions/setPersonZodiacSign"

const defaultState = {
    personZodiacSign_1: "",
    personZodiacSign_2: ""
}

export const setPersonZodiacSignReducer = (state=defaultState, action) => {

    switch(action.type){
        case CHANGE_PERSON_ZODIAC_SIGN_1:
            return{
                ...state,
                personZodiacSign_1: action.payload
            };

        case CHANGE_PERSON_ZODIAC_SIGN_2:
            return{
                ...state,
                personZodiacSign_2: action.payload
            }

    }


    return state

}
