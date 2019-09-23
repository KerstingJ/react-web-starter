import React, { Component } from "react";

export class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: ""
    };
  }

  submitTodo(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleClick(e) {
    e.preventDefault();
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({ todos, newTodo: "" });
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="newTodo"
            value={this.state.newTodo}
            onChange={this.submitTodo.bind(this)}
          />
          <button onClick={this.handleClick.bind(this)}>create</button>
        </form>
        <ul>
          {this.state.todos.map((todo, i) => (
            <li key={i}>{todo}</li>
          ))}
        </ul>
      </div>
    );
  }
}
