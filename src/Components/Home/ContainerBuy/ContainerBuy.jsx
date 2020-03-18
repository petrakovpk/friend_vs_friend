import React from 'react'
import ModalBuyFullHazard from "./ModalBuyFullHazard";

import {connect} from "react-redux"
import {bindActionCreators} from 'redux'

class ContainerBuy extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return(

            <div className="row h-25">
                <div className="col-md-4 offset-4 text-center">
                    <ModalBuyFullHazard/>
                </div>
            </div>

        )
    }
}

export default ContainerBuy
