$(function(){
    //轮播图
    const img1=$(".lunboBox ul")[0];
    const jiantou=$(".xiajiantou")[0];
    const daBox=$(".lunboBox")[0];
        //从下往上轮播
    var t=setInterval(move,2000);
    function move() {
        animate(img1,{marginTop:-650},500,function(){
            let first=img1.firstElementChild;
            img1.appendChild(first);
            img1.style.marginTop=0;
        })
    }
    jiantou.onclick=function(){
        clearInterval(t);
        move();
    }
    daBox.onmouseover=function () {
        clearInterval(t);
    }
    daBox.onmouseout=function () {
        t=setInterval(move,2000);
    }

    //头部hover
    const headerzi=$(".headerzi");
    for(let i=0;i<headerzi.length;i++){
        headerzi[i].onmouseover=function(){
            for(let j=0;j<headerzi.length;j++){
                headerzi[j].classList.remove("active");
            }
            headerzi[i].classList.add("active");
        }
    }

    //立即尝鲜hover
    const pinchang=$(".pinchang");
    for(let i=0;i<pinchang.length;i++){
        pinchang[i].onmouseover=function(){
            for(let j=0;j<pinchang.length;j++){
                pinchang[j].classList.remove("active1");
            }
            pinchang[i].classList.add("active1");
        }
    }

    //立即尝鲜轮播

        //箭头出现
    const zuojian=$(".zuojian")[0];
    const youjian=$(".youjian")[0];
    // const box1=$(".proneirong")[0];
    const bigbox=$(".neikuan5")[0];
    bigbox.onmouseover=function () {
        zuojian.style.display="block";
        youjian.style.display="block";
    }
    bigbox.onmouseout=function () {
        zuojian.style.display="none";
        youjian.style.display="none";
    }
        //内容轮播
    const uls=$(".imgBox")[0];
    var flag=true;
    function dong(type="r"){
        flag=false;
        if(type=="r"){
            animate(uls,{marginLeft:-1200},500,function(){
                let first=uls.firstElementChild;
                uls.appendChild(first);
                uls.style.marginLeft=0;
                flag=true;
            });
        }else if(type=="l"){
            let last=uls.lastElementChild;
            let first=uls.firstElementChild;
            uls.insertBefore(last,first);
            uls.style.marginLeft="-1200px";
            animate(uls,{marginLeft:0},500,
                function(){
                    flag=true;
                });
        }
    }
    zuojian.onclick=function(){
        dong("l");
    }
    youjian.onclick=function(){
        dong("r");
    }
})