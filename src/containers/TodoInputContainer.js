import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import TodoInput from "../components/TodoInput";
import * as inputActions from "../modules/input";
import * as todoActions from "../modules/todo";

export class TodoInputContainer extends Component {
  handleChange = e => {
    const { InputActions } = this.props;
    InputActions.setInput(e.target.value);
  };

  handleInsert = () => {
    const { InputActions, TodoActions, value } = this.props;
    const todo = {
      text: value,
      done: false
    };
    TodoActions.insert(todo);
    InputActions.setInput("");
  };

  render() {
    const { value } = this.props;
    const { handleChange, handleInsert } = this;
    return (
      <TodoInput
        onChange={handleChange}
        onInsert={handleInsert}
        value={value}
      />
    );
  }
}

const mapStateToProps = state => ({
  value: state.input.get("value")
});

const mapDispatchToProps = dispatch => ({
  InputActions: bindActionCreators(inputActions, dispatch),
  TodoActions: bindActionCreators(todoActions, dispatch)
});

const conn = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default conn(TodoInputContainer);
