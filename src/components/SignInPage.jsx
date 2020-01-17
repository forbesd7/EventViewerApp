import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { database, provider, auth } from "../firebase";

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
      return <div>eventView</div>;
    } else {
      return <Button onClick={this.signInAndCreateUser}>Sign in</Button>;
    }
  };
  render() {
    return <div>{this.renderView()}</div>;
  }
}

export default SignInPage;
