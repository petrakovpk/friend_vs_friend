import {
    CHANGE_MAP_RELATION_TYPE_1_2,
    CHANGE_MAP_RELATION_TYPE_1_3,
    CHANGE_MAP_RELATION_TYPE_1_4,
    CHANGE_MAP_RELATION_TYPE_1_5,
    CHANGE_MAP_RELATION_TYPE_2_3,
    CHANGE_MAP_RELATION_TYPE_2_4,
    CHANGE_MAP_RELATION_TYPE_2_5,
    CHANGE_MAP_RELATION_TYPE_3_4,
    CHANGE_MAP_RELATION_TYPE_3_5,
    CHANGE_MAP_RELATION_TYPE_4_5

} from "../Actions/setMapPersonRelationType"

const defaultState = {

    mapRelationType_1_2 : "",
    mapRelationType_1_3 : "",
    mapRelationType_1_4 : "",
    mapRelationType_1_5 : "",
    mapRelationType_2_3 : "",
    mapRelationType_2_4 : "",
    mapRelationType_2_5 : "",
    mapRelationType_3_4 : "",
    mapRelationType_3_5 : "",
    mapRelationType_4_5 : "",
}

export const setMapPersonRelationType = (state=defaultState, action) => {
      switch(action.type) {
          case CHANGE_MAP_RELATION_TYPE_1_2:
              return{
                  ...state,
                  mapRelationType_1_2: action.payload
              }

           case CHANGE_MAP_RELATION_TYPE_1_3:
              return{
                  ...state,
                  mapRelationType_1_3: action.payload
              }

               case CHANGE_MAP_RELATION_TYPE_1_4:
              return{
                  ...state,
                  mapRelationType_1_4: action.payload
              }

               case CHANGE_MAP_RELATION_TYPE_1_5:
              return{
                  ...state,
                  mapRelationType_1_5: action.payload
              }

               case CHANGE_MAP_RELATION_TYPE_2_3:
              return{
                  ...state,
                  mapRelationType_2_3: action.payload
              }

               case CHANGE_MAP_RELATION_TYPE_2_4:
              return{
                  ...state,
                  mapRelationType_2_4: action.payload
              }

               case CHANGE_MAP_RELATION_TYPE_2_5:
              return{
                  ...state,
                  mapRelationType_2_5: action.payload
              }

               case CHANGE_MAP_RELATION_TYPE_3_4:
              return{
                  ...state,
                  mapRelationType_3_4: action.payload
              }

               case CHANGE_MAP_RELATION_TYPE_3_5:
              return{
                  ...state,
                  mapRelationType_3_5: action.payload
              }

               case CHANGE_MAP_RELATION_TYPE_4_5:
              return{
                  ...state,
                  mapRelationType_4_5: action.payload
              }

      }

      return state;

}