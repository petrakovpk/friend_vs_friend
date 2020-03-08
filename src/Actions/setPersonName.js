export const CHANGE_PERSON_NAME_1 = 'CHANGE_PERSON_NAME_1';

export const changePersonName1 = (name) => {

    return {
        type: CHANGE_PERSON_NAME_1,
        payload: name
    }
}