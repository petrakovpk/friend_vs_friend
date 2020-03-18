import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux'

import {changeHazardPersonName1,
    changeHazardPersonName2,
    changeHazardPersonName3,
    changeHazardPersonName4,
    changeHazardPersonName5,


} from "../../../../Actions/Hazard/setHazardPersonName"


import {changeHazardPersonValue1,
    changeHazardPersonValue2,
    changeHazardPersonValue3,
    changeHazardPersonValue4,
    changeHazardPersonValue5,


} from "../../../../Actions/Hazard/setHazardPersonValue"

class ButtonCalcHazardMap extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {
            changeHazardPersonName1,
            changeHazardPersonName2,
            changeHazardPersonName3,
            changeHazardPersonName4,
            changeHazardPersonName5,

            changeHazardPersonValue1,
            changeHazardPersonValue2,
            changeHazardPersonValue3,
            changeHazardPersonValue4,
            changeHazardPersonValue5,

        } = this.props

        const {
            mapPersonName1,
            mapPersonName2,
            mapPersonName3,
            mapPersonName4,
            mapPersonName5,

        } = this.props



        return(
             <button
                 type="button"
                 className="btn btn-outline-secondary"

                 onClick={() => {

                     changeHazardPersonName1(mapPersonName1);
                         changeHazardPersonName2(mapPersonName2);
                         changeHazardPersonName3(mapPersonName3);
                         changeHazardPersonName4(mapPersonName4);
                         changeHazardPersonName5(mapPersonName5);

                         changeHazardPersonValue1(5);
                 }}

             >

                 Рассчитать карту опасностей

             </button>

        )
    }





}


const mapDispatchToProps = (dispatch) => {

    return {
        changeHazardPersonName1: bindActionCreators(changeHazardPersonName1, dispatch),
        changeHazardPersonName2: bindActionCreators(changeHazardPersonName2, dispatch),
        changeHazardPersonName3: bindActionCreators(changeHazardPersonName3, dispatch),
        changeHazardPersonName4: bindActionCreators(changeHazardPersonName4, dispatch),
        changeHazardPersonName5: bindActionCreators(changeHazardPersonName5, dispatch),

        changeHazardPersonValue1: bindActionCreators(changeHazardPersonValue1, dispatch),
        changeHazardPersonValue2: bindActionCreators(changeHazardPersonValue2, dispatch),
        changeHazardPersonValue3: bindActionCreators(changeHazardPersonValue3, dispatch),
        changeHazardPersonValue4: bindActionCreators(changeHazardPersonValue4, dispatch),
        changeHazardPersonValue5: bindActionCreators(changeHazardPersonValue5, dispatch),


    }
}


const mapStateToProps = (state) => {

    return {

        mapPersonName1: state.setMapPersonNameReducer.mapPersonName1,
        mapPersonName2: state.setMapPersonNameReducer.mapPersonName2,
        mapPersonName3: state.setMapPersonNameReducer.mapPersonName3,
        mapPersonName4: state.setMapPersonNameReducer.mapPersonName4,
        mapPersonName5: state.setMapPersonNameReducer.mapPersonName5,


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonCalcHazardMap)