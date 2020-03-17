import React from 'react';
import {connect} from "react-redux";
import{
    changePersonBirthdayMonth1,
    changePersonBirthdayMonth2,
    changePersonBirthdayMonth3,
    changePersonBirthdayMonth4,
    changePersonBirthdayMonth5
} from "../../../../Actions/setPersonBirthdayMonth"
import {bindActionCreators} from 'redux'



class PersonBirthdayMonth extends React.Component {
     constructor(props) {
        super(props);

  }

    render() {

         const {personType,
            changePersonBirthdayMonth1,
            changePersonBirthdayMonth2,
            changePersonBirthdayMonth3,
            changePersonBirthdayMonth4,
            changePersonBirthdayMonth5} = this.props;

         const onChangeMonth = (personType, personBirthdayMonth) => {

            switch (personType) {

                case "person1":
                    return changePersonBirthdayMonth1(personBirthdayMonth)

                case "person2":
                    return changePersonBirthdayMonth2(personBirthdayMonth)

                 case "person3":
                    return changePersonBirthdayMonth3(personBirthdayMonth)

                 case "person4":
                    return changePersonBirthdayMonth4(personBirthdayMonth)

                case "person5":
                    return changePersonBirthdayMonth5(personBirthdayMonth)

            }
        }


        return (


                    <input type="text"
                           className="form-control"

                           placeholder="Месяц"
                           onChange = {(e) => {
                             onChangeMonth(personType, e.target.value)
                           }
                           }

                    />

    );
  }
}

const mapDispatchToProps = (dispatch) => {

    return {
        changePersonBirthdayMonth1: bindActionCreators(changePersonBirthdayMonth1, dispatch),
        changePersonBirthdayMonth2: bindActionCreators(changePersonBirthdayMonth2, dispatch),
        changePersonBirthdayMonth3: bindActionCreators(changePersonBirthdayMonth3, dispatch),
        changePersonBirthdayMonth4: bindActionCreators(changePersonBirthdayMonth4, dispatch),
        changePersonBirthdayMonth5: bindActionCreators(changePersonBirthdayMonth5, dispatch),



    }
}

const mapStateToProps = (state) => {

    return{

        personBirthdayMonth_1: state.setPersonBirthdayMonthReducer.personBirthdayMonth_1,
         personBirthdayMonth_2: state.setPersonBirthdayMonthReducer.personBirthdayMonth_2,
         personBirthdayMonth_3: state.setPersonBirthdayMonthReducer.personBirthdayMonth_3,
         personBirthdayMonth_4: state.setPersonBirthdayMonthReducer.personBirthdayMonth_4,
         personBirthdayMonth_5: state.setPersonBirthdayMonthReducer.personBirthdayMonth_5
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PersonBirthdayMonth)