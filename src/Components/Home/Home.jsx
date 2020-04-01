import React from 'react';


import ContainerPersonData from "./ContainerPerson"
import ContainerHoroMap from "./ContainerHoro"
import ContainerHazardMap from "./ContainerHazard"
import ContainerBuy from "./ContainerBuy"

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

                    <ContainerBuy/>



                </div>

            )

        }

}


export default Home