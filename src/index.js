import React, { Component } from "react";
import ReactDOM from "react-dom";
import AppFooter from "./AppFooter";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Hello World</h1>
        </div>
        <AppFooter />
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
