import React, { Component } from "react";
export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      task: "",
    };
  }
  // handleOnClick() {
  //   console.log();
  // }
  render() {
    return (
      <>
        <h3>Todo list</h3>
        <input
          type="text"
          onChange={(event) => this.setState({ task: event.target.value })}
        />
        <button
          onClick={() => {
            if (this.state.task === "") return;
            console.log(this.state.task);
          }}
        >
          Add
        </button>
      </>
    );
  }
}
