import React from "react";
import HoroMap from "./HoroMap"


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

                            Описание

                        </div>


                    </div>

                <div className="row h-25">

                        <div className="col-md-4 offset-4 text-center">

                            <button
                                type="button"
                                className="btn btn-outline-secondary">Рассчитать карту опасностей
                            </button>

                        </div>

                    </div>


            </div>
        )
    }
}

export default ContainerHoroMap