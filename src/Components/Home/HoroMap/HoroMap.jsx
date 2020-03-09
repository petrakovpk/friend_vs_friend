import React from 'react';
import {connect} from "react-redux";


class HoroMap extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){

        const {mapPersonName1,
            mapPersonName2,
            mapPersonName3,
            mapPersonName4,
            mapPersonName5,
            mapPersonBirthdayDay1,
            mapPersonBirthdayDay2,
            mapPersonBirthdayDay3,
            mapPersonBirthdayDay4,
            mapPersonBirthdayDay5,
            personZodiacSign_1,
            personZodiacSign_2,
            mapRelationType_1_2,
            mapRelationType_1_3


        } = this.props

        return (
            <div>
                <p>{mapPersonName1}  {mapPersonBirthdayDay1} {personZodiacSign_1} {mapRelationType_1_2} {mapRelationType_1_3}</p>
                 <p>{mapPersonName2} {mapPersonBirthdayDay2} {personZodiacSign_2}</p>
                 <p>{mapPersonName3} {mapPersonBirthdayDay3}</p>
                 <p>{mapPersonName4} {mapPersonBirthdayDay4}</p>
                 <p>{mapPersonName5} {mapPersonBirthdayDay5}</p>
            </div>
        )
    }

}

const mapStateToProps = (state) => {


    return{

        mapPersonName1: state.setMapPersonNameReducer.mapPersonName1,
         mapPersonName2: state.setMapPersonNameReducer.mapPersonName2,
         mapPersonName3: state.setMapPersonNameReducer.mapPersonName3,
         mapPersonName4: state.setMapPersonNameReducer.mapPersonName4,
         mapPersonName5: state.setMapPersonNameReducer.mapPersonName5,

        mapPersonBirthdayDay1: state.setMapPersonBirthdayReducer.mapPersonBirthdayDay1,
        mapPersonBirthdayDay2: state.setMapPersonBirthdayReducer.mapPersonBirthdayDay2,
        mapPersonBirthdayDay3: state.setMapPersonBirthdayReducer.mapPersonBirthdayDay3,
        mapPersonBirthdayDay4: state.setMapPersonBirthdayReducer.mapPersonBirthdayDay4,
        mapPersonBirthdayDay5: state.setMapPersonBirthdayReducer.mapPersonBirthdayDay5,

        personZodiacSign_1: state.setPersonZodiacSignReducer.personZodiacSign_1,
        personZodiacSign_2: state.setPersonZodiacSignReducer.personZodiacSign_2,

        mapRelationType_1_2: state.setMapPersonRelationType.mapRelationType_1_2,
        mapRelationType_1_3: state.setMapPersonRelationType.mapRelationType_1_3,
    }
}


export default connect(mapStateToProps)(HoroMap)