import React, { Component } from "react";

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>{this.props.eventName}</div>
        <div>{this.props.eventTime}</div>
        <div>{this.props.eventDate}</div>
      </div>
    );
  }
}

export default Event;
