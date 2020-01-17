import React, { Component } from "react";
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
    this.props.getEvents();
  }

  renderEvents = () => {
    if (this.props.isLoading) {
      return <div>loading...</div>;
    } else {
      return this.props.events.map((event, index) => {
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
            getEvents={this.getEvents}
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
