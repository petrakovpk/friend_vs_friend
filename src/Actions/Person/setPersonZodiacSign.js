export const CHANGE_PERSON_ZODIAC_SIGN_1 = 'CHANGE_PERSON_ZODIAC_SIGN_1';
export const CHANGE_PERSON_ZODIAC_SIGN_2 = 'CHANGE_PERSON_ZODIAC_SIGN_2';
export const CHANGE_PERSON_ZODIAC_SIGN_3 = 'CHANGE_PERSON_ZODIAC_SIGN_3';
export const CHANGE_PERSON_ZODIAC_SIGN_4 = 'CHANGE_PERSON_ZODIAC_SIGN_4'
export const CHANGE_PERSON_ZODIAC_SIGN_5 = 'CHANGE_PERSON_ZODIAC_SIGN_5';



 const calculateZodiacSign = (day) => {



     if (day < 5) {

         return "Скорпион";
     }

    if (day >= 5) {

        return "Водолей";
     }


    return ""


}

export const changePersonZodiacSign1 = (day) => {

    return{
        type: CHANGE_PERSON_ZODIAC_SIGN_1,
        payload: calculateZodiacSign(day)
    }

}

export const changePersonZodiacSign2 = (day) => {

    return{

        type: CHANGE_PERSON_ZODIAC_SIGN_2,
        payload: calculateZodiacSign(day)
    }

}

export const changePersonZodiacSign3 = (day) => {

    return{

        type: CHANGE_PERSON_ZODIAC_SIGN_3,
        payload: calculateZodiacSign(day)
    }

}

export const changePersonZodiacSign4 = (day) => {

    return{

        type: CHANGE_PERSON_ZODIAC_SIGN_4,
        payload: calculateZodiacSign(day)
    }

}

export const changePersonZodiacSign5 = (day) => {

    return{

        type: CHANGE_PERSON_ZODIAC_SIGN_5,
        payload: calculateZodiacSign(day)
    }

}