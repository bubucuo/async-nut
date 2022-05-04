import proc from "./proc";

export default function runSaga({ getState, dispatch }, saga, ...args) {
  const iterator = saga(...args);
  proc({ getState, dispatch }, iterator);
}
