import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWeatherDataByCityNameRequest } from './action/index'

class SearchForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            cityName : ''
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }
    handleSearch(e){
        this.setState({
            cityName : e.target.value
        })
    }
    handleOnSubmit(e){
        this.props.getDataByCityName(this.state.cityName.trim());
        this.setState({
            cityName: ''
        })
        e.preventDefault();
    }
    render() {
        return (
            <div className="search_form">
                <form className="form-inline" onSubmit={ (e)=>this.handleOnSubmit(e) } >
                    <input type="text" maxLength={40} placeholder="Search..." value={this.state.cityName} onChange={ (e)=>this.handleSearch(e) }  />
                    <div className="search" ></div>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getDataByCityName : (cityName) => {
            dispatch(getWeatherDataByCityNameRequest(cityName))
        }
    }
}
export default connect(null,mapDispatchToProps)(SearchForm)