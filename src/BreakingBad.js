import React, { Component } from 'react';
import SayMyName from './components/SayMyName';
import Audio from './components/Audio';
import './App.css';

class BreakingBad extends Component {
  constructor(props) {
    super(props);
    this.state = {firstname: 'Breaking', lastname: 'Bad'};
  }

  updateFirstName = (e) => this.setState({...this.state, firstname: e.target.value});
  updateLastName  = (e) => this.setState({...this.state, lastname: e.target.value});
  clearInput = (e) => this.setState({firstname: '', lastname: ''});

  render() {
    return (
      <div className="App">
        <Audio />
        <div className="App-header">
          <h2>Say My Name</h2>
          <div>
            <input value={this.state.firstname} placeholder="First Name" onChange={this.updateFirstName}/>
            <br/>
            <input value={this.state.lastname} placeholder="Last Name" onChange={this.updateLastName}/>
          </div>
          <button type="button" onClick={this.clearInput}>Clear</button>
        </div>
        <div className="breaking-bad-wrapper">
          <SayMyName {...this.state}/>
        </div>
      </div>
    );
  }
}

export default BreakingBad;
