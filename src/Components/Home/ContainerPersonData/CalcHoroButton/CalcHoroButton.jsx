import React from 'react';
import {connect} from "react-redux";
import {changeMapRelationType_1_2,
    changeMapRelationType_1_3,
    changeMapRelationType_1_4,
    changeMapRelationType_1_5,
    changeMapRelationType_2_3,
    changeMapRelationType_2_4,
    changeMapRelationType_2_5,
    changeMapRelationType_3_4,
    changeMapRelationType_3_5,
    changeMapRelationType_4_5

} from "../../../../Actions/setMapPersonRelationType"

import {changeMapPersonName1,
    changeMapPersonName2,
    changeMapPersonName3,
    changeMapPersonName4,
    changeMapPersonName5,


} from "../../../../Actions/setMapPersonName"

import {
    changeMapPersonBirthdayDay1,
    changeMapPersonBirthdayDay2,
    changeMapPersonBirthdayDay3,
    changeMapPersonBirthdayDay4,
    changeMapPersonBirthdayDay5

} from "../../../../Actions/setMapPersonBirthdayDay"

import {
    changeMapPersonBirthdayMonth1,
    changeMapPersonBirthdayMonth2,
    changeMapPersonBirthdayMonth3,
    changeMapPersonBirthdayMonth4,
    changeMapPersonBirthdayMonth5

} from "../../../../Actions/setMapPersonBirthdayMonth"

import {
    changeMapPersonBirthdayYear1,
    changeMapPersonBirthdayYear2,
    changeMapPersonBirthdayYear3,
    changeMapPersonBirthdayYear4,
    changeMapPersonBirthdayYear5

} from "../../../../Actions/setMapPersonBirthdayYear"

import {
    changePersonZodiacSign1,
    changePersonZodiacSign2,
    changePersonZodiacSign3,
    changePersonZodiacSign4,
    changePersonZodiacSign5
} from "../../../../Actions/setPersonZodiacSign"


import {bindActionCreators} from 'redux'


class CalcHoroButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {changeMapPersonName1,
            changeMapPersonName2,
            changeMapPersonName3,
            changeMapPersonName4,
            changeMapPersonName5,

            changeMapPersonBirthdayDay1,
            changeMapPersonBirthdayDay2,
            changeMapPersonBirthdayDay3,
            changeMapPersonBirthdayDay4,
            changeMapPersonBirthdayDay5,

            changeMapPersonBirthdayMonth1,
            changeMapPersonBirthdayMonth2,
            changeMapPersonBirthdayMonth3,
            changeMapPersonBirthdayMonth4,
            changeMapPersonBirthdayMonth5,

            changeMapPersonBirthdayYear1,
            changeMapPersonBirthdayYear2,
            changeMapPersonBirthdayYear3,
            changeMapPersonBirthdayYear4,
            changeMapPersonBirthdayYear5,

            changePersonZodiacSign1,
            changePersonZodiacSign2,
            changePersonZodiacSign3,
            changePersonZodiacSign4,
            changePersonZodiacSign5,

