import React from "react";
import HazardMap from "./HazardMap"
import HazardText from "./HazardText"
import ButtonScrollToBuy from "./ButtonScrollToBuy"

class ContainerHazardMap extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {

        return (
            <div>
            <div className="row h-25">


                <div className="col-md-4 offset-2">

                    <HazardMap/>

                </div>

                <div className="col-md-4">

                    <HazardText/>

                </div>


            </div>

                <div className="text-center" >

                    <ButtonScrollToBuy/>

                </div>



            </div>


        )
    }
}

export default ContainerHazardMap