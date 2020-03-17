import React from "react";
import HazardMap from "./HazardMap"

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

                            kek

                        </div>
            </div>





                    <div className="row h-25">

                        <div className="col-md-4 offset-4 text-center">

                            <button
                                type="button"
                                className="btn btn-outline-secondary">
                                Открыть всю карту
                            </button>

                        </div>

                    </div>
            </div>


        )
    }
}

export default ContainerHazardMap