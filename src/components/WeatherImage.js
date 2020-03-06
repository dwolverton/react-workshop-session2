import React, { Component } from 'react';
import './WeatherImage.css';
import sunImg from '../images/weather-sun.svg';
import rainImg from '../images/weather-rain.svg';
import cloudsImg from '../images/weather-clouds.svg';

class WeatherImage extends Component {
  render() {
    const conditions = this.props.conditions.toLowerCase();
    let imgSrc = null;
    if (conditions.includes("sun")) {
      imgSrc = sunImg;
    } else if (conditions.includes("rain")) {
      imgSrc = rainImg;
    } else if (conditions.includes("cloud")) {
      imgSrc = cloudsImg;
    } else {
      return null;
    }

    return (
      <img className="WeatherImage" src={imgSrc} alt={this.props.conditions} />
    );
  }
}

export default WeatherImage;