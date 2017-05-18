
    const inner=document.querySelector(".tu");
    const box=document.querySelector(".banner");
    const lis=document.querySelectorAll(".tu img");
    var sx;
    var mx;//当前拖拽的距离
    var l=box.offsetWidth;
    var i=0;//当前在第几张
    var dir="";//方向
    var movex=0;//当前inner已经移动的距离
    var startTime;
    inner.addEventListener("touchstart",function(e){
        startTime=e.timestamp;
        sx=e.changedTouches[0].clientX;
        inner.style.transition="none";
    });
    inner.addEventListener("touchmove",function(e){
        var cx=e.changedTouches[0].clientX;
        mx=cx-sx;
        dir=(mx<0?"left":"right");
        inner.style.transform=`translateX(${movex+mx}px)`
    });
    inner.addEventListener("touchend",function(e){
        var now=e.timestamp;
        var chat=now-startTime;
        if(Math.abs(mx)>l/3||chat<300){
            if(dir=="left"){
                i++;
                if(i>lis.length-1){
                    i--;
                }
            }else{
                i--;
                if(i<0){
                    i++;
                }
            }
        }
        movex=-i*l;
        inner.style.transition="all 1s";
        inner.style.transform=`translateX(${movex}px)`;
    })

