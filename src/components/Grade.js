import React, { Component } from 'react';
import './Grade.css';

class Grade extends Component {

  render() {
    const percentage = Math.round(this.props.score / this.props.total * 100);
    return (
      <div className={"Grade box"}>
        <h3>{this.props.label}</h3>
        <p>
          <label>Score</label> <span>{this.props.score} of {this.props.total}</span>
        </p>
        <p>
          <label>Percentage</label> <span>{percentage}</span>
        </p>
        <p>
          <label>Passing?</label> {this.props.passing ? "Yes" : "No"}
        </p>
      </div>
    );
  }
}

export default Grade;