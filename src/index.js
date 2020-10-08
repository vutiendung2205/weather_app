import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialReducer = {
    nameCity: '',
    forecast : [],
    showModal: false,
    currentData : {
      temp : '',
      temp_max : '',
      temp_min : '',
      feels_like : '',
      humidity : '',
      clouds : '',
      sunrise : '',
      sunset : '',
      windSpeed : '',
      uv_index : '',
      timezone : '',
      icon : ''
    }
};
const reducer = ( state = initialReducer, action ) => {
    switch (action.type) {
        case 'FETCH_DATA' :{
            return {...state,
              nameCity : action.data.name,
              currentData : {
              ...state.data,
              temp : action.data.main.temp,
              temp_max : action.data.main.temp_max,
              temp_min : action.data.main.temp_min,
              feels_like : action.data.main.feels_like,
              humidity : action.data.main.humidity,
              clouds : action.data.clouds.all,
              sunrise : action.data.sys.sunrise,
              sunset : action.data.sys.sunset,
              windSpeed : action.data.wind.speed,
              timezone : action.data.timezone,
              icon : action.data.weather[0].icon
            }}
        };
        case 'GET_UV_INDEX' : {
            return {...state,currentData : {
                ...state.currentData,
                uv_index : action.uv_index
            }}
        };
        case 'FORECAST_DATA' : {
          return {...state,
          forecast : [...action.forecastData]}
        };
        case 'SHOW_MODAL' : {
          return {...state,showModal : false}
        };
        case 'OPEN_MODAL': {
          return {...state,showModal : true}
        }
        default : return {...state};
    }
}
var store = createStore(reducer ,
  composeWithDevTools(
    applyMiddleware(thunk))
  )
   


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
