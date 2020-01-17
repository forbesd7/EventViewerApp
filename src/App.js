import React, { Component } from "react";
import SignInPage from "./components/SignInPage";
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
      <div className="App">
        <SignInPage />
      </div>
    );
  }
}

export default App;
