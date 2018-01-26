import checkImg from './check-img';

let zzLazyload = {
  bind: function (el) {
    var src = el.src;
    el.src = '';
    checkImg.addEle(el, src);
  },
  unbind: function (el) {
    checkImg.removeEle(el);
  }
};

export default zzLazyload;
