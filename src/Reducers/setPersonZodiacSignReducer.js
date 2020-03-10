import {CHANGE_PERSON_ZODIAC_SIGN_1,
    CHANGE_PERSON_ZODIAC_SIGN_2,
    CHANGE_PERSON_ZODIAC_SIGN_3,
    CHANGE_PERSON_ZODIAC_SIGN_4,
    CHANGE_PERSON_ZODIAC_SIGN_5


} from "../Actions/setPersonZodiacSign"

const defaultState = {
    personZodiacSign_1: "",
    personZodiacSign_2: "",
    personZodiacSign_3: "",
    personZodiacSign_4: "",
    personZodiacSign_5: ""
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
            };
         case CHANGE_PERSON_ZODIAC_SIGN_3:
            return{
                ...state,
                personZodiacSign_3: action.payload
            };
         case CHANGE_PERSON_ZODIAC_SIGN_4:
            return{
                ...state,
                personZodiacSign_4: action.payload
            };
        case CHANGE_PERSON_ZODIAC_SIGN_5:
            return{
                ...state,
                personZodiacSign_5: action.payload
            }

    }


    return state

}
