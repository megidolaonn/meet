import React, { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
  }

  getStyle = () => {
    return {
      color: this.color,
    };
  }

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'blue';
  }

  render() {
    return (
      <div className="InfoAlert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'orange';
  }

  render() {
    return (
      <div className="WarningAlert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'red';
  }

  render() {
    return (
      <div className="ErrorAlert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

export { InfoAlert, WarningAlert, ErrorAlert };