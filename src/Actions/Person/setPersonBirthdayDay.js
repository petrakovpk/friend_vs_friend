export const CHANGE_PERSON_BIRTHDAY_1_DAY = 'CHANGE_PERSON_BIRTHDAY_1_DAY';
export const CHANGE_PERSON_BIRTHDAY_2_DAY = 'CHANGE_PERSON_BIRTHDAY_2_DAY';
export const CHANGE_PERSON_BIRTHDAY_3_DAY = 'CHANGE_PERSON_BIRTHDAY_3_DAY';
export const CHANGE_PERSON_BIRTHDAY_4_DAY = 'CHANGE_PERSON_BIRTHDAY_4_DAY';
export const CHANGE_PERSON_BIRTHDAY_5_DAY = 'CHANGE_PERSON_BIRTHDAY_5_DAY';


export const changePersonBirthdayDay1 = (day) => {

    return {
        type: CHANGE_PERSON_BIRTHDAY_1_DAY,
        payload: day
    }
}

export const changePersonBirthdayDay2 = (day) => {

    return {
        type: CHANGE_PERSON_BIRTHDAY_2_DAY,
        payload: day
    }
}

export const changePersonBirthdayDay3 = (day) => {

    return {
        type: CHANGE_PERSON_BIRTHDAY_3_DAY,
        payload: day
    }
}

export const changePersonBirthdayDay4 = (day) => {

    return {
        type: CHANGE_PERSON_BIRTHDAY_4_DAY,
        payload: day
    }
}

export const changePersonBirthdayDay5 = (day) => {

    return {
        type: CHANGE_PERSON_BIRTHDAY_5_DAY,
        payload: day
    }
}