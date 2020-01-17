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
      curEventName: null,
      curEventDateAndTime: null
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

    if (curEventName === null || curEventDateAndTime === null) {
      alert("Please enter a name for your event ");
    } else {
      const splitCurEventDateAndTime = curEventDateAndTime.split("T");
      const curEventDate = splitCurEventDateAndTime[0];
      const curEventTime = splitCurEventDateAndTime[1];
      database
        .collection("events")
        .add({
          event_name: curEventName,
          event_date: curEventDate,
          event_time: curEventTime,
          created_by: this.props.user.displayName
        })
        .then(res => {
          this.props.getEvents();
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
            size="medium"
            onChange={this.setEventName}
            id="event-name"
            aria-describedby="my-helper-text"
          />
          <TextField
            size="medium"
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
          <Button
            variant="contained"
            color="primary"
            onClick={this.addEventToDataBase}
          >
            Submit Event
          </Button>
        </FormControl>
      </div>
    );
  }
}

export default CreateEvent;
