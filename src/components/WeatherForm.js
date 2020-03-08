import React, { Component } from 'react';
import Weather from './Weather';

class WeatherForm extends Component {

  state = {
    conditions: "Sunny",
    highF: 72
  }

  handleChangeConditions = e => {
    this.setState({
      conditions: e.target.value
    });
  }

  handleChangeHighF = e => {
    this.setState({
      highF: e.target.value
    });
  }

  render() {
    return (
      <div className="WeatherForm box">
        <Weather conditions={this.state.conditions}
                 highF={this.state.highF}
                 lowF={this.state.highF - 18} />
        <form>
          <p>
            <label>Conditions</label>
            <input value={this.state.conditions}
                   onChange={this.handleChangeConditions} />
          </p>
          <p>
            <label>High Temperature (F)</label>
            <input value={this.state.highF} type="number"
                   onChange={this.handleChangeHighF}/>
          </p>
        </form>
      </div>
    );
  }
}

export default WeatherForm;