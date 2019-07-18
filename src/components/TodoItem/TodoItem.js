import React from "react";

import classNames from "classnames";

import styles from "./TodoItem.scss";

const cx = classNames.bind(styles);

const TodoItem = ({ done, children, onToggle, onRemove }) => {
  return (
    <div className={cx("todo-item")} onClick={onToggle}>
      <input type="checkbox" className={cx("tick")} checked={done} readOnly />
      <div className={cx("text", { done })}>{children}</div>
      <div className={cx("delete")} onClick={onRemove}>
        [지우기]
      </div>
    </div>
  );
};

export default TodoItem;
