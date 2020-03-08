import React, { Component } from 'react';
import Weather from './Weather';

class WeatherForm extends Component {

  state = {
    conditions: "Sunny",
    highF: 72,
    list: [
      { conditions: "Rainy", high: 72, low: 55},
      { conditions: "Cloudy", high: 68, low: 56}
    ]
  }

  handleChangeConditions = e => {
    this.setState({
      conditions: e.target.value
    });
  }

  handleChangeHighF = (e) => {
    this.setState({
      highF: parseFloat(e.target.value)
    });
  }

  handleSubmit = (e) => {
    // stop the form from reloading the page
    e.preventDefault();
    const newItem = {
      conditions: this.state.conditions,
      high: this.state.highF,
      low: this.state.highF - 18
    };
    this.setState(prev => {
      // create a copy of the array from state
      // so that we don't modify state directly
      const newList = prev.list.slice(0);
      newList.push(newItem);
      return {
        list: newList // replace the array
      };
    });
  }

  render() {
    return (
      <div className="WeatherForm box">
        <form onSubmit={this.handleSubmit}>
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
          <p><button type="submit">Add</button></p>
        </form>

        {this.state.list.map((data, index) =>
            <Weather key={index} conditions={data.conditions}
                highF={data.high}
                lowF={data.low} />
          )}
      </div>
    );
  }
}

export default WeatherForm;