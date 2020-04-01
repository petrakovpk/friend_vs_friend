import React from 'react';
import {connect} from "react-redux";
import CalcRelationButton from "../ButtonCalcHoroText"



class HoroMap extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){

        const {
            mapPersonName1,
            mapPersonName2,
            mapPersonName3,
            mapPersonName4,
            mapPersonName5,

            mapPersonBirthdayDay1,
            mapPersonBirthdayDay2,
            mapPersonBirthdayDay3,
            mapPersonBirthdayDay4,
            mapPersonBirthdayDay5,

            mapPersonBirthdayMonth1,
            mapPersonBirthdayMonth2,
            mapPersonBirthdayMonth3,
            mapPersonBirthdayMonth4,
            mapPersonBirthdayMonth5,

            mapPersonBirthdayYear1,
            mapPersonBirthdayYear2,
            mapPersonBirthdayYear3,
            mapPersonBirthdayYear4,
            mapPersonBirthdayYear5,

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

                <div>
                    Карта будет актуальна еще: 30 дней
                </div>
                <div>
                    {mapPersonName1}
                    {mapPersonBirthdayDay1}
                    {mapPersonBirthdayMonth1}
                    {mapPersonBirthdayYear1}
                    {personZodiacSign_1}
                </div>
                <div>
                    {mapPersonName2}
                    {mapPersonBirthdayDay2}
                    {mapPersonBirthdayMonth2}
                    {mapPersonBirthdayYear2}
                    {personZodiacSign_2}
                </div>
                <div>
                    {mapPersonName3}
                    {mapPersonBirthdayDay3}
                    {mapPersonBirthdayMonth3}
                    {mapPersonBirthdayYear3}
                    {personZodiacSign_3}
                </div>
                <div>
                    {mapPersonName4}
                    {mapPersonBirthdayDay4}
                    {mapPersonBirthdayMonth4}
                    {mapPersonBirthdayYear4}
                    {personZodiacSign_4}
                </div>
                <div>
                    {mapPersonName5}
                    {mapPersonBirthdayDay5}
                    {mapPersonBirthdayMonth5}
                    {mapPersonBirthdayYear5}
                    {personZodiacSign_5}
                </div>
                <div>
                    {mapRelationType_1_2}
                    {mapRelationType_1_3}
                    {mapRelationType_1_4}
                    {mapRelationType_1_5}
                </div>
                <div>
                    {mapRelationType_2_3}
                    {mapRelationType_2_4}
                    {mapRelationType_2_5}
                </div>
                <div>
                    {mapRelationType_3_4}
                    {mapRelationType_3_5}
                </div>
                <div>
                    {mapRelationType_4_5}
                </div>

                <div>
                    <CalcRelationButton relation_type="1-2"/>
                    <CalcRelationButton relation_type="1-3"/>
                    <CalcRelationButton relation_type="1-4"/>
                    <CalcRelationButton relation_type="1-5"/>
                </div>
                <div>
                    <CalcRelationButton relation_type="2-3"/>
                    <CalcRelationButton relation_type="2-4"/>
                    <CalcRelationButton relation_type="2-5"/>
                </div>
                <div>
                    <CalcRelationButton relation_type="3-4"/>
                    <CalcRelationButton relation_type="3-5"/>
                </div>
                <div>
                    <CalcRelationButton relation_type="4-5"/>
                </div>

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

        mapPersonBirthdayMonth1: state.setMapPersonBirthdayMonthReducer.mapPersonBirthdayMonth1,
        mapPersonBirthdayMonth2: state.setMapPersonBirthdayMonthReducer.mapPersonBirthdayMonth2,
        mapPersonBirthdayMonth3: state.setMapPersonBirthdayMonthReducer.mapPersonBirthdayMonth3,
        mapPersonBirthdayMonth4: state.setMapPersonBirthdayMonthReducer.mapPersonBirthdayMonth4,
        mapPersonBirthdayMonth5: state.setMapPersonBirthdayMonthReducer.mapPersonBirthdayMonth5,

        mapPersonBirthdayYear1: state.setMapPersonBirthdayYearReducer.mapPersonBirthdayYear1,
        mapPersonBirthdayYear2: state.setMapPersonBirthdayYearReducer.mapPersonBirthdayYear2,
        mapPersonBirthdayYear3: state.setMapPersonBirthdayYearReducer.mapPersonBirthdayYear3,
        mapPersonBirthdayYear4: state.setMapPersonBirthdayYearReducer.mapPersonBirthdayYear4,
        mapPersonBirthdayYear5: state.setMapPersonBirthdayYearReducer.mapPersonBirthdayYear5,

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