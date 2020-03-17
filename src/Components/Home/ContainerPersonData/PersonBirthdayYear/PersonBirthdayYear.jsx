import React from 'react';
import {connect} from "react-redux";
import{
    changePersonBirthdayYear1,
    changePersonBirthdayYear2,
    changePersonBirthdayYear3,
    changePersonBirthdayYear4,
    changePersonBirthdayYear5
} from "../../../../Actions/setPersonBirthdayYear"
import {bindActionCreators} from 'redux'



class PersonBirthdayYear extends React.Component {
     constructor(props) {
        super(props);

  }

    render() {

         const {personType,
            changePersonBirthdayYear1,
            changePersonBirthdayYear2,
            changePersonBirthdayYear3,
            changePersonBirthdayYear4,
            changePersonBirthdayYear5} = this.props;

         const onChangeYear = (personType, personBirthdayYear) => {

            switch (personType) {

                case "person1":
                    return changePersonBirthdayYear1(personBirthdayYear)

                case "person2":
                    return changePersonBirthdayYear2(personBirthdayYear)

                 case "person3":
                    return changePersonBirthdayYear3(personBirthdayYear)

                 case "person4":
                    return changePersonBirthdayYear4(personBirthdayYear)

                case "person5":
                    return changePersonBirthdayYear5(personBirthdayYear)

            }
        }


        return (

                    <input type="text"
                           className="form-control"
                           placeholder="Год"
                           onChange = {(e) => {
                             onChangeYear(personType, e.target.value)
                           }
                           }

                    />


    );
  }
}

const mapDispatchToProps = (dispatch) => {

    return {
        changePersonBirthdayYear1: bindActionCreators(changePersonBirthdayYear1, dispatch),
        changePersonBirthdayYear2: bindActionCreators(changePersonBirthdayYear2, dispatch),
        changePersonBirthdayYear3: bindActionCreators(changePersonBirthdayYear3, dispatch),
        changePersonBirthdayYear4: bindActionCreators(changePersonBirthdayYear4, dispatch),
        changePersonBirthdayYear5: bindActionCreators(changePersonBirthdayYear5, dispatch),

    }
}

const mapStateToProps = (state) => {

    return{

        personBirthdayYear_1: state.setPersonBirthdayYearReducer.personBirthdayYear_1,
         personBirthdayYear_2: state.setPersonBirthdayYearReducer.personBirthdayYear_2,
         personBirthdayYear_3: state.setPersonBirthdayYearReducer.personBirthdayYear_3,
         personBirthdayYear_4: state.setPersonBirthdayYearReducer.personBirthdayYear_4,
         personBirthdayYear_5: state.setPersonBirthdayYearReducer.personBirthdayYear_5
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PersonBirthdayYear)