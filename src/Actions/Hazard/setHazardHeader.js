export const CHANGE_HAZARD_HEADER = 'CHANGE_HAZARD_HEADER';

export const changeHazardHeader = (type) => {

    return {
        type: CHANGE_HAZARD_HEADER,
        payload: type
    }
}