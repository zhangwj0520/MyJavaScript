var oDiv=document.getElementById("box");
var oUl=oDiv.getElementsByTagName("ul")[0];
var oLi=oUl.getElementsByTagName("li");

oUl.width=oLi[0].offsetWidth*oLi.length;
//4张图片的宽度
/*
* 1.offsetWidth返回padding+border+width属性值之和，
* style.width返回值就是定义的width属性值。
* 2.offsetWidth属性仅是可读属性，而style.width是可读写的。
* 3.offsetWidth属性返回值是整数，而style.width的返回值是字符串，并且带有单位。
* 4.style.width仅能返回以style方式定义的内部样式表的width属性值。*/

oUl.innerHTML=oUl.innerHTML+oUl.innerHTML+oUl.innerHTML;
oUl.style.left=-oUl.width+"px";
oUl.style.width=oUl.width*3+'px';

var pTimer=setInterval(move,30);
oUl.onmouseover=function () {
    clearInterval(pTimer);
    console.log("清除"+pTimer);
};
oUl.onmouseleave=function () {
    pTimer=setInterval(move,30);
    console.log("启动"+pTimer);
};


function move() {
    if(oUl.offsetLeft<-oUl.width){
        oUl.style.left=0+"px";
    }
    else{
        oUl.style.left=oUl.offsetLeft-2+"px";
    }
}



