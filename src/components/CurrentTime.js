import React, { Component } from 'react';
import { connect } from 'react-redux';
import { timeConverter } from './action/index'

class CurrentTime extends Component {
    render() {
        return (
            <div className="info_dsc">
                        <div className="info_weather">
                            <h1 className="name_city"> {this.props.nameCity} </h1>
                            <div className="info__weather">
                                <div className="row w-100 m-0">
                                    <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                                        <div className="info_img">
                                            
                                            <div className='info_temp'>
                                                <img src={`http://openweathermap.org/img/wn/${this.props.data.icon}@2x.png`} alt="" />
                                                <div className='info__temp'>
                                                    <p className="temp"> { Math.round(this.props.data.temp) } <span>&#8451;</span></p>
                                                    <p className="feels_like">Feels like: { Math.round(this.props.data.feels_like) } <span>&#8451;</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-md-7 col-sm-12 col-12">
                                        <div className="row box">
                                            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                                <p className="name_info">Humidity</p>
                                                <p className="humidity"> {this.props.data.humidity} %</p>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                                <p className="name_info">Wind speed</p>
                                                <p className="wind_speed"> {this.props.data.windSpeed} m/s</p>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                                <p className="name_info">Clouds</p>
                                                <p className="clouds"> {this.props.data.clouds} %</p>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                                <p className="name_info">UV index</p>
                                                <p className="uv_index"> {this.props.data.uv_index} </p>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                                <p className="name_info">Sun rise</p>
                                                <p className="sunrise"> { timeConverter(this.props.data.sunrise,this.props.data.timezone) } </p>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                                <p className="name_info">Sun set</p>
                                                <p className="sunset"> { timeConverter(this.props.data.sunset,this.props.data.timezone) } </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
        )
    }
}
function mapStateToProps(state){
    return{
        nameCity : state.nameCity,
        data : state.currentData
    }
}
export default connect(mapStateToProps)(CurrentTime)