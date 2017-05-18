window.onload=function(){
	const zxzc=$(".zxzc")[0];
	const cjwt=$(".cjwt")[0];
	const tsjy=$(".tsjy")[0];
	zxzc.onmouseover=function(){
		animate(zxzc,{left:-84},200);
	}
	cjwt.onmouseover=function(){
		animate(cjwt,{left:-84},200);
	}
	tsjy.onmouseover=function(){
		animate(tsjy,{left:-84},200);
	}
	zxzc.onmouseout=function(){
		animate(zxzc,{left:-20},200);
	}
	cjwt.onmouseout=function(){
		animate(cjwt,{left:-20},200);
	}
	tsjy.onmouseout=function(){
		animate(tsjy,{left:-20},200);
	}



    //公告滚动
    const uls=$(".gonggao ul")[0];
    const lis=$(".gonggao ul li");
    const qhbtn=$(".qhbtn")[0];
    const zuo1=$(".zuo1")[0];
    const you1=$(".you1")[0];
    var t;
    var timeOut=null;
    var moveRight=function(){
    	let first=uls.firstElementChild;
    	uls.appendChild(first);
    }
    var moveLeft = function () {
        let first=uls.firstElementChild;
        let last=uls.lastElementChild;
        uls.insertBefore(last,first);
    }
    function dong() {
        if (t) {
            clearInterval(t);
        }
        t = setInterval(moveRight, 2000);
    }
    function ting() {
        clearInterval(t);
    }
    dong();
    qhbtn.onmouseover=function(){
    	ting();
    }
    qhbtn.onmouseout=function(){
    	dong();
    }
    uls.onmouseover=function(){
    	clearInterval(t);
    }
    uls.onmouseout=function(){
    	t = setInterval(moveRight, 2000);
    }
    zuo1.onclick=function(){
    	if(t){
    		clearInterval(t);
    	}
    	moveLeft();
    }
    
  	you1.onclick=function(){
  		if(t){
    		clearInterval(t);
    	}
    	moveRight();
  	}

    //轮播图
    zuolunbo(".img a",".bannerN",".img",[],".lunbodian",".zuo",".you",2000,"active1")

    //轮播图下轮播
    const dabox=$(".bannerxia .neikuan")[0];
    const lcbx=$(".lcbx")[0];
    const lcbxtu=$(".lcbx ul")[0];
    var tl=setInterval(you,1500);
    function you(){
        animate(lcbxtu,{left:-295},500,function(){
            let first=lcbxtu.firstElementChild;
            lcbxtu.appendChild(first);
            lcbxtu.style.left=0;
        })
    }
    function zuo(){
        lcbxtu.style.left=-295+"px";
        let first=lcbxtu.firstElementChild;
        let last=lcbxtu.lastElementChild;
        lcbxtu.insertBefore(last,first);
        animate(lcbxtu,{left:0},500);
    }
    dabox.onmouseover=function(){
        clearInterval(tl);
    }
    dabox.onmouseout=function(){
        tl=setInterval(you,1500);
    }
    const zuob=$(".zuobtn")[0];
    const youb=$(".youbtn")[0];
    zuob.onclick=function(){
        zuo();
    }
    youb.onclick=function(){
        you();
    }

    //title快速显示
    var x = 10, y = 20;
    const img=$(".img1");
    function showTitle() { 
        for(let i=0;i<img.length;i++){
            img[i].onmouseover=function (e) {
                this.myTitle = this.title;
                this.title = "";
                var showdiv = document.createElement("div");
                showdiv.classList.add("showdiv");
                document.body.appendChild(showdiv);
                const showdiv1=$(".showdiv");
                for(let j=0;j<showdiv1.length;j++){
                    showdiv1[j].innerHTML=this.myTitle;
                    showdiv1[j].style.top=(e.pageY + y) + "px";
                    showdiv1[j].style.left= (e.pageX + x) + "px";
                    showdiv1[j].show="fast";
                }
                
            }
            img[i].onmouseout=function(){
                this.title = this.myTitle;
                const showdiv1=$(".showdiv");
                for(let j=0;j<showdiv1.length;j++){
                    showdiv1[j].remove();
                }
            }
            img[i].onmousemove=function(e){
                const showdiv1=$(".showdiv");
                for(let j=0;j<showdiv1.length;j++){
                    showdiv1[j].style.top=(e.pageY + y) + "px";
                    showdiv1[j].style.left= (e.pageX + x) + "px";
                }
            }
        }  
    }
    showTitle();
    //    太原点击
    const sfx=$(".sfx")[0];
    const ct=$(".ct")[0];
    const city=$(".city")[0];
    const qb=$(".blue")[0];
    sfx.onclick=function(e){
        e.stopPropagation();
        ct.style.display="block";
    }
    qb.onclick=function(e){
        e.stopPropagation();
        city.style.display="block";
        ct.style.display="none";
    }
    ct.onclick=function(e){
        e.stopPropagation();
        ct.style.display="none";
    }
    city.onclick=function(e){
        e.stopPropagation();
        ct.style.display="none";
        city.style.display="none";
    }
    document.body.onclick=function(){
        ct.style.display="none";
        city.style.display="none";
    }


    //banner右点击事件

    const chu=$(".dianchulai")[0];
    const aa=$(".aa")[0];
    const bb=$(".bb")[0];
    const fanhui=$(".fanhui")[0];
    chu.onclick=function(){
        aa.style.zIndex=1;
        let lisa=aa.children;
        let lisb=bb.children;
        for(let i=0;i<lisa.length;i++){
            lisa[i].style.transform='rotateY(180deg)';
            lisb[i].style.transform='rotateY(0deg)';
        }
        bb.style.zIndex=5;

    }
    fanhui.onclick=function(){
        aa.style.zIndex=5;
        let lisa=aa.children;
        let lisb=bb.children;
        for(let i=0;i<lisa.length;i++){
            lisa[i].style.transform='rotateY(0deg)';
            lisb[i].style.transform='rotateY(180deg)';
        }
        bb.style.zIndex=1;
    }
}
