import React, { Component } from "react";
import ReactDOM from "react-dom";
import AppFooter from "./AppFooter";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import AppContent from "./AppContent";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div>
          <h1>Hello World</h1>
          <AppContent />
        </div>
        <AppFooter />
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
