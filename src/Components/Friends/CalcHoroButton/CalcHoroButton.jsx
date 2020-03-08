import React from 'react';
import {connect} from "react-redux";
import {changeMapPersonName1,
    changeMapPersonName2,
    changeMapPersonName3,
    changeMapPersonName4,
    changeMapPersonName5} from "../../../Actions/setHoroMap"
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
            personName_1,
            personName_2,
            personName_3,
            personName_4,
            personName_5

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
                  }}

              >Рассчитать карту</button>
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
        changeMapPersonName5: bindActionCreators(changeMapPersonName5, dispatch)

    }
}

const mapStateToProps = (state) => {

    return{
        personName_1: state.setPersonNameReducer.personName_1,
        personName_2: state.setPersonNameReducer.personName_2,
        personName_3: state.setPersonNameReducer.personName_3,
        personName_4: state.setPersonNameReducer.personName_4,
        personName_5: state.setPersonNameReducer.personName_5,

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CalcHoroButton)