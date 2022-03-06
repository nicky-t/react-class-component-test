import React, { Component } from "react";

export default class AppContent extends Component {
  constructor(props) {
    super(props);
    this.listRef = React.createRef();
  }

  anotherFunction = () => {
    console.log("anotherFunction");
  };

  leftParagraph = () => {
    console.log("leftParagraph");
  };

  fetchList = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        let posts = this.listRef.current;

        json.forEach((post) => {
          let li = document.createElement("li");
          li.appendChild(document.createTextNode(post.title));
          posts.appendChild(li);
        });
      });
  };

  render() {
    return (
      <p>
        This is the content.
        <br />
        <hr />
        <p
          onMouseEnter={this.anotherFunction}
          onMouseLeave={this.leftParagraph}
        >
          This is some text.
        </p>
        <button onClick={this.fetchList} className="btn btn-primary">
          Fetch Data
        </button>
        <hr />
        <ul ref={this.listRef}></ul>
      </p>
    );
  }
}
