import React from 'react';

class CalcHoroButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div>
              <button type="button" className="btn btn-outline-secondary">Рассчитать карту</button>
            </div>
        )
    }
}

export default CalcHoroButton