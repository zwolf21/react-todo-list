import { List, Map, fromJS } from "immutable";
import { handleActions, createAction } from "redux-actions";

const INSERT = "todo/INSERT";
const TOGGLE = "todo/TOGGLE";
const REMOVE = "todo/REMOVE";

export const insert = createAction(INSERT);
export const toggle = createAction(TOGGLE);
export const remove = createAction(REMOVE);

const initialState = List([
  Map({
    id: 0,
    text: "필수 모듈 설치하기",
    done: true
  }),
  Map({
    id: 1,
    text: "리듀서 만들기",
    done: true
  }),
  Map({
    id: 2,
    text: "컴포넌트 만들기",
    done: false
  }),
  Map({
    id: 3,
    text: "컴포넌트 와 리듀서 연결하기",
    done: false
  })
]);

export default handleActions(
  {
    [INSERT]: (state, action) => {
      const id = state.maxBy(hitter => hitter.get("id")).get("id") + 1;
      const todo = fromJS({
        id: id,
        ...action.payload
      });
      return state.push(todo);
    },
    [TOGGLE]: (state, action) => {
      const { payload: id } = action;
      const index = state.findIndex(todo => todo.get("id") === id);
      return state.updateIn([index, "done"], done => !done);
    },
    [REMOVE]: (state, action) => {
      const { payload: id } = action;
      const index = state.findIndex(todo => todo.get("id") === id);
      return state.delete(index);
    }
  },
  initialState
);
