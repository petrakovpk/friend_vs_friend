import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux'

import {changeMapRelationText} from "../../../../Actions/Horo/setMapRelationText"
import {changeMapRelationHeader} from "../../../../Actions/Horo/setMapRelationHeader"

const mappingRelation =
    [
        {
            header : "Заинтересованность",
            text : "Заинтересованность очень сильная"
        },

        {
            header : "Дистанцированность",
            text : "Дистанцированность дальняя"
        },
        {
            header : "Обычный отношения",
            text : "Обычночть обычная"
        },
        {
            header : "Потенциальный конфликт",
            text : "Конфликтность конфликтная"
        }
    ]







class CalcRelationButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {
            changeMapRelationText,
            changeMapRelationHeader

        } = this.props

        const {
            mapRelationType_1_2,
            mapRelationType_1_3,
            mapRelationType_1_4,
            mapRelationType_1_5,
            mapRelationType_2_3,
            mapRelationType_2_4,
            mapRelationType_2_5,
            mapRelationType_3_4,
            mapRelationType_3_5,
            mapRelationType_4_5

        } = this.props



        const {relation_type} = this.props


        const setMapRelationText = () => {

            if (
                mapRelationType_1_2 === ''
                || mapRelationType_1_3===''
                || mapRelationType_1_4===''
                || mapRelationType_1_5===''
                || mapRelationType_2_3===''
                || mapRelationType_2_4===''
                || mapRelationType_2_5===''
                || mapRelationType_3_4===''
                || mapRelationType_3_5===''
                || mapRelationType_4_5===''
            ){
                return;
            }

            switch(relation_type){

                case '1-2':
                    changeMapRelationText(mappingRelation[mapRelationType_1_2].text);
                    changeMapRelationHeader(mappingRelation[mapRelationType_1_2].header);
                    break
                case '1-3':
                    changeMapRelationText(mappingRelation[mapRelationType_1_3].text);
                    changeMapRelationHeader(mappingRelation[mapRelationType_1_3].header);
                    break
                case '1-4':
                    changeMapRelationText(mappingRelation[mapRelationType_1_4].text);
                    changeMapRelationHeader(mappingRelation[mapRelationType_1_4].header);
                    break
                case '1-5':
                    changeMapRelationText(mappingRelation[mapRelationType_1_5].text);
                    changeMapRelationHeader(mappingRelation[mapRelationType_1_5].header);
                    break
                case '2-3':
                    changeMapRelationText(mappingRelation[mapRelationType_2_3].text);
                    changeMapRelationHeader(mappingRelation[mapRelationType_2_3].header);
                    break
                case '2-4':
                    changeMapRelationText(mappingRelation[mapRelationType_2_4].text);
                    changeMapRelationHeader(mappingRelation[mapRelationType_2_4].header);
                    break
                case '2-5':
                    changeMapRelationText(mappingRelation[mapRelationType_2_5].text);
                    changeMapRelationHeader(mappingRelation[mapRelationType_2_5].header);
                    break
                case '3-4':
                   changeMapRelationText(mappingRelation[mapRelationType_3_4].text);
                    changeMapRelationHeader(mappingRelation[mapRelationType_3_4].header);
                    break
                case '3-5':
                    changeMapRelationText(mappingRelation[mapRelationType_3_5].text);
                    changeMapRelationHeader(mappingRelation[mapRelationType_3_5].header);
                    break
                case '4-5':
                    changeMapRelationText(mappingRelation[mapRelationType_4_5].text);
                    changeMapRelationHeader(mappingRelation[mapRelationType_4_5].header);
                    break


            }


        }

        return(

            <button

                onClick={ () => {
                    setMapRelationText()
                }
                }

            >
                Связь {relation_type}
            </button>
        )

    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        changeMapRelationHeader: bindActionCreators(changeMapRelationHeader, dispatch),
        changeMapRelationText: bindActionCreators(changeMapRelationText, dispatch),

    }
}

const mapStateToProps = (state) => {

    return {

        mapRelationType_1_2: state.setMapPersonRelationType.mapRelationType_1_2,
        mapRelationType_1_3: state.setMapPersonRelationType.mapRelationType_1_3,
        mapRelationType_1_4: state.setMapPersonRelationType.mapRelationType_1_4,
        mapRelationType_1_5: state.setMapPersonRelationType.mapRelationType_1_5,
        mapRelationType_2_3: state.setMapPersonRelationType.mapRelationType_2_3,
        mapRelationType_2_4: state.setMapPersonRelationType.mapRelationType_2_4,
        mapRelationType_2_5: state.setMapPersonRelationType.mapRelationType_2_5,
        mapRelationType_3_4: state.setMapPersonRelationType.mapRelationType_3_4,
        mapRelationType_3_5: state.setMapPersonRelationType.mapRelationType_3_5,
        mapRelationType_4_5: state.setMapPersonRelationType.mapRelationType_4_5,



    }

}



export default connect(mapStateToProps,mapDispatchToProps)(CalcRelationButton)