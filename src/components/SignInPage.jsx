import React, { Component, Fragment } from "react";
import { Button, Typography } from "@material-ui/core";
import { database, provider, auth } from "../firebase";
import EventView from "./EventView";
class SignInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  signInAndCreateUser = () => {
    auth
      .signInWithPopup(provider)
      .then(result => {
        database.collection("users").add({
          name: result.user.displayName,
          email: result.user.email
        });
        this.setState({ user: result.user });
      })
      //TODO: put in an error page here
      .catch(err => {
        console.log(err);
      });
  };

  renderView = () => {
    if (this.state.user !== null) {
      return <EventView user={this.state.user} />;
    } else {
      return (
        <div>
          <Typography variant="h1">Event Viewer</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={this.signInAndCreateUser}
          >
            Sign in
          </Button>
        </div>
      );
    }
  };
  render() {
    return <Fragment>{this.renderView()}</Fragment>;
  }
}

export default SignInPage;
