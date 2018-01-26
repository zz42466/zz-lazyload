import addEle from './check-img';

let zzLazyload = {
    bind: function (el){
        var src = el.src;
        el.src = '';
        addEle(el, src);
    }
};

export default zzLazyload;
