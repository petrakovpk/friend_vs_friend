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
            personZodiacSign_3,
            personZodiacSign_4,
            personZodiacSign_5,
            mapRelationType_1_2,
            mapRelationType_1_3,
            mapRelationType_1_4,
            mapRelationType_1_5,
            mapRelationType_2_3,
            mapRelationType_2_4,
            mapRelationType_2_5,
            mapRelationType_3_4,
            mapRelationType_3_5,
            mapRelationType_4_5,



        } = this.props;

        return (
            <div>
                <p>
                    {mapPersonName1}
                    {mapPersonBirthdayDay1}
                    {personZodiacSign_1}
                    {mapRelationType_1_2}
                    {mapRelationType_1_3}
                    {mapRelationType_1_4}
                    {mapRelationType_1_5}
                </p>

                <p>
                     {mapPersonName2}
                     {mapPersonBirthdayDay2}
                     {personZodiacSign_2}
                     {mapRelationType_2_3}
                     {mapRelationType_2_4}
                     {mapRelationType_2_5}
                </p>

                <p>
                     {mapPersonName3}
                     {mapPersonBirthdayDay3}
                     {personZodiacSign_3}
                     {mapRelationType_3_4}
                     {mapRelationType_3_5}
                 </p>

                <p>
                     {mapPersonName4}
                     {mapPersonBirthdayDay4}
                     {personZodiacSign_4}
                     {mapRelationType_4_5}
                 </p>

                <p>
                    {mapPersonName5}
                    {mapPersonBirthdayDay5}
                    {personZodiacSign_5}
                </p>

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

        mapPersonBirthdayDay1: state.setMapPersonBirthdayDayReducer.mapPersonBirthdayDay1,
        mapPersonBirthdayDay2: state.setMapPersonBirthdayDayReducer.mapPersonBirthdayDay2,
        mapPersonBirthdayDay3: state.setMapPersonBirthdayDayReducer.mapPersonBirthdayDay3,
        mapPersonBirthdayDay4: state.setMapPersonBirthdayDayReducer.mapPersonBirthdayDay4,
        mapPersonBirthdayDay5: state.setMapPersonBirthdayDayReducer.mapPersonBirthdayDay5,

        personZodiacSign_1: state.setPersonZodiacSignReducer.personZodiacSign_1,
        personZodiacSign_2: state.setPersonZodiacSignReducer.personZodiacSign_2,
        personZodiacSign_3: state.setPersonZodiacSignReducer.personZodiacSign_3,
        personZodiacSign_4: state.setPersonZodiacSignReducer.personZodiacSign_4,
        personZodiacSign_5: state.setPersonZodiacSignReducer.personZodiacSign_5,

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


export default connect(mapStateToProps)(HoroMap)