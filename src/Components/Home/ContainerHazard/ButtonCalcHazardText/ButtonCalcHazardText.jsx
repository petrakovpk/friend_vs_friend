import React from 'react'
import {connect} from "react-redux";
import {changeHazardHeader} from "../../../../Actions/Hazard/setHazardHeader";
import {changeHazardText} from "../../../../Actions/Hazard/setHazardText";
import {bindActionCreators} from 'redux'

class ButtonCalcHazardText extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {


        const {

            changeHazardHeader,
            changeHazardText


        } = this.props

        const {
            personType,
            hazardPersonName1,
            hazardPersonName2,
            hazardPersonName3,
            hazardPersonName4,
            hazardPersonName5,
        } = this.props

        const setHazardText = (personType) => {
            switch (personType) {

                case "person1":
                    changeHazardHeader("Средняя")
                    changeHazardText("Ну так себе опасность")
                    break

                case "person2":
                    changeHazardHeader("Сильная")
                    changeHazardText("Сильная очень")
                    break

                case "person3":
                    changeHazardHeader("Слабая")
                    changeHazardText("Слабая так себе")
                    break

                case "person4":
                    changeHazardHeader("Слабая")
                    changeHazardText("Слабая самая")
                    break

                case "person5":
                    changeHazardHeader("Сильная")
                    changeHazardText("Сильная самая")
                    break


            }
        }

        const getPersonName  = (personType) => {

            switch (personType) {

                case "person1":
                    return hazardPersonName1

                case "person2":
                    return hazardPersonName2

                case "person3":
                    return hazardPersonName3

                case "person4":
                    return hazardPersonName4

                case "person5":
                    return hazardPersonName5


            }

        }

        const isHidden = (personType) => {

            switch (personType) {

                case "person1":
                    if (hazardPersonName1 === '') {
                        return 1
                    }
                    return 0

                case "person2":
                    if (hazardPersonName2 === '') {
                        return 1
                    }
                    return 0

                case "person3":
                    if (hazardPersonName3 === '') {
                        return 1
                    }
                    return 0

                case "person4":
                    if (hazardPersonName4 === '') {
                        return 1
                    }
                    return 0

                case "person5":
                    if (hazardPersonName5 === '') {
                        return 1
                    }
                    return 0


            }

        }



        return (
            <button
            onClick={()=> {
                setHazardText(personType)
            }}

            hidden={isHidden(personType)}

            >
                {getPersonName(personType)}
            </button>

        )
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        changeHazardHeader: bindActionCreators(changeHazardHeader, dispatch),
        changeHazardText: bindActionCreators(changeHazardText, dispatch),

    }
}


const mapStateToProps = (state) => {


    return {

        hazardPersonName1: state.setHazardPersonNameReducer.hazardPersonName1,
        hazardPersonName2: state.setHazardPersonNameReducer.hazardPersonName2,
        hazardPersonName3: state.setHazardPersonNameReducer.hazardPersonName3,
        hazardPersonName4: state.setHazardPersonNameReducer.hazardPersonName4,
        hazardPersonName5: state.setHazardPersonNameReducer.hazardPersonName5,

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ButtonCalcHazardText)