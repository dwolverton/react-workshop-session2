import React, { Component } from 'react';
import Weather from './Weather';

class WeatherForm extends Component {

  state = {
    conditions: "Sunny",
    highF: 72,
    list: [
      { conditions: "Rainy", high: 72, low: 55},
      { conditions: "Cloudy", high: 68, low: 56}
    ],
    grades: [
      { label: "Worksheet 1", score: 3, total: 20, passing: false },
      { label: "Final Exam", score: 99, total: 100, passing: true }
    ]
  }

  handleChangeConditions = e => {
    this.setState({
      conditions: e.target.value
    });
  }

  handleChangeHighF = (e) => {
    this.setState({
      highF: e.target.value
    });
  }

  render() {
    return (
      <div className="WeatherForm box">
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