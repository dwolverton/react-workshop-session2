import React, { Component } from 'react';
import Grade from './Grade';

class GradeForm extends Component {
  state = {
    label: 'JavaScript Quiz',
    score: '3',
  }
  handleChangeLabel = e => {
      this.setState({
          label: e.target.value
      });
  }
  handleChangeScore = e => {
      this.setState({
          score: e.target.value,
      });
  }
  render() {
      let pass
      if (this.state.score >= 12) {
          pass = true
      }
      return (
          <div className="GradeForm">
              <Grade label={this.state.label} score={this.state.score} total={20} passing={pass}></Grade>
              <form>
                  <label>Label</label>
                  <input value={this.state.label} onChange={this.handleChangeLabel} ></input>
                  <label>Score</label>
                  <input value={this.state.score} onChange={this.handleChangeScore} type="number" min="0" max="20"></input>
              </form>
          </div>
      );
  }
}

export default GradeForm;