import React from 'react';
import PersonName from "./PersonName"
import CalcHoroButton from "./CalcHoroButton"
import HoroMap from "./HoroMap"
import AirDatepicker from "./PersonBirthDay"
import {connect} from "react-redux";
import PersonBirthDay from "./PersonBirthDay"


class Home extends React.Component {
    constructor(props) {
        super(props);

          }



        render()
        {


            return (

                <div className="container-fluid">

                    <div className="row h-25">

                        <div className="col-md-2 offset-3">

                            <PersonName personType="person1"/>

                        </div>

                        <div className="col-md-3">
                            <PersonBirthDay personType="person1"/>
                        </div>




                    </div>

                    <div className="row h-25">

                        <div className="col-md-2 offset-3">

                            <PersonName personType="person2"/>

                        </div>
                         <div className="col-md-3">
                            <PersonBirthDay personType="person2"/>
                        </div>


                    </div>

                    <div className="row h-25">

                        <div className="col-md-2 offset-3">

                            <PersonName personType="person3"/>

                        </div>

                         <div className="col-md-3">
                            <PersonBirthDay personType="person3"/>
                        </div>

                    </div>

                    <div className="row h-25">

                        <div className="col-md-2 offset-3">

                            <PersonName personType="person4"/>

                        </div>

                         <div className="col-md-3">
                            <PersonBirthDay personType="person4"/>
                        </div>

                    </div>

                    <div className="row h-25">

                        <div className="col-md-2 offset-3">

                            <PersonName personType="person5"/>

                        </div>

                         <div className="col-md-3">
                            <PersonBirthDay personType="person5"/>
                        </div>

                    </div>

                    <div className="row ">

                        <div className="col-md-2 offset-5">

                            <CalcHoroButton/>

                        </div>

                    </div>

                    <div className="row ">

                        <div className="col-md-4 offset-2">

                            <HoroMap/>

                        </div>

                        <div className="col-md-4" style={{backgroundColor: '#e6e6ff'}}>

                            Описание

                        </div>

                    </div>

                    <div className="row h-25">

                        <div className="col-md-2 offset-5">

                            <button
                                type="button"
                                className="btn btn-outline-secondary">Заказать карту опасностей
                            </button>

                        </div>

                    </div>


                </div>

            )

        }

}


export default Home