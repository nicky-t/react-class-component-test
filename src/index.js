import React, { Component } from "react";
import ReactDOM from "react-dom";
import AppFooter from "./AppFooter";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import AppContent from "./AppContent";
import AppHeader from "./AppHeader";

class App extends Component {
  render() {
    const myProps = {
      title: "My Cool App!",
      subject: "My subject",
      favorite_color: "red",
    };

    return (
      <div className="app">
        <AppHeader {...myProps} />
        <AppContent />
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
