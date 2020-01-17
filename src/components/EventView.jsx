import React, { Component } from "react";
import CreateEvent from "./CreateEvent";
import Events from "./Events";

class EventView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <CreateEvent />
        <Events />
      </div>
    );
  }
}

export default EventView;
