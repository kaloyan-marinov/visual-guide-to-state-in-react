import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    // Must initialize state first
    this.state = { count: 0 };
  }

  handleClick() {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        /*
        setState is asynchronous,
        so this (arrow) function gets called after setState has finished.
        */
        console.log(
          `The value of state.counter has been updated to ${this.state.count}.`
        );
      }
    );
  }

  render() {
    return (
      <div className="container">
        <div>Button presses: {this.state.count} </div>
        <button onClick={this.handleClick.bind(this)}>Add one</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("root"));
