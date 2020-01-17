import React, { Component } from "react";
import { database } from "../firebase";
import Event from "./Event";
class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      isLoading: false
    };
  }
  componentDidMount() {
    this.getEvents();
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

  renderEvents = () => {
    if (this.state.isLoading) {
      return <div>loading...</div>;
    } else {
      return this.state.events.map((event, index) => {
        let eventData = event.data();
        let eventName = eventData.event_name;
        let eventTime = eventData.event_time;
        let eventDate = eventData.event_date;
        return (
          <Event
            eventId={event.id}
            eventName={eventName}
            eventTime={eventTime}
            eventDate={eventDate}
          />
        );
      });
    }
  };
  render() {
    return <div>{this.renderEvents()}</div>;
  }
}

export default Events;
