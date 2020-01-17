import React, { Component } from "react";
import { Button } from "@material-ui/core";
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
        <Button>Sign in </Button>
      </div>
    );
  }
}

export default App;
