import React, { Component } from 'react';

function zeroPad(num) {
  return num < 10 ? '0' + num : num;
}

function formatTime(time) {
  let working   = time;
  const hours   = working < 3600 ? 0: Math.floor(working / 3600);
  working       = working % 3600;
  const minutes = working < 60 ? 0:   Math.floor(working / 60);
  const seconds = working % 60;
  return [ hours, minutes, seconds].map((val) => zeroPad(val)).join(':');
}

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state     = { active: false, time: 0 };
    this.increment = this._increment.bind(this);
    this.toggle    = this._toggle.bind(this);
    this.reset     = this._reset.bind(this);
  }

  start() {
    this.interval = setInterval(this.increment, 1000);
    this.setState(prevState => ({ ...prevState, active: true }));
  }

  stop() {
    clearInterval(this.interval);
    delete this.interval;
    this.setState(prevState => ({ ...prevState, active: false }));
  }

  _reset() {
    this.setState(prevState => ({ ...prevState, time: 0 }));
  }

  _toggle() {
    if (this.interval) {
      this.stop();
    } else {
      this.start();
    }
  }

  _increment() {
    this.setState(prevState => ({ ...prevState, time: prevState.time + 1 }));
  }

  render() {
    return (
      <div>
        <div>Time: {formatTime(this.state.time)}</div>
        <button onClick={this.toggle}>{this.state.active ? 'Pause' : 'Play'}</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}
