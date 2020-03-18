import React from 'react';
import {connect} from "react-redux";

class RelationText extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {
            mapRelationHeader,
            mapRelationText
        } = this.props



        return (
            <div>
                <p>{mapRelationHeader}</p>
                <p>{mapRelationText}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mapRelationText: state.setMapRelationText.mapRelationText,
        mapRelationHeader: state.setMapRelationHeader.mapRelationHeader,

    }

}

export default connect(mapStateToProps)(RelationText)