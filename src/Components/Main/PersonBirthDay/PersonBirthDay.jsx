import React, {Component} from 'react';
import moment from 'moment';
import {DatetimePickerTrigger, DatetimePicker} from 'rc-datetime-picker';
import 'moment/locale/ru';
import 'rc-datetime-picker/dist/picker.min.css';


class AirDatepicker extends React.Component {
     constructor(props) {
        super(props);
        this.state = {
      moment: moment()
    };
  }

  handleChange = (moment) => {
    this.setState({
      moment
    });
  }

    render() {


        return (


                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="День"/>
                    <input type="text" className="form-control" placeholder="месяц"/>
                    <input type="text" className="form-control" placeholder="год"/>
                </div>

    );
  }
}


export default AirDatepicker