import React, { Component } from "react";
import CreateEvent from "./CreateEvent";
import Events from "./Events";
import "./styles/EventView.css";
import { database } from "../firebase";
class EventView extends Component {
  constructor(props) {
    super(props);
    this.state = { events: [], isLoading: false };
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
      <div className="eventViewContainer">
        <CreateEvent user={this.props.user} getEvents={this.getEvents} />
        <Events
          isLoading={this.state.isLoading}
          events={this.state.events}
          getEvents={this.getEvents}
        />
      </div>
    );
  }
}

export default EventView;