            changeMapRelationType_1_2,
            changeMapRelationType_1_3,
            changeMapRelationType_1_4,
            changeMapRelationType_1_5,
            changeMapRelationType_2_3,
            changeMapRelationType_2_4,
            changeMapRelationType_2_5,
            changeMapRelationType_3_4,
            changeMapRelationType_3_5,
            changeMapRelationType_4_5

            } = this.props

        const {

            personName_1,
            personName_2,
            personName_3,
            personName_4,
            personName_5,

            personBirthdayDay_1,
            personBirthdayDay_2,
            personBirthdayDay_3,
            personBirthdayDay_4,
            personBirthdayDay_5,

            personBirthdayMonth_1,
            personBirthdayMonth_2,
            personBirthdayMonth_3,
            personBirthdayMonth_4,
            personBirthdayMonth_5,

            personBirthdayYear_1,
            personBirthdayYear_2,
            personBirthdayYear_3,
            personBirthdayYear_4,
            personBirthdayYear_5


        } = this.props



        return(


            <div>
              <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => {
                      changeMapPersonName1(personName_1);
                      changeMapPersonName2(personName_2);
                      changeMapPersonName3(personName_3);
                      changeMapPersonName4(personName_4);
                      changeMapPersonName5(personName_5);

                      changeMapPersonBirthdayDay1(personBirthdayDay_1);
                      changeMapPersonBirthdayDay2(personBirthdayDay_2);
                      changeMapPersonBirthdayDay3(personBirthdayDay_3);
                      changeMapPersonBirthdayDay4(personBirthdayDay_4);
                      changeMapPersonBirthdayDay5(personBirthdayDay_5);

                      changeMapPersonBirthdayMonth1(personBirthdayMonth_1);
                      changeMapPersonBirthdayMonth2(personBirthdayMonth_2);
                      changeMapPersonBirthdayMonth3(personBirthdayMonth_3);
                      changeMapPersonBirthdayMonth4(personBirthdayMonth_4);
                      changeMapPersonBirthdayMonth5(personBirthdayMonth_5);

                      changeMapPersonBirthdayYear1(personBirthdayYear_1);
                      changeMapPersonBirthdayYear2(personBirthdayYear_2);
                      changeMapPersonBirthdayYear3(personBirthdayYear_3);
                      changeMapPersonBirthdayYear4(personBirthdayYear_4);
                      changeMapPersonBirthdayYear5(personBirthdayYear_5);

                      changePersonZodiacSign1(personBirthdayDay_1);
                      changePersonZodiacSign2(personBirthdayDay_2);
                      changePersonZodiacSign3(personBirthdayDay_3);
                      changePersonZodiacSign4(personBirthdayDay_4);
                      changePersonZodiacSign5(personBirthdayDay_5);

                      changeMapRelationType_1_2('Заинтересованность')
                      changeMapRelationType_1_3('Потенциальный конфликт')
                      changeMapRelationType_1_4('Обычные отношения')
                      changeMapRelationType_1_5('Дистанцированность')
                      changeMapRelationType_2_3('Заинтересованность')
                      changeMapRelationType_2_4('Обычные отношения')
                      changeMapRelationType_2_5('Дистанцированность')
                      changeMapRelationType_3_4('Дистанцированность')
                      changeMapRelationType_3_5('Потенциальный конфликт')
                      changeMapRelationType_4_5('Потенциальный конфликт')

                  }}

              >Рассчитать карту отношений</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        changeMapPersonName1: bindActionCreators(changeMapPersonName1, dispatch),
        changeMapPersonName2: bindActionCreators(changeMapPersonName2, dispatch),
        changeMapPersonName3: bindActionCreators(changeMapPersonName3, dispatch),
        changeMapPersonName4: bindActionCreators(changeMapPersonName4, dispatch),
        changeMapPersonName5: bindActionCreators(changeMapPersonName5, dispatch),

        changeMapPersonBirthdayDay1: bindActionCreators(changeMapPersonBirthdayDay1,dispatch),
        changeMapPersonBirthdayDay2: bindActionCreators(changeMapPersonBirthdayDay2,dispatch),
        changeMapPersonBirthdayDay3: bindActionCreators(changeMapPersonBirthdayDay3,dispatch),
        changeMapPersonBirthdayDay4: bindActionCreators(changeMapPersonBirthdayDay4,dispatch),
        changeMapPersonBirthdayDay5: bindActionCreators(changeMapPersonBirthdayDay5,dispatch),

        changeMapPersonBirthdayMonth1: bindActionCreators(changeMapPersonBirthdayMonth1,dispatch),
        changeMapPersonBirthdayMonth2: bindActionCreators(changeMapPersonBirthdayMonth2,dispatch),
        changeMapPersonBirthdayMonth3: bindActionCreators(changeMapPersonBirthdayMonth3,dispatch),
        changeMapPersonBirthdayMonth4: bindActionCreators(changeMapPersonBirthdayMonth4,dispatch),
        changeMapPersonBirthdayMonth5: bindActionCreators(changeMapPersonBirthdayMonth5,dispatch),


        changeMapPersonBirthdayYear1: bindActionCreators(changeMapPersonBirthdayYear1,dispatch),
        changeMapPersonBirthdayYear2: bindActionCreators(changeMapPersonBirthdayYear2,dispatch),
        changeMapPersonBirthdayYear3: bindActionCreators(changeMapPersonBirthdayYear3,dispatch),
        changeMapPersonBirthdayYear4: bindActionCreators(changeMapPersonBirthdayYear4,dispatch),
        changeMapPersonBirthdayYear5: bindActionCreators(changeMapPersonBirthdayYear5,dispatch),


        changePersonZodiacSign1: bindActionCreators(changePersonZodiacSign1,dispatch),
        changePersonZodiacSign2: bindActionCreators(changePersonZodiacSign2,dispatch),
        changePersonZodiacSign3: bindActionCreators(changePersonZodiacSign3,dispatch),
        changePersonZodiacSign4: bindActionCreators(changePersonZodiacSign4,dispatch),
        changePersonZodiacSign5: bindActionCreators(changePersonZodiacSign5,dispatch),


        changeMapRelationType_1_2: bindActionCreators(changeMapRelationType_1_2,dispatch),
        changeMapRelationType_1_3: bindActionCreators(changeMapRelationType_1_3,dispatch),
        changeMapRelationType_1_4: bindActionCreators(changeMapRelationType_1_4,dispatch),
        changeMapRelationType_1_5: bindActionCreators(changeMapRelationType_1_5,dispatch),
        changeMapRelationType_2_3: bindActionCreators(changeMapRelationType_2_3,dispatch),
        changeMapRelationType_2_4: bindActionCreators(changeMapRelationType_2_4,dispatch),
        changeMapRelationType_2_5: bindActionCreators(changeMapRelationType_2_5,dispatch),
        changeMapRelationType_3_4: bindActionCreators(changeMapRelationType_3_4,dispatch),
        changeMapRelationType_3_5: bindActionCreators(changeMapRelationType_3_5,dispatch),
        changeMapRelationType_4_5: bindActionCreators(changeMapRelationType_4_5,dispatch),


    }
}

