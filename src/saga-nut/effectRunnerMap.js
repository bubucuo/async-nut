import effectTypes from "./effectTypes";

function runTakeEffect() {
  console.log("runTakeEffect"); //sy-log
}

function runPutEffect() {
  console.log("runPutEffect"); //sy-log
}

function runCallEffect() {
  console.log("runCallEffect"); //sy-log
}

function runForkEffect() {
  console.log("runForkEffect"); //sy-log
}

const effectRunnerMap = {
  [effectTypes.TAKE]: runTakeEffect,
  [effectTypes.PUT]: runPutEffect,
  [effectTypes.CALL]: runCallEffect,
  [effectTypes.FORK]: runForkEffect,
};

export default effectRunnerMap;
