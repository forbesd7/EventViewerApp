import React, { Component } from "react";
import { database } from "../firebase";
class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.getEvents();
  }

  getEvents = () => {
    database
      .collection("events")
      .get()
      .then(res => {
        console.log(res.docs[0].data());
      });
  };
  render() {
    return <div>Events</div>;
  }
}

export default Events;
