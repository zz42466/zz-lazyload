import eventLoop from './event-loop';

let screenWidh = 0;
let screenHight = 0;
function getWH(){
    function getClientHeight(){
        var clientHeight=0;
        if(document.body.clientHeight&&document.documentElement.clientHeight){
            var clientHeight = (document.body.clientHeight<document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;        
        }
        else{
            var clientHeight = (document.body.clientHeight>document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;    
        }
        return clientHeight;
    }
    
    function getClientWidth(){
        var clientWidth=0;
        if(document.body.clientWidth&&document.documentElement.clientWidth){
            var clientWidth = (document.body.clientWidth<document.documentElement.clientWidth)?document.body.clientWidth:document.documentElement.clientWidth;        
        }
        else{
            var clientWidth = (document.body.clientWidth>document.documentElement.clientWidth)?document.body.clientWidth:document.documentElement.clientWidth;    
        }
        return clientWidth;
    }

    screenWidh = getClientWidth();
    screenHight = getClientHeight();
}
getWH(); //初始化屏幕宽高
window.onresize = getWH; //监听屏幕宽高

//判断元素是否在显示中
function isShow(ele){
    let bound = ele.img.getBoundingClientRect();
    if(bound.left > 0 && bound.left < screenWidh &&
        bound.top > 0 && bound.top < screenHight){
            //加载src
            ele.img.src = ele.src;
            return true;
    }
    return false;
}

eventLoop.setCheckEle(isShow);

let addEle = function (img, src){
    eventLoop.addEle({img,src})
};

export default addEle;

