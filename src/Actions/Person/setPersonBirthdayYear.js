export const CHANGE_PERSON_BIRTHDAY_1_YEAR = 'CHANGE_PERSON_BIRTHDAY_1_YEAR';
export const CHANGE_PERSON_BIRTHDAY_2_YEAR = 'CHANGE_PERSON_BIRTHDAY_2_YEAR';
export const CHANGE_PERSON_BIRTHDAY_3_YEAR = 'CHANGE_PERSON_BIRTHDAY_3_YEAR';
export const CHANGE_PERSON_BIRTHDAY_4_YEAR = 'CHANGE_PERSON_BIRTHDAY_4_YEAR';
export const CHANGE_PERSON_BIRTHDAY_5_YEAR = 'CHANGE_PERSON_BIRTHDAY_5_YEAR';


export const changePersonBirthdayYear1 = (day) => {

    return {
        type: CHANGE_PERSON_BIRTHDAY_1_YEAR,
        payload: day
    }
}

export const changePersonBirthdayYear2 = (day) => {

    return {
        type: CHANGE_PERSON_BIRTHDAY_2_YEAR,
        payload: day
    }
}

export const changePersonBirthdayYear3 = (day) => {

    return {
        type: CHANGE_PERSON_BIRTHDAY_3_YEAR,
        payload: day
    }
}

export const changePersonBirthdayYear4 = (day) => {

    return {
        type: CHANGE_PERSON_BIRTHDAY_4_YEAR,
        payload: day
    }
}

export const changePersonBirthdayYear5 = (day) => {

    return {
        type: CHANGE_PERSON_BIRTHDAY_5_YEAR,
        payload: day
    }
}