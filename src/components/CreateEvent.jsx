import React, { Component } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  TextField
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
          <InputLabel htmlFor="event-name">Event Name</InputLabel>
          <Input id="event-name" aria-describedby="my-helper-text" />
          <TextField
            id="event-date-time"
            label="Event time and date"
            type="datetime-local"
            defaultValue="2019-01-17T10:30"
            aria-describedby="event-helper-text"
            InputLabelProps={{
              shrink: true
            }}
          />
        </FormControl>
      </div>
    );
  }
}

export default CreateEvent;
