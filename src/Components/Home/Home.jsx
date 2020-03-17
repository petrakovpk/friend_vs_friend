import React from 'react';


import ContainerPersonData from "./ContainerPersonData"
import ContainerHoroMap from "./ContainerHoroMap"
import ContainerHazardMap from "./ContainerHazardMap"

class Home extends React.Component {
    constructor(props) {
        super(props);

          }



        render()
        {


            return (

                <div className="container-fluid">

                    <ContainerPersonData/>

                    <ContainerHoroMap/>

                    <ContainerHazardMap/>








                </div>

            )

        }

}


export default Home