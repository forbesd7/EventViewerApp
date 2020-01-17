import React, { Component } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText
} from "@material-ui/core";
class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <FormControl>
          <InputLabel htmlFor="event-name">Event</InputLabel>
          <Input id="event-name" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">
            Enter the name of your event
          </FormHelperText>
        </FormControl>
      </div>
    );
  }
}

export default CreateEvent;
