import React from 'react';
import {connect} from "react-redux";
import{
    changePersonBirthdayDay1,
    changePersonBirthdayDay2,
    changePersonBirthdayDay3,
    changePersonBirthdayDay4,
    changePersonBirthdayDay5
} from "../../../../Actions/setPersonBirthdayDay"
import {bindActionCreators} from 'redux'



class PersonBirthdayDay extends React.Component {
     constructor(props) {
        super(props);

  }

    render() {

         const {personType,
            changePersonBirthdayDay1,
            changePersonBirthdayDay2,
            changePersonBirthdayDay3,
            changePersonBirthdayDay4,
            changePersonBirthdayDay5} = this.props;

         const onChangeDay = (personType, personBirthdayDay) => {

            switch (personType) {

                case "person1":
                    return changePersonBirthdayDay1(personBirthdayDay)

                case "person2":
                    return changePersonBirthdayDay2(personBirthdayDay)

                 case "person3":
                    return changePersonBirthdayDay3(personBirthdayDay)

                 case "person4":
                    return changePersonBirthdayDay4(personBirthdayDay)

                case "person5":
                    return changePersonBirthdayDay5(personBirthdayDay)

            }
        }


        return (


                    <input type="text"
                           className="form-control"

                           placeholder="День"
                           onChange = {(e) => {
                             onChangeDay(personType, e.target.value)
                           }
                           }

                    />


    );
  }
}

const mapDispatchToProps = (dispatch) => {

    return {
        changePersonBirthdayDay1: bindActionCreators(changePersonBirthdayDay1, dispatch),
        changePersonBirthdayDay2: bindActionCreators(changePersonBirthdayDay2, dispatch),
        changePersonBirthdayDay3: bindActionCreators(changePersonBirthdayDay3, dispatch),
        changePersonBirthdayDay4: bindActionCreators(changePersonBirthdayDay4, dispatch),
        changePersonBirthdayDay5: bindActionCreators(changePersonBirthdayDay5, dispatch),



    }
}

const mapStateToProps = (state) => {

    return{

        personBirthdayDay_1: state.setPersonBirthdayDayReducer.personBirthdayDay_1,
         personBirthdayDay_2: state.setPersonBirthdayDayReducer.personBirthdayDay_2,
         personBirthdayDay_3: state.setPersonBirthdayDayReducer.personBirthdayDay_3,
         personBirthdayDay_4: state.setPersonBirthdayDayReducer.personBirthdayDay_4,
         personBirthdayDay_5: state.setPersonBirthdayDayReducer.personBirthdayDay_5
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PersonBirthdayDay)