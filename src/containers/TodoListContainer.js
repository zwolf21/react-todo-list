import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import TodoList from "../components/TodoList";
import * as todoActions from "../modules/todo";

export class TodoListContainer extends Component {
  handleToggle = id => {
    const { TodoActions } = this.props;
    TodoActions.toggle(id);
  };

  handleRemove = id => {
    const { TodoActions } = this.props;
    TodoActions.remove(id);
  };

  render() {
    const { todos } = this.props;
    const { handleToggle, handleRemove } = this;
    return (
      <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todo.todos
});

const mapDispatchToProps = dispatch => ({
  TodoActions: bindActionCreators(todoActions, dispatch)
});

const conn = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default conn(TodoListContainer);
