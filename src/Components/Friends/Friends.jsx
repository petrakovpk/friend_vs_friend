import React from 'react';
import {connect} from "react-redux";


class Friends extends React.Component{
    constructor(props) {
        super(props);
    }


    render() {


        return(

            <div className="container-fluid">
                <div className="row h-25">

                    <div className="col-md-2 offset-md-2">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Имя</span>
                            </div>
                            <input type="text" className="form-control" aria-label="Sizing example input"
                                   aria-describedby="inputGroup-sizing-default">
                            </input>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Дата рождения</span>
                            </div>
                            <input type="text" className="form-control" aria-label="Sizing example input"
                                   aria-describedby="inputGroup-sizing-default">
                            </input>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Кто</span>
                            </div>
                            <input type="text" className="form-control" aria-label="Sizing example input"
                                   aria-describedby="inputGroup-sizing-default">
                            </input>
                        </div>
                    </div>


                </div>

                 <div className="row ">

                     <div className="col-md-8 offset-2" style={{backgroundColor: '#ffe6e6'}} >

                         <button type="button" className="btn btn-outline-secondary">Рассчитать карту</button>

                     </div>

                 </div>

                <div className="row ">

                     <div className="col-md-4 offset-2" style={{backgroundColor: '#ffe6e6'}} >

                         Карта

                     </div>

                    <div className="col-md-4" style={{backgroundColor: '#e6e6ff'}} >

                        Описание

                     </div>

                 </div>


            </div>

        )

    }
}


export default Friends