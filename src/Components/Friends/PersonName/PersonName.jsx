import React from 'react';
import {connect} from "react-redux";
import {changePersonName1} from "../../../Actions/setPersonName"
import {bindActionCreators} from 'redux'


class PersonName extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        const {personName_1, changePersonName1} = this.props;



        return(
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Имя</span>
                    </div>
                    <input type="text"
                           className="form-control"
                           aria-label="Sizing example input"
                           onChange = {(e,data) => {
                               changePersonName1(e.target.value)
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
        changePersonName1: bindActionCreators(changePersonName1, dispatch)

    }
}

const mapStateToProps = (state) => {

    return {
        personName_1: state.setPersonNameReducer.personName_1
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(PersonName)