export const CHANGE_PERSON_ZODIAC_SIGN_1 = 'CHANGE_PERSON_ZODIAC_SIGN_1';
export const CHANGE_PERSON_ZODIAC_SIGN_2 = 'CHANGE_PERSON_ZODIAC_SIGN_2';


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