import React, { Component } from 'react';
import { formatTime, diffInSeconds, formatDiffInSeconds } from '../../timeUtil';

class TimeEntry extends Component {
  render() {
    let seconds = diffInSeconds(this.props.end, this.props.start);
    return (
      <div className="TimeEntry TimeLog__row">
        <span>{formatDiffInSeconds(seconds)}</span>
        <span>{formatTime(this.props.start)}</span>
        <span>{formatTime(this.props.end)}</span>
      </div>
    )
  }
}

export default TimeEntry;