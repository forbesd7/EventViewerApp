import React, { Component } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TextField
} from "@material-ui/core";
class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false
    };
  }

  handleClose = () => {
    this.setState({ dialogOpen: false });
  };
  editEvent = () => {
    this.setState({ dialogOpen: true });
  };
  render() {
    return (
      <div>
        <div onClick={this.editEvent}>Edit Event</div>
        <div>{this.props.eventName}</div>
        <div>{this.props.eventTime}</div>
        <div>{this.props.eventDate}</div>
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
              fullWidth
            />

            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Event Date"
              type="text"
              fullWidth
            />

            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Event Time"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Event;
