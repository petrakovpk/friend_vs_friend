import React from 'react';
import {connect} from "react-redux";
import{
    changePersonBirthdayDay1,
    changePersonBirthdayDay2,
    changePersonBirthdayDay3,
    changePersonBirthdayDay4,
    changePersonBirthdayDay5
} from "../../../Actions/setPersonBirthday"
import {bindActionCreators} from 'redux'



class AirDatepicker extends React.Component {
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

                <div className="input-group mb-3">
                    <input type="text"
                           className="form-control"
                           placeholder="День"
                           onChange = {(e) => {
                             onChangeDay(personType, e.target.value)
                           }
                           }

                    />
                    <input type="text" className="form-control" placeholder="Месяц"/>
                    <input type="text" className="form-control" placeholder="Год"/>
                </div>

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

        personBirthdayDay_1: state.setPersonBirthdayReducer.personBirthdayDay_1,
         personBirthdayDay_2: state.setPersonBirthdayReducer.personBirthdayDay_2,
         personBirthdayDay_3: state.setPersonBirthdayReducer.personBirthdayDay_3,
         personBirthdayDay_4: state.setPersonBirthdayReducer.personBirthdayDay_4,
         personBirthdayDay_5: state.setPersonBirthdayReducer.personBirthdayDay_5
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AirDatepicker)