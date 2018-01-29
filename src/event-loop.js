let loopEle = []; //待循环数据
let interval = 1000; //循环间隔
let eventLoop = {};
let loopInistance;
let _checkEle;

eventLoop.addEle = function (ele) {
  loopEle.push(ele);
  if (!loopInistance) {
    loopInistance = getLoop();
  }
};

eventLoop.removeEle = function (ele) {
  let index = loopEle.indexOf(ele);
  if (index === -1) {
    return;
  }
  loopEle.splice(index, 1);
  if (loopEle.length === 0) {
    clearTimeout(loopInistance);
  }
};

eventLoop.setCheckEle = function (checkEle) {
  if (typeof checkEle === 'function') {
    _checkEle = checkEle;
  }
};

function getLoop() {
  return setTimeout(function () {
    if (!_checkEle) {
      return;
    }
    loop();
  }, interval);
};

function loop() {
  loopInistance = getLoop();
  for (var k in loopEle) {
    if (_checkEle(loopEle[k])) {
      eventLoop.removeEle(loopEle[k]);
    }
  }
};

export default eventLoop;