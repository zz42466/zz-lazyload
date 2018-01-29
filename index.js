import zzLazyload from './src/zz-lazyload';

zzLazyload.install = function (Vue, options) {
  if (options.defaultSrc) {
    zzLazyload.setDefaultSrc(options.defaultSrc);
  }

  Vue.directive('zz-lazyload', zzLazyload);
};

export default zzLazyload;