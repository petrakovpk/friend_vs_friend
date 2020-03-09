import React from 'react';
import {connect} from "react-redux";


class HoroMap extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){

        const {mapPersonName1,mapPersonName2,mapPersonName3,mapPersonName4,mapPersonName5} = this.props

        return (
            <div>
                <p>{mapPersonName1}</p>
                 <p>{mapPersonName2}</p>
                 <p>{mapPersonName3}</p>
                 <p>{mapPersonName4}</p>
                 <p>{mapPersonName5}</p>
            </div>
        )
    }

}

const mapStateToProps = (state) => {

    return{

        mapPersonName1: state.setHoroMapReducer.mapPersonName1,
         mapPersonName2: state.setHoroMapReducer.mapPersonName2,
         mapPersonName3: state.setHoroMapReducer.mapPersonName3,
         mapPersonName4: state.setHoroMapReducer.mapPersonName4,
         mapPersonName5: state.setHoroMapReducer.mapPersonName5
    }
}


export default connect(mapStateToProps)(HoroMap)