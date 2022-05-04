import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import createSagaMiddleware from "redux-saga";
import createSagaMiddleware from "../saga-nut";

// !1. 创建要运行的saga
// import loginSaga from "../action/loginSaga";
import rootSaga from "../action/rootSaga";
import { loginReducer } from "./loginReducer";

// !2. 创建saga中间件
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({ user: loginReducer }),
  // !3. 把saga中间件与redux store链接
  applyMiddleware(sagaMiddleware)
);

// !4. 运行saga
sagaMiddleware.run(rootSaga);

export default store;
