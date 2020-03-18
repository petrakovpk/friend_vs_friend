import React from 'react';
import ButtonCalcHazardText from "../ButtonCalcHazardText"
import {connect} from "react-redux";



class HazardMap extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {
            hazardPersonValue1,
            hazardPersonValue2,
            hazardPersonValue3,
            hazardPersonValue4,
            hazardPersonValue5,

        } = this.props

        return(
            <div>
                <p><ButtonCalcHazardText personType = "person1"/> {hazardPersonValue1}</p>
                <p><ButtonCalcHazardText personType = "person2"/>{hazardPersonValue2}</p>
                <p><ButtonCalcHazardText personType = "person3"/>{hazardPersonValue3}</p>
                <p><ButtonCalcHazardText personType = "person4"/>{hazardPersonValue4}</p>
                <p><ButtonCalcHazardText personType = "person5"/>{hazardPersonValue5}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {

        hazardPersonValue1: state.setHazardPersonValueReducer.hazardPersonValue1,
        hazardPersonValue2: state.setHazardPersonValueReducer.hazardPersonValue2,
        hazardPersonValue3: state.setHazardPersonValueReducer.hazardPersonValue3,
        hazardPersonValue4: state.setHazardPersonValueReducer.hazardPersonValue4,
        hazardPersonValue5: state.setHazardPersonValueReducer.hazardPersonValue5,


    }
}


export default connect(mapStateToProps)(HazardMap)