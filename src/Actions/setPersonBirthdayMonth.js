export const CHANGE_PERSON_BIRTHDAY_1_MONTH = 'CHANGE_PERSON_BIRTHDAY_1_MONTH';
export const CHANGE_PERSON_BIRTHDAY_2_MONTH = 'CHANGE_PERSON_BIRTHDAY_2_MONTH';
export const CHANGE_PERSON_BIRTHDAY_3_MONTH = 'CHANGE_PERSON_BIRTHDAY_3_MONTH';
export const CHANGE_PERSON_BIRTHDAY_4_MONTH = 'CHANGE_PERSON_BIRTHDAY_4_MONTH';
export const CHANGE_PERSON_BIRTHDAY_5_MONTH = 'CHANGE_PERSON_BIRTHDAY_5_MONTH';


export const changePersonBirthdayMonth1 = (day) => {

    return {
        type: CHANGE_PERSON_BIRTHDAY_1_MONTH,
        payload: day
    }
}

export const changePersonBirthdayMonth2 = (day) => {

    return {
        type: CHANGE_PERSON_BIRTHDAY_2_MONTH,
        payload: day
    }
}

export const changePersonBirthdayMonth3 = (day) => {

    return {
        type: CHANGE_PERSON_BIRTHDAY_3_MONTH,
        payload: day
    }
}

export const changePersonBirthdayMonth4 = (day) => {

    return {
        type: CHANGE_PERSON_BIRTHDAY_4_MONTH,
        payload: day
    }
}

export const changePersonBirthdayMonth5 = (day) => {

    return {
        type: CHANGE_PERSON_BIRTHDAY_5_MONTH,
        payload: day
    }
}