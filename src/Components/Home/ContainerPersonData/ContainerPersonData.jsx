import React from 'react';
import PersonBirthdayDay from "./PersonBirthdayDay"
import PersonBirthdayMonth from "./PersonBirthdayMonth"
import PersonBirthdayYear from "./PersonBirthdayYear"
import PersonName from "./PersonName"
import CalcHoroButton from "./CalcHoroButton";


class ContainerPersonData extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {

        return (


             <div className="container-fluid">

                    <div className="row h-25">

                        <div className="col-md-2 offset-3">

                            <PersonName personType="person1"/>

                        </div>

                       <div className="col-md-3">
                              <div className="input-group mb-3">
                                <PersonBirthdayDay personType="person1"/>
                                <PersonBirthdayMonth personType="person1"/>
                                <PersonBirthdayYear personType="person1"/>
                             </div>

                        </div>

                    </div>

                    <div className="row h-25">

                        <div className="col-md-2 offset-3">

                            <PersonName personType="person2"/>

                        </div>
                         <div className="col-md-3">
                              <div className="input-group mb-3">
                                <PersonBirthdayDay personType="person2"/>
                                <PersonBirthdayMonth personType="person2"/>
                                <PersonBirthdayYear personType="person2"/>
                             </div>

                        </div>


                    </div>

                    <div className="row h-25">

                        <div className="col-md-2 offset-3">

                            <PersonName personType="person3"/>

                        </div>

                         <div className="col-md-3">
                              <div className="input-group mb-3">
                                <PersonBirthdayDay personType="person3"/>
                                <PersonBirthdayMonth personType="person3"/>
                                 <PersonBirthdayYear personType="person3"/>

                             </div>

                        </div>

                    </div>

                    <div className="row h-25">

                        <div className="col-md-2 offset-3">

                            <PersonName personType="person4"/>

                        </div>

                         <div className="col-md-3">
                              <div className="input-group mb-3">
                                <PersonBirthdayDay personType="person4"/>
                                <PersonBirthdayMonth personType="person4"/>
                                 <PersonBirthdayYear personType="person4"/>

                             </div>

                        </div>
                    </div>

                    <div className="row h-25">

                        <div className="col-md-2 offset-3">

                            <PersonName personType="person5"/>

                        </div>

                         <div className="col-md-3">
                              <div className="input-group mb-3">
                                <PersonBirthdayDay personType="person5"/>
                                <PersonBirthdayMonth personType="person5"/>
                                 <PersonBirthdayYear personType="person5"/>

                             </div>

                        </div>
                    </div>

                    <div className="row ">

                        <div className="col-md-4 offset-4 text-center">

                            <CalcHoroButton/>

                        </div>

                    </div>
             </div>
        )
    }

}

export default ContainerPersonData
