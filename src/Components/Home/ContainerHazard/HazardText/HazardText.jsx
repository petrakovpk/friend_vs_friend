import React from 'react';
import {connect} from "react-redux";




class HazardText extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {
            hazardHeader,
            hazardText

        } = this.props

        return(
            <div>
                <p>
                    {hazardHeader}
                </p>

                <p>
                    {hazardText}
                </p>

            </div>
        )
    }
}

const mapStateToProps = (state) => {


    return {

        hazardHeader: state.setHazardHeaderReducer.hazardHeader,
        hazardText: state.setHazardTextReducer.hazardText,

    }
}


export default connect(mapStateToProps)(HazardText)