import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDataRequest, getWeatherDataByCityNameRequest } from './action/index'
import CurrentTime from './CurrentTime';
import Forecast from './Forecast';
import SearchForm from './SearchForm';
import Slider from 'react-slick';
import IsModal from './Modal';

class Body extends Component {
    constructor(props){
        super(props)
        this.state = {
            forecastData : []
        }
    }

    componentDidMount(){
        this.props.fetchData();
    }
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            arrows: false,
            slidesToShow: 6,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
                },
                {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
                },
                {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                }
            ]
        }
        return (
            <section className="body">
                <IsModal />
                <div className="container-fuild">
                    <div className="header">
                            <SearchForm />
                    </div>
                    <CurrentTime />
                </div>
                <div className="forecast_body">
                    <div className="row">
                        <div className="col-12">
                            <Slider {...settings}>
                                {
                                    this.props.forecastData.map( (item,index) =>{
                                        return <Forecast
                                            key={index}
                                                time= {item.dt_txt}
                                                temp= {item.main.temp}
                                                main= {item.weather[0].main}
                                                icon= {item.weather[0].icon}
                                            />
                                    } )
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
const mapStateToProps = (state) =>{
    return {
        nameCity : state.nameCity,
        data : state.currentData,
        forecastData : state.forecast,
        showModal : state.showModal
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData : () =>{
            dispatch(fetchDataRequest())
        },
        getDataByCityName : (cityName) => {
            dispatch(getWeatherDataByCityNameRequest(cityName))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Body)