import React, { Component } from 'react';
import { formatDiffInSeconds, diffInSeconds } from '../../timeUtil';

class TimeTimer extends Component {

  state = {
    startTime: null,
    elapsed: 0
  }

  handleStart = () => {
    this.setState({startTime: new Date(), elapsed: 0 });
    this.interval = setInterval(this.timerTick, 1000);
  }

  handleAdd = () => {
    const timeEntry = {start: this.state.startTime, end: new Date()};
    this.handleCancel();

    // TODO call onSubmit callback prop with the timeEntry value.
  }

  handleCancel = () => {
    this.setState({startTime: null, elapsed: 0});
    clearInterval(this.interval);
  }

  timerTick = () => {
    const elapsedSeconds = diffInSeconds(new Date(), this.state.startTime);
    this.setState({ elapsed: elapsedSeconds });
  }

  render() {
    let startTime;
    if (this.state.startTime) {
      startTime = this.state.startTime.toLocaleTimeString();
    } else {
      startTime = "Stopped";
    }

    return (
      <div className="TimeTimer TimeLog__row">
        <label>
          {formatDiffInSeconds(this.state.elapsed)}
          <span className="TimeLog__label">Amount</span>
        </label>
        <label>
          {startTime}
          <span className="TimeLog__label">Start Time</span>
        </label>
        <span>
          { !this.state.startTime ? <button onClick={this.handleStart}>Start</button> :
          <>
            <button onClick={this.handleAdd}>Add</button>
            <button onClick={this.handleCancel}>Cancel</button>
          </> }
        </span>
      </div>
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

export default TimeTimer;