import React from "react";

import classNames from "classnames";

import styles from "./TodoInput.scss";

const cx = classNames.bind(styles);

const TodoInput = ({ value, onChange, onInsert }) => {
  const handleKeyPress = e => {
    if (e.key === "Enter") {
      onInsert();
    }
  };

  return (
    <div className={cx("todo-input")}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyPress={handleKeyPress}
      />
      <div className={cx("add-button")} onClick={onInsert}>
        추가
      </div>
    </div>
  );
};

export default TodoInput;
