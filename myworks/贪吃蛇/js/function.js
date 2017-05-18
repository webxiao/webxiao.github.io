	// 选项卡   btn选项卡按钮  con选项卡内容
	function xuanxiangka(btn,con){
		for(let i=0;i<btn.length;i++){
			btn[i].onmouseover=function(){
				con[i].style.display="block";
			}
			btn[i].onmouseout=function(){
				con[i].style.display="none";
			}
		}
	}
	// 遮罩  btn是底下的块，con是遮罩的块
	function zhezhao(btn,con){
		for(let i=0;i<btn.length;i++){
			btn[i].onmouseover=function(){
				con[i].style.display="block";
			}
			btn[i].onmouseout=function(){
				con[i].style.display="none";
			}
		}
	}
	//函数简化
	function $(select,obj=document){
		if(typeof select=="function"){
			window.addEventListener("load",select,false);
		}else if(typeof select=="string"){
			if(/^<\w+>$/.test(select)){
				return document.createElement(select.slice(1,-1));
			}else{
				return obj.querySelectorAll(select);
			}
			
		}
	}
	//层级轮播
	// pic轮波图，填字符串的选择器；
	// bigbannerBox，通屏的banner盒子，填字符串的选择器；
	// lis，轮波点，填字符串的选择器；
	// colorArr，通屏banner盒子的所有颜色，传的是数组；["red","blue","green"]；
	// zuojian 左箭头
	// youjian 右箭头
	// tuactiveZ,图片选中层级；
	// liactivebgColor,轮波点选中颜色；
	// lunboTime,时间间隔；
	// tuZ,图片普通层级；
	// lisColor,轮波点普通颜色；
	// bannertushuliang,banner图的数量-1；
		function Zlunbo(pic,bigbannerBox,lis,colorArr,zuojian,youjian,tuactiveZ,liactivebgColor,lunboTime,tuZ,lisColor,bannertushuliang){
			const tupian=$(pic);
			const banner=$(bigbannerBox)[0];
			const li=$(lis);
			const color=colorArr;
			const leftBtn=$(zuojian)[0];
			const rightBtn=$(youjian)[0];
			tupian[0].style.zIndex=tuactiveZ;
			li[0].style.background=liactivebgColor;
			banner.style.background=color[0];
			var num=0;
			var t=setInterval(move,lunboTime);
			function move(type="r"){
				if(type=="r"){
					num++;
					if(num>bannertushuliang){
						num=0;
					}
					for(let i=0;i<tupian.length;i++){
						tupian[i].style.zIndex=tuZ;
						li[i].style.background=lisColor;
					}
					tupian[num].style.zIndex=tuactiveZ;
					li[num].style.background=liactivebgColor;
					banner.style.background=color[num];
					}
				if(type=="l"){
					num--;
					if(num<0){
						num=tupian.length-1;
					}
					for(let i=0;i<tupian.length;i++){
						tupian[i].style.zIndex=tuZ;
						li[i].style.background=lisColor;
					}
					tupian[num].style.zIndex=tuactiveZ;
					li[num].style.background=liactivebgColor;
					banner.style.background=color[num];
					}

			}
			banner.onmouseover=function(){
				clearInterval(t);
			}
			banner.onmouseout=function(){
				t=setInterval(move,lunboTime);
			}
			leftBtn.onclick=function(){
				move("l");
			}
			rightBtn.onclick=function(){
				move("r");
			}
			for(let j=0;j<li.length;j++){
				li[j].onmouseover=function(){
					for(let i=0;i<tupian.length;i++){
						tupian[i].style.zIndex=tuZ;
						li[i].style.background=lisColor;
					}
				tupian[j].style.zIndex=tuactiveZ;
				li[j].style.background=liactivebgColor;
				banner.style.background=color[j];
				num=j;
				}
			}
		}
	// 左右轮播
	// lunbotupian 轮播图
	// lunbodakuai 放轮播块的大盒子
	// lunbokuai 放轮播图的轮播快
	// colorArr 放轮播块的大盒子的背景颜色集合
	// lunbodian 轮播点
	// zuojian 左按钮
	// youjian 右按钮
	// lunboTime 轮播时间
	// activeClass 给第一个轮播点加上的类名，定义轮播点选中的颜色
	function zuolunbo(lunbotupian,lunbodakuai,lunbokuai,colorArr,lunbodian,zuojian,youjian,lunboTime,activeClass){
		const tu=document.querySelectorAll(lunbotupian);
		const banner=document.querySelector(lunbodakuai);
		const img=document.querySelector(lunbokuai);
		const color=colorArr;
		const lis=document.querySelectorAll(lunbodian);
		const imgw=parseInt(window.getComputedStyle(img,null).width);
		const zuobtn=document.querySelector(zuojian);
		const youbtn=document.querySelector(youjian);
		for(i=0;i<tu.length;i++){
			tu[i].style.left=imgw+"px";
		}
		tu[0].style.left=0;
		banner.style.background=color[0];
		var now=0;
		var next=1;
		var t=setInterval(move,lunboTime);
		function move(type="r"){
			flag=false;
			if(type=="r"){
				animate(tu[now],{left:-imgw},500);
				tu[next].style.left=imgw+"px";
				animate(tu[next],{left:0},500,function(){
					flag=true;
					now=next;
					next++;			
					if(next>tu.length-1){
					next=0;
					}
				})
				banner.style.background=color[now];
			}else if(type=="l"){
				animate(tu[now],{left:imgw},500);
				tu[next].style.left=-imgw+"px";
				animate(tu[next],{left:0},500,function(){
					flag=true;
					now=next;
					next--;			
					if(next<0){
					next=tu.length-1;
					}
				})
				banner.style.background=color[now];
			}
			
			lis[now].classList.remove(activeClass);
			lis[next].classList.add(activeClass);
		}
		banner.onmouseover=function(){
			clearInterval(t);
		}
		banner.onmouseout=function(){
			t=setInterval(move,lunboTime);
		}
		zuobtn.onclick=function(){
			if(flag){
				move("l");	
			}
		}
		youbtn.onclick=function(){
			if(flag){
				move("r");	
			}
		}
		for(let i=0;i<tu.length;i++){
			lis[i].onmouseover=function(){
				if(flag){
					if(i<now){
						next=i;
						move("l");
					}else if(i>now){
						next=i;
						move("r");
					}
				}
			}
		}
	}
	//节点左右轮播
	// imgBox:放banner图的盒子，宽度要设长；
	// zuojian:左边按钮；
	// youjian:右边按钮；
	// bigBox:放banner图和按钮的盒子；
	// bannerTu:要轮播的banner图；
	// num:一次要轮播的图片数量；
	// lunboshijian:轮播时间；
	// donghuashijian：动画完成的时间
	function jiedianlunbo(imgBox,zuojian,youjian,bigBox,bannerTu,num,lunboshijian,donghuashijian){
		const box=$(imgBox)[0];
		const leftBtn=$(zuojian)[0];
		const rightBtn=$(youjian)[0];
		const banner=$(bigBox)[0];
		const img=$(bannerTu)[0];
		const imgw=parseInt(window.getComputedStyle(img,null).width);
		var flag=true;
		let n=num;
		var t=setInterval(move,lunboshijian);
		function move(type="l"){
			flag=false;
			if(type=="r"){
				animate(box,{marginLeft:-imgw},donghuashijian,function(){
					for(let i=0;i<n;i++){
						let first=box.firstElementChild;
						box.appendChild(first);
					}
					box.style.marginLeft=0;
					flag=true;
				});
			}else if(type=="l"){
				for(let i=0;i<n;i++){
					let last=box.lastElementChild;
					let first=box.firstElementChild;
					box.insertBefore(last,first);
				}
				box.style.marginLeft=-imgw+"px";
				animate(box,{marginLeft:0},donghuashijian,
				function(){
					flag=true;
				});
			}
			
		}
		banner.onmouseover=function(){
			clearInterval(t);
		}
		banner.onmouseout=function(){
			t=setInterval(move,1000);
		}
		leftBtn.onclick=function(){
			if(flag){
				move("l");
			}
		}
		rightBtn.onclick=function(){
			if(flag){
				move("r");
			}
		}
		window.onblur=function(){
			clearInterval(t);
		}
		window.onfocus=function(){
			t=setInterval(move,1000);
		}	
	}

	//事件触发后执行一次
	// obj：事件源
	// type：触发事件（click，onmouseover）
	// fn：事件执行程序

	function one(obj,type,fn){
			//添加第一个type事件  执行fn
			obj.addEventListener(type,fn,false);
			//添加第一个type事件  执行clear
			obj.addEventListener(type,clear,false);
			function clear(){
				//清除type类型事件中的fn处理程序
				obj.removeEventListener(type,fn,false);
				//清除type类型事件中的clear处理程序
				obj.removeEventListener(type,clear,false);
			}
		}
	// 拖拽
	// hezi：要拖拽的块
	function tuozhuai(hezi){
		const box=$(hezi);
		const winW=document.documentElement.clientWidth;
		const winH=document.documentElement.clientHeight;

		for(let i=0;i<box.length;i++){
			box[i].style.position="absolute";
			const boxW=box[i].offsetWidth;
			const boxH=box[i].offsetHeight;
			box[i].addEventListener("mousedown",down,false);
			let x;
			let y;
			let boxx;
			let boxy;
			function down(e){
				x=e.clientX;
				y=e.clientY;
				boxx=box[i].offsetLeft;
				boxy=box[i].offsetTop;
				window.addEventListener("mousemove",move,false);
				window.addEventListener("mouseup",up,false);
			}
			function move(e){
				let mx=e.clientX;
				let my=e.clientY;
				let chax=mx-x;
				let chay=my-y;
				let lefts=boxx+chax;
				let tops=boxy+chay;
				if(lefts<=0){
					lefts=0;
				}else if(lefts>=winW-boxW){
					lefts=winW-boxW;
				}
				if(tops<=0){
					tops=0;
				}else if(tops>=winH-boxH){
					tops=winH-boxH;
				}
				box[i].style.left=lefts+"px";
				box[i].style.top=tops+"px";
			}
			function up(e){
				window.removeEventListener("mousemove",move,false);
				window.removeEventListener("mouseup",up,false);
			}
		}
	}