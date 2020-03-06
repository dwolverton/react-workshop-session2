import React, { Component } from 'react';
import { formatTime } from '../../timeUtil';

class TimeForm extends Component {

  state = {
    start: "",
    end: ""
  }

  render() {
    return (
      <form className="TimeForm TimeLog__row" onSubmit={this.handleSubmit}>
        <label>
          <input type="time" required/>
          <span className="TimeLog__label">Start Time</span>
        </label>
        <label>
          <input type="time" required/>
          <span className="TimeLog__label">End Time</span>
        </label>
        <span>
          <button>Add</button>
        </span>
      </form>
    );
  }
}

export default TimeForm;