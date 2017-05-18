$(function(){
	Zlunbo(".bannertu img",".beijing",".lunbodian",["#e8e8e8","#f4d9c4","#e8e8e8","#e8e8e8","#e8e8e8","#910fff"],2,"#fff",1500,1,"#666",5,0)
	// const xiakuai=$(".shangbiao");
	// const shangkuai=$(".zhezhao");
	// zhezhao(xiakuai,shangkuai);
	const btn1=$(".taobao");
	const con1=$(".xiaxuankuang1");
	xuanxiangka(btn1,con1);
	const btn2=$(".shoucang");
	const con2=$(".xiaxuankuang2");
	xuanxiangka(btn2,con2);
	const btn3=$(".shouji");
	const con3=$(".xiaxuankuang3");
	xuanxiangka(btn3,con3);
	const btn4=$(".shangjia");
	const con4=$(".xiaxuankuang4");
	xuanxiangka(btn4,con4);
	const btn5=$(".daohang");
	const con5=$(".xiaxuankuang5");
	xuanxiangka(btn5,con5);




	//楼层跳转
	const floor=$("section");
	const btn=$(".louceng");
	const btBox=$(".loucengbox")[0];
	const db=$(".loucenga")[0];
	const color=["#EA5F8D","#0AA6E8","#64C333","#F15453","#19C8A9","#F7A945","#000","#F7A945"];
	const nav=$(".yincang")[0];
	let sobj=document.body;
	const CH=document.documentElement.clientHeight;
	let flagx=true;
	let flags=false;
	
	for(let i=0;i<floor.length;i++){
		btn[i].onclick=function(){
			animate(sobj,{scrollTop:floor[i].offsetTop},500);
		}
		
	}
	db.onclick=function(){
		animate(sobj,{scrollTop:0},500);
	}
	window.onscroll=function(){
		if(sobj.scrollTop>=662){
			if(flagx){
				flagx=false;
				flags=true;
				animate(nav,{top:0},500,function(){
					flagx=true;
				})
			}
			
		}else{
			if(flags){
				flags=false;
				flagx=true;
				animate(nav,{top:-50},500,function(){
					flags=true;
					})
				}
			
		}
			if(sobj.scrollTop+0.5*CH>=floor[0].offsetTop){
				btBox.style.display="block";
				animate(btBox,{height:369,width:36},500);
			}else{
				// btBox.style.display="none";
				animate(btBox,{height:0,width:0},500);
			}

		for(let i=0;i<floor.length;i++){
			if(sobj.scrollTop+0.5*CH>=floor[i].offsetTop){
				for(let j=0;j<floor.length;j++){
					btn[j].style.background="#666";
				}
				btn[i].style.background=color[i];
			}
			if(sobj.scrollTop+CH>=floor[i].offsetTop){
				let img=$("img",floor[i]);
				for(let j=0;j<img.length;j++){
					img[j].src=img[j].getAttribute("src1");
				}
			}
		}
	}
	for(let k=0;k<floor.length;k++){
		btn[k].onmouseover=function(){
			for(let i=0;i<floor.length;i++){
				if(sobj.scrollTop+0.5*CH>=floor[i].offsetTop){
					for(let j=0;j<floor.length;j++){
						btn[j].style.background="#666";
					}
					btn[i].style.background=color[i];
				}
			}
			btn[k].style.background=color[k];
		}
		btn[k].onmouseout=function(){
			btn[k].style.background="#666";
			for(let i=0;i<floor.length;i++){
				if(sobj.scrollTop+0.5*CH>=floor[i].offsetTop){
					for(let j=0;j<floor.length;j++){
						btn[j].style.background="#666";	
					}
					
					btn[i].style.background=color[i];
				}
			}	
		}
	}
	//返回顶部
	var dingbu=$('.dingbu')[0];
	dingbu.onclick=function(){
		var obj=document.documentElement.scrollTop==0?document.body:document.documentElement;
		animate(obj,{scrollTop:0},800)
	}

	//右固定栏
	var  item=$('.gudinga');
	var  che=$('.tequan');
	for(var i=0;i<item.length;i++){
		item[i].index=i;
		item[i].onmouseover=function(){
			var num = this.index;
			che[num].style.display = "block";
			animate(che[num],{left:-80,opacity:1});
			
		}
		item[i].onmouseout=function(){
			var num = this.index;
			animate(che[num],{left:-120,opacity:0},function(){
				this.style.display="none";
			})
			
		}
	}
	// 返回顶部
	var fanhuidingbu=$('.fandingbu')[0];
	fanhuidingbu.onclick=function(){
		var obj=document.documentElement.scrollTop==0?document.body:document.documentElement;
		animate(obj,{scrollTop:0},800)
	}

	//直播轮播
	const zhibo=$(".zhiboshangtu img");
	console.log(zhibo);
	const zhiboxia=$(".zhiboxiatu");
	for(let i=0;i<zhiboxia.length;i++){
		zhiboxia[i].onmouseover=function(){
			for(let j=0;j<zhibo.length;j++){
				zhibo[j].style.zIndex=1;
			}
			zhibo[i].style.zIndex=2;
		}
	}

	//字轮播
	const box=$(".dakuaier");
	const zibox=$(".dakuaier ul");
		let t=setInterval(move,2000);
		function move(){
			for(let i=0;i<zibox.length;i++){
				animate(zibox[i],{top:-30},500,function(){
					let first=zibox[i].firstElementChild;
					zibox[i].appendChild(first);
					zibox[i].style.top=0;
				});
			
			}
			
		}
		for(let i=0;i<zibox.length;i++){
			zibox[i].onmouseover=function(){
				clearInterval(t);
			}
			zibox[i].onmouseout=function(){
				t=setInterval(move,2000);
			}
		}


	//直播图字轮播
	const zbbox=$(".zblunzi")[0];
	const zbul=$(".zblunzi ul")[0];
	let t1=setInterval(move1,2000);
	let t2=setInterval(move2,4000);
	let t3=setInterval(move3,6000);
	let t4=setInterval(move4,8000);
	function move1(){
		animate(zbul,{top:-40},500);	
	}
	function move2(){
		animate(zbul,{top:-80},500);	
	}
	function move3(){
		animate(zbul,{top:-40},500);	
	}
	function move4(){
		animate(zbul,{top:0},500);	
	}
	zbbox.onmouseover=function(){
		clearInterval(t1);
		clearInterval(t2);
		clearInterval(t3);
		clearInterval(t4);
	}
	zbbox.onmouseout=function(){
		t1=setInterval(move,2000);
		t2=setInterval(move2,4000);
		t3=setInterval(move3,6000);
	    t4=setInterval(move4,8000);
	}


	//直播图图轮播
	const zbBigbox=$(".zbdk")[0];
	const zbBigul=$(".zbbul")[0];
	const leftBtn=$(".zbzuojian")[0];
	const rightBtn=$(".zbyoujian")[0];
	rightBtn.onclick=function(){
		animate(zbBigul,{left:-490},500);
		rightBtn.style.display="none";
		leftBtn.style.display="block";
			
	}
	leftBtn.onclick=function(){
		animate(zbBigul,{left:0},500);
		leftBtn.style.display="none";
		rightBtn.style.display="block";
		
	}
	//换一批旋转
	const dianji=$(".shangbiao:last-child")[0];
	const dong=$(".shangbiao img");
	console.log(dong)
	let flag=true;
	dianji.onclick=function(){
		if(flag){
			flag=false;
			for(let i=0;i<dong.length;i++){
				dong[i].style.transform="rotateY(0deg)";
				dong[i].style.transform="rotateY(360deg)";
			}
		}else{
			flag=true;
			for(let i=0;i<dong.length;i++){
				dong[i].style.transform="rotateY(360deg)";
				dong[i].style.transform="rotateY(0deg)";
			}
		}
	}





})


