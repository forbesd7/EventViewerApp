import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { signIn } from "./utils";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  render() {
    return (
      <div>
        <Button onClick={signIn}>Sign in </Button>
      </div>
    );
  }
}

export default App;
