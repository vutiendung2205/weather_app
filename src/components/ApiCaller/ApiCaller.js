import axios from 'axios';


// get current weather data by city name
export const callApiCityName = ( cityname ) =>{
    return axios({
        url : `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=a2fedcfd468d6f0a1fa7cf2b710ae5a5&lang=vi&units=metric`,
        method : 'GET',
        data : null
    })
    // .catch( err => console.log(err) )
}


// Get UV index  => coord
export const getUVIndex = (coord) =>{
    let lat = coord.lat;
    let lon = coord.lon
    return axios({
        url : `https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=a2fedcfd468d6f0a1fa7cf2b710ae5a5`,
        method : 'GET',
        data : null
    })
    // .catch(  err => console.log(err) )
}

// get current weather data by coord
export const callApiCoord = ( latitude,longitude ) =>{
    return axios({
        url : `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=a2fedcfd468d6f0a1fa7cf2b710ae5a5&lang=vi&units=metric`,
        method : 'GET',
        data : null
    })
    // .catch( err => console.log(err) )
}

// 5 day/3 hour weather forecast
export const callApiForecast = ( cityName ) =>{
    return axios({
        url : `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=a2fedcfd468d6f0a1fa7cf2b710ae5a5&lang=vi&units=metric`,
        method : 'GET',
        data : null
    })
    // .catch( err =>console.log(err.toJSON()) )
}

// get icon weather
export const getIcon = (id) => {
    return axios({
        url :`https://openweathermap.org/img/wn/${id}@2x.png`,
        method : 'GET',
        data : null
    })
    // .catch( err => console.log(err) )
}