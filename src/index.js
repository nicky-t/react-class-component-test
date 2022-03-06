import React, { Component } from "react";
import ReactDOM from "react-dom";
import AppFooter from "./AppFooter";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import AppContent from "./AppContent";
import AppHeader from "./AppHeader";

class App extends Component {
  constructor(props) {
    super(props);
    this.handlePostChange = this.handlePostChange.bind(this);

    this.state = { posts: [] };
  }

  handlePostChange = (posts) => {
    this.setState({ posts: posts });
  };

  render() {
    const myProps = {
      title: "My Cool App!",
      subject: "My subject",
      favorite_color: "red",
    };

    return (
      <div className="app">
        <AppHeader
          {...myProps}
          posts={this.state.posts}
          handlePostChange={this.handlePostChange}
        />
        <AppContent handlePostChange={this.handlePostChange} />
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
