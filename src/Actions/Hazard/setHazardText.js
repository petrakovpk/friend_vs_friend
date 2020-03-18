export const CHANGE_HAZARD_TEXT = 'CHANGE_HAZARD_TEXT';

export const changeHazardText = (type) => {

    return {
        type: CHANGE_HAZARD_TEXT,
        payload: type
    }
}