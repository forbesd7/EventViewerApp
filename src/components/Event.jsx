import React, { Component } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TextField,
  Typography
} from "@material-ui/core";
import { database } from "../firebase";

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false,
      editedEventName: "",
      editedEventDate: "",
      editedEventTime: ""
    };
  }

  handleClose = () => {
    this.setState({ dialogOpen: false });
  };
  editEvent = () => {
    this.setState({ dialogOpen: true });
  };

  setEventDate = e => {
    this.setState({ editedEventDate: e.target.value });
  };
  setEventTime = e => {
    this.setState({ editedEventTime: e.target.value });
  };
  setEventName = e => {
    this.setState({ editedEventName: e.target.value });
  };

  editEventInDatabase = () => {
    database
      .collection("events")
      .doc(this.props.eventId)
      .set({
        event_date: this.state.editedEventDate,
        event_time: this.state.editedEventTime,
        event_name: this.state.editedEventName
      })
      .then(res => {
        this.handleClose();
        this.props.getEvents();
      });
  };
  render() {
    return (
      <div>
        <Button variant="contained" color="primary" onClick={this.editEvent}>
          Edit Event
        </Button>
        <Typography>Event Name:{this.props.eventName}</Typography>
        <Typography>{this.props.eventTime}</Typography>
        <Typography>{this.props.eventDate}</Typography>
        <Dialog
          open={this.state.dialogOpen}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Edit Event</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Rename the event name, date, or time.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Event Name"
              type="text"
              onChange={this.setEventName}
              fullWidth
            />

            <TextField
              autoFocus
              margin="dense"
              id="event-date"
              type="date"
              onChange={this.setEventDate}
              fullWidth
            />

            <TextField
              autoFocus
              margin="dense"
              id="event-time"
              type="time"
              onChange={this.setEventTime}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.editEventInDatabase} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Event;
