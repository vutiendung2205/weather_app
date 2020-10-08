import { callApiCityName, getUVIndex, callApiForecast } from '../ApiCaller/ApiCaller';

// fetch data while start
export const fetchDataRequest = () => {
    return (dispatch) =>{
        return callApiCityName( 'Ha Noi' )
        .then( res => {
            dispatch(fetchData(res.data))
            return res
        })
        .then( res =>{
            getUVIndex(res.data.coord).then( response =>{
                dispatch(uvIndex(response.data.value))
            })
            return res.data.name
        } )
        .then( res =>{
            callApiForecast(res).then( response =>{
                dispatch(getForecastData(response.data.list))
            } )
        } )
    }
} 
export const fetchData = (data) =>{
    return {
        type : 'FETCH_DATA',
        data : data,
    }
}
export const uvIndex = (uv_index) =>{
    return{
        type : 'GET_UV_INDEX',
        uv_index : uv_index
    }
}
// 
export const timeConverter = (UNIX_timestamp,timezone) => {
    var timeOffset = new Date().getTimezoneOffset();
    var date = new Date( (UNIX_timestamp+timeOffset*60+timezone) * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime;
  }

//  get weather by city name:
export const getWeatherDataByCityNameRequest = (cityName) =>{
    return (dispatch) =>{
        return callApiCityName( `${cityName}` )
        .then( res =>{
            dispatch( fetchData(res.data) )
            return res.data
        } )
        .then( res =>{
            getUVIndex(res.coord).then( response =>{
                dispatch(uvIndex(response.data.value))
            })
            return res
        } )
        .then( res =>{
            callApiForecast(res.name)
            .then( res =>{
                dispatch(getForecastData(res.data.list))
            } )
        } )
        .catch( err =>{
            dispatch(openModal())
        })
    }
}

// get forecast data from city name
export const getForecastDataRequest = (cityName) =>{
    return (dispatch)=>{
        return callApiForecast(cityName)
        .then( res =>{
            dispatch(getForecastData(res.data.list))
        } )
    }
}
export const getForecastData = (forecastData) =>{
    return {
        type : 'FORECAST_DATA',
        forecastData : forecastData
    }
}
export const openModal = () =>{
    return{
        type : 'OPEN_MODAL'
    }
}