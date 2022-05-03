import { createStore, combineReducers } from "redux";

// 定义了store修改规则
export function countReducer(state = 0, action) {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      return state;
  }
}

// 创建store
const store = createStore(
  combineReducers({
    count: countReducer,
  })
);

export default store;
