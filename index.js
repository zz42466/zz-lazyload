import zzLazyload from './src/zz-lazyload';

zzLazyload.install = function(Vue, options){
    Vue.directive('zz-lazyload',zzLazyload);
}

export default zzLazyload;