const mapStateToProps = (state) => {

    return{
        personName_1: state.setPersonNameReducer.personName_1,
        personName_2: state.setPersonNameReducer.personName_2,
        personName_3: state.setPersonNameReducer.personName_3,
        personName_4: state.setPersonNameReducer.personName_4,
        personName_5: state.setPersonNameReducer.personName_5,

        personBirthdayDay_1: state.setPersonBirthdayDayReducer.personBirthdayDay_1,
        personBirthdayDay_2: state.setPersonBirthdayDayReducer.personBirthdayDay_2,
        personBirthdayDay_3: state.setPersonBirthdayDayReducer.personBirthdayDay_3,
        personBirthdayDay_4: state.setPersonBirthdayDayReducer.personBirthdayDay_4,
        personBirthdayDay_5: state.setPersonBirthdayDayReducer.personBirthdayDay_5,

        personBirthdayMonth_1: state.setPersonBirthdayMonthReducer.personBirthdayMonth_1,
        personBirthdayMonth_2: state.setPersonBirthdayMonthReducer.personBirthdayMonth_2,
        personBirthdayMonth_3: state.setPersonBirthdayMonthReducer.personBirthdayMonth_3,
        personBirthdayMonth_4: state.setPersonBirthdayMonthReducer.personBirthdayMonth_4,
        personBirthdayMonth_5: state.setPersonBirthdayMonthReducer.personBirthdayMonth_5,

        personBirthdayYear_1: state.setPersonBirthdayYearReducer.personBirthdayYear_1,
        personBirthdayYear_2: state.setPersonBirthdayYearReducer.personBirthdayYear_2,
        personBirthdayYear_3: state.setPersonBirthdayYearReducer.personBirthdayYear_3,
        personBirthdayYear_4: state.setPersonBirthdayYearReducer.personBirthdayYear_4,
        personBirthdayYear_5: state.setPersonBirthdayYearReducer.personBirthdayYear_5,





    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CalcHoroButton)