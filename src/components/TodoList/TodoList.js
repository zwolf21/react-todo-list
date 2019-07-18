import React from "react";
import classNames from "classnames";

import styles from "./TodoList";
import TodoItem from "../TodoItem/TodoItem";

const cx = classNames.bind(styles);

const TodoList = () => {
  return (
    <div>
      <TodoItem done>리액트 공부하기</TodoItem>
      <TodoItem>컴포넌트 스타일링하기</TodoItem>
    </div>
  );
};

export default TodoList;
