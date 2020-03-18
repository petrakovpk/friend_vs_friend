import React from "react";
import HoroMap from "./HoroMap"
import RelationText from "./HoroText"
import ButtonCalcHazardMap from "./ButtonCalcHazardMap"

class ContainerHoroMap extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {

        return (
            <div>
            <div className="row ">

                        <div className="col-md-4 offset-2">

                            <HoroMap/>

                        </div>

                        <div className="col-md-4" style={{backgroundColor: '#e6e6ff'}}>

                            <RelationText/>

                        </div>


                    </div>

                <div className="row h-25">

                        <div className="col-md-4 offset-4 text-center">

                           <ButtonCalcHazardMap/>

                        </div>

                    </div>


            </div>
        )
    }
}

export default ContainerHoroMap