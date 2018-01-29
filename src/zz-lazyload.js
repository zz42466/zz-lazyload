import checkImg from './check-img';

let _defaultSrc = '#';

let zzLazyload = {
  bind: function (el) {
    if (el.nodeName !== 'IMG') {
      return;
    }
    var src = el.src;
    el.src = _defaultSrc;
    checkImg.addEle(el, src);
  },
  unbind: function (el) {
    checkImg.removeEle(el);
  }
};

zzLazyload.setDefaultSrc = function (defaultSrc) {
  if (typeof defaultSrc === 'string') {
    _defaultSrc = defaultSrc;
  }
};

export default zzLazyload;