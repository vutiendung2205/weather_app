import React, { Component } from 'react';

export default class Forecast extends Component {
    render() {
        let dd = this.props.time.split(' ')[0].split('-')[2];
        let mm = this.props.time.split(' ')[0].split('-')[1];
        let day = `${dd}/${mm}`;

        let hh = this.props.time.split(' ')[1].split(':')[0];
        let pp = this.props.time.split(' ')[1].split(':')[1];
        let time = `${hh} : ${pp}`;
        return (
            <div className="forecast">
                <div className="forecast_item">
                    <p className="forecast_time_day"> {day} </p>
                    <p className="forecast_time_hour"> {time} </p>
                    <div className="forecast_time_main">
                        <img src={`http://openweathermap.org/img/wn/${this.props.icon}@2x.png`} alt="" />
                    </div>
                    <p className="forecast_time_temp"> { Math.round(this.props.temp) }  <span>&#8451;</span></p>
                </div>
            </div>
        )
    }
}
