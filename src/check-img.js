import eventLoop from './event-loop';

let checkEle = [];
let screenWidth = 0;
let screenHeight = 0;

//判断元素是否在显示中
function isShow(ele) {
  let bound = ele.img.getBoundingClientRect();
  if (bound.left > 0 && bound.left < window.innerWidth &&
    bound.top > 0 && bound.top < window.innerHeight) {
    //在src加载后替换src
    let tempImg = new Image();
    tempImg.src = ele.src;
    tempImg.onload = function () {
      ele.img.src = ele.src;
    };
    return true;
  }
  return false;
}

eventLoop.setCheckEle(isShow);
let checkImg = {};
checkImg.addEle = function (img, src) {
  let ele = { img, src };
  eventLoop.addEle(ele);
  checkEle.push(ele);
};
checkImg.removeEle = function (el) {
  for (let k in checkEle) {
    if (checkEle[k]['img'] === el) {
      eventLoop.removeEle(checkEle[k]);
    }
  }
};

export default checkImg;