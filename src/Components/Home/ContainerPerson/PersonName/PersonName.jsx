import React from 'react';
import {connect} from "react-redux";
import {changePersonName1,
    changePersonName2,
    changePersonName3,
    changePersonName4,
    changePersonName5} from "../../../../Actions/Person/setPersonName"
import {bindActionCreators} from 'redux'


class PersonName extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        const {
            changePersonName1,
            changePersonName2,
            changePersonName3,
            changePersonName4,
            changePersonName5} = this.props;

        const {
            personType,
            personName_1,
            personName_2,
            personName_3,
            personName_4,
            personName_5


        } = this.props

        const onChange = (personType, personName) => {

            switch (personType) {

                case "person1":
                    return changePersonName1(personName)

                case "person2":
                    return changePersonName2(personName)

                 case "person3":
                    return changePersonName3(personName)

                 case "person4":
                    return changePersonName4(personName)

                case "person5":
                    return changePersonName5(personName)

            }
        }

        const getPersonName = (personType) => {
            switch (personType) {

                case "person1":
                    return personName_1

                case "person2":
                    return personName_2

                case "person3":
                    return personName_3

                case "person4":
                    return personName_4

                case "person5":
                    return personName_5


            }
        }





        return(
                <div className="input-group mb-3">
                    <input type="text"
                           className="form-control"
                           placeholder="Имя"

                           value = {getPersonName(personType)}


                           onChange = {(e) => {
                             onChange(personType, e.target.value)
                           }
                           }
                           >
                    </input>
                </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {

    return {
        changePersonName1: bindActionCreators(changePersonName1, dispatch),
        changePersonName2: bindActionCreators(changePersonName2, dispatch),
         changePersonName3: bindActionCreators(changePersonName3, dispatch),
         changePersonName4: bindActionCreators(changePersonName4, dispatch),
         changePersonName5: bindActionCreators(changePersonName5, dispatch),



    }
}

const mapStateToProps = (state) => {

    return {
        personName_1: state.setPersonNameReducer.personName_1,
        personName_2: state.setPersonNameReducer.personName_2,
        personName_3: state.setPersonNameReducer.personName_3,
        personName_4: state.setPersonNameReducer.personName_4,
        personName_5: state.setPersonNameReducer.personName_5
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(PersonName)