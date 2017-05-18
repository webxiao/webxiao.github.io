$(function(){
	// 选项卡
	const xuan=$(".xuan");
	const kuang=$(".kuang");
	for(let i=0;i<xuan.length;i++){
		xuan[i].onclick=function(){
			for(let j=0;j<kuang.length;j++){
				xuan[j].classList.remove("active2");
			}
			xuan[i].classList.add("active2");
		}
	}
	// 最下边的轮播
	zuolunbo(".yi",".zuizin1",".zuizin1",[],".lunbodian li",".zjt",".yjt",3000,"active3");


//	 购物车加减
	const jia=document.querySelector(".jia");
	const jian=document.querySelector(".jian");
	const text=document.querySelector(".text");
	var num=1;
	jia.onclick=function(){
		num++;
		text.value=num;
	}
	jian.onclick=function(){
		num--;
		if(num<1){
			num=1;
		}
        text.value=num;
	}


	// 放大镜
	var box=document.querySelector(".cptu");
    var mask=document.querySelector(".mask");
    var show=document.querySelector(".xianshi");
    var showimg=document.querySelectorAll(".xianshi img");
    box.onmouseover=function(){
        mask.style.display="block";
        show.style.display="block";
    }
    box.onmouseout=function(){
        mask.style.display="none";
        show.style.display="none";
    }
    box.onmousemove=function(e){
        var ox=e.offsetX;
        var oy=e.offsetY;
        var [mx,my]=[ox-mask.offsetWidth/2,oy-mask.offsetHeight/2];
        if(mx<0){
            mx=0;
        }
        if(mx>box.offsetWidth-mask.offsetWidth){
            mx=box.offsetWidth-mask.offsetWidth;
        }
        if(my<0){
            my=0;
        }
        if(my>box.offsetHeight-mask.offsetHeight){
            my=box.offsetHeight-mask.offsetHeight;
        }
        mask.style.left=mx+"px";
        mask.style.top=my+"px";
        for(let i=0;i<showimg.length;i++){
            showimg[i].style.marginLeft=-2*mx+"px";
            showimg[i].style.marginTop=-2*my+"px";
        } 
    }


    // 详情   选谁看谁
    const stu=$(".st1");
    const xtu=$(".cpxtz");
    const xstu=$(".xs");
    for(let i=0;i<xtu.length;i++){
        xtu[i].onclick=function(){
            for(let j=0;j<xtu.length;j++){
                stu[j].style.zIndex=1;
                xstu[j].style.zIndex=1;
            }
           stu[i].style.zIndex=2; 
           xstu[i].style.zIndex=2;
        }
    }
})