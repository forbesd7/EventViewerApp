import React, { Component } from "react";
import CreateEvent from "./CreateEvent";
import Events from "./Events";
import { database } from "../firebase";
class EventView extends Component {
  constructor(props) {
    super(props);
    this.state = { events: [] };
  }

  getEvents = () => {
    this.setState({ isLoading: true });
    database
      .collection("events")
      .get()
      .then(res => {
        this.setState({ events: res.docs, isLoading: false });
      });
  };

  render() {
    return (
      <div>
        <CreateEvent getEvents={this.getEvents} />
        <Events events={this.state.events} getEvents={this.getEvents} />
      </div>
    );
  }
}

export default EventView;
