import React from 'react';
import {connect} from "react-redux";
import {changePersonName1,
    changePersonName2,
    changePersonName3,
    changePersonName4,
    changePersonName5} from "../../../Actions/setPersonName"
import {bindActionCreators} from 'redux'


class PersonName extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        const {personType, changePersonName1,changePersonName2} = this.props;

        const onChange = (personType, personName) => {

            switch (personType) {

                case "person1":
                    return changePersonName1(personName)

                case "person2":
                    return changePersonName2(personName)

                 case "person3":
                    return changePersonName2(personName)

                 case "person4":
                    return changePersonName2(personName)
                 case "person5":
                    return changePersonName2(personName)

            }
        }



        return(
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Имя</span>
                    </div>
                    <input type="text"
                           className="form-control"
                           aria-label="Sizing example input"
                           onChange = {(e) => {
                             onChange(personType, e.target.value)
                           }
                           }
                           aria-describedby="inputGroup-sizing-default">
                    </input>
                </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {

    return {
        changePersonName1: bindActionCreators(changePersonName1, dispatch),
        changePersonName2: bindActionCreators(changePersonName2, dispatch),



    }
}

const mapStateToProps = (state) => {

    return {
        personName_1: state.setPersonNameReducer.personName_1
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(PersonName)