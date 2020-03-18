export const CHANGE_MAP_RELATION_TEXT = 'CHANGE_MAP_RELATION_TEXT';

export const changeMapRelationText = (type) => {

    return {
        type: CHANGE_MAP_RELATION_TEXT,
        payload: type
    }
}