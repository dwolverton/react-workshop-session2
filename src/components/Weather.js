import React, { Component } from 'react';
import './Weather.css';
import WeatherImage from './WeatherImage';

class Weather extends Component {

  render() {
    return (
      <div className={"Weather box"}>
        <p><WeatherImage conditions={this.props.conditions}/> {this.props.conditions}</p>
        <p>
          <label>High</label> {this.props.highF}F ({fahrenheitToCelsius(this.props.highF)}C)
          {' '}
          <label>Low</label> {this.props.lowF}F ({fahrenheitToCelsius(this.props.lowF)}C)
        </p>
      </div>
    )
  }
}

function fahrenheitToCelsius(tempF) {
  return Math.round( (tempF - 32) * 5 / 9 );
}

export default Weather;