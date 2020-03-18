export const CHANGE_MAP_RELATION_HEADER = 'CHANGE_MAP_RELATION_HEADER';

export const changeMapRelationHeader = (type) => {

    return {
        type: CHANGE_MAP_RELATION_HEADER,
        payload: type
    }
}