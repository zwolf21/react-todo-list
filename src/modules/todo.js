import { fromJS } from "immutable";
import { handleActions, createAction } from "redux-actions";

const INSERT = "todo/INSERT";
const TOGGLE = "todo/TOGGLE";
const REMOVE = "todo/REMOVE";

export const insert = createAction(INSERT);
export const toggle = createAction(TOGGLE);
export const remove = createAction(REMOVE);

const initialState = {
  autoId: 5,
  todos: [
    {
      id: 0,
      text: "필수 모듈 설치",
      done: true
    },
    {
      id: 1,
      text: "리듀서 만들기",
      done: true
    },
    {
      id: 2,
      text: "컴포넌트 만들기",
      done: true
    },
    {
      id: 3,
      text: "컨테이너 만들기",
      done: true
    },
    {
      id: 4,
      text: "리듀서, 컴포넌트, 컨테이너 연동하기",
      done: true
    }
  ]
};

export default handleActions(
  {
    [INSERT]: (state, action) => {
      const todo = {
        id: state.autoId,
        ...action.payload
      };
      return {
        autoId: state.autoId + 1,
        todos: [...state.todos, todo]
      };
    },
    [TOGGLE]: (state, action) => {
      const { payload: id } = action;
      const todos = fromJS(state.todos);
      const index = todos.findIndex(todo => todo.get("id") === id);
      return {
        ...state,
        todos: todos.updateIn([index, "done"], done => !done).toJS()
      };
    },
    [REMOVE]: (state, action) => {
      const { payload: id } = action;
      const todos = fromJS(state.todos);
      const index = todos.findIndex(todo => todo.get("id") === id);
      return {
        ...state,
        todos: todos.delete(index).toJS()
      };
    }
  },
  initialState
);
