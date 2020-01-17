import React, { Component } from "react";
import { database } from "../firebase";
import {
  FormControl,
  InputLabel,
  Input,
  TextField,
  Button
} from "@material-ui/core";
class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curEventName: "",
      curEventDateAndTime: ""
    };
  }

  setEventDateAndTime = e => {
    this.setState({ curEventDateAndTime: e.target.value });
    console.log(this.state);
  };

  setEventName = e => {
    this.setState({ curEventName: e.target.value });
  };

  addEventToDataBase = () => {
    const { curEventDateAndTime, curEventName } = this.state;
    const splitCurEventDateAndTime = curEventDateAndTime.split("T");
    const curEventDate = splitCurEventDateAndTime[0];
    const curEventTime = splitCurEventDateAndTime[1];
    console.log(splitCurEventDateAndTime);
    if (curEventName === null) {
      alert("Please enter a name for your event ");
    } else {
      database.collection("events").add({
        event_name: curEventName,
        event_date: curEventDate,
        event_time: curEventTime
      });
      //update the events with the event that was just added
    }
  };
  render() {
    return (
      <div>
        <FormControl>
          <InputLabel htmlFor="event-name">Event Name</InputLabel>
          <Input
            onChange={this.setEventName}
            id="event-name"
            aria-describedby="my-helper-text"
          />
          <TextField
            id="event-date-time"
            label="Event time and date"
            type="datetime-local"
            defaultValue="2019-01-17T10:30"
            aria-describedby="event-helper-text"
            onChange={this.setEventDateAndTime}
            InputLabelProps={{
              shrink: true
            }}
          />
          <Button onClick={this.addEventToDataBase}>Submit Event</Button>
        </FormControl>
      </div>
    );
  }
}

export default CreateEvent;
