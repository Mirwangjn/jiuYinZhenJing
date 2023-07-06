//实现index索引,使用于dom节点
function dataIndex(domArr){
    domArr.forEach((element,index) => {
        element.setAttribute("data-index",index);
    });
};

/**
 * 实现防抖
 * 单位时间内，频繁发生事件，只执行最后一次
 * 
 */
function debounce(fn,wait){
    let timer;
    return function(){
        if(timer){clearTimeout(timer)};
        timer = setTimeout(fn(),wait)
    }
};
/*\
模仿Jquery
其中拥有隐式迭代
*/
function w(dom){
    if(dom instanceof Array){

    } else{
        return document.querySelectorAll(dom);
    }
    // return 

};
