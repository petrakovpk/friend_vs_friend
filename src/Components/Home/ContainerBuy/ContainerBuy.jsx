import React from 'react'
import ButtonModalBuyProduct1 from "./ButtonModalBuyProduct1";
import ButtonModalBuyProduct2 from "./ButtonModalBuyProduct2";
import ButtonModalBuyProduct3 from "./ButtonModalBuyProduct3";

import {connect} from "react-redux"
import {bindActionCreators} from 'redux'
import Product1 from "./Product1";
import Product2 from "./Product2";
import Product3 from "./Product3";


class ContainerBuy extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return(

            <div>

                 <div className="row">

                     <div className="col-md-2 offset-2 text-center">
                         <Product1/>
                         <ButtonModalBuyProduct1/>

                     </div>

                     <div className="col-md-2 text-center">
                         <Product2/>
                         <ButtonModalBuyProduct2/>
                     </div>

                     <div className="col-md-4 text-center">
                         <Product3/>
                         <ButtonModalBuyProduct3/>
                     </div>

                 </div>

            <div className="row h-25">
                <div className="col-md-4 offset-4 text-center">

                </div>
            </div>

                </div>

        )
    }
}

export default ContainerBuy
