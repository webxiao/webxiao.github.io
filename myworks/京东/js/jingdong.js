$(function(){
	zuolunbo(".bannermt a img",".bannermt",".bannermt",[],".anniu",".bannerleft",".bannerright",1500,"first1");
	const btn=$(".dingwei");
	const con=$(".xialakuai1");
	xuanxiangka(btn,con);
	const btn1=$(".jingdong");
	const con1=$(".xialakuai2");
	xuanxiangka(btn1,con1);
	const btn2=$(".kehu");
	const con2=$(".xialakuai3");
	xuanxiangka(btn2,con2);
	const btn3=$(".daohang");
	const con3=$(".xialakuai4");
	xuanxiangka(btn3,con3);


	// 搜索
var flag=true;
var yincang=$(".yincang")[0]
// 楼层跳转
			const CH=document.documentElement.clientHeight;
			var floors=$(".floor");
			var louceng=$(".louceng");
			var temp=louceng[0];
			for (var i=0; i<louceng.length;i++) {
				louceng[i].index=i;
				louceng[i].onclick=function(){
					document.documentElement.scrollTop = 1;
					var ot=floors[this.index].offsetTop;
					var obj=document.documentElement.scrollTop==0?document.body:document.documentElement;	
					document.documentElement.scrollTop = 0;
					animate(obj,{scrollTop:ot},300);
					temp.style.background="";
					this.style.background="#D70B1C";
					temp=this;
				}
			}
			var t;
			window.onscroll=function(){
			document.documentElement.scrollTop = 1;
			var obj=document.documentElement.scrollTop==0?document.body:document.documentElement;
		    var st=obj.scrollTop;
		    var zuoguding=$(".zuoguding")[0];
		    document.documentElement.scrollTop = 0;

		    clearTimeout(t);
		    t=setTimeout(function()
		    	{if (st>=floors[0].offsetTop-0.5*CH){
			    	zuoguding.style.display="block";
			    	animate(zuoguding,{opacity:1},1000);
				    }
			    else{
			    	animate(zuoguding,{opacity:0},300,function(){
			    		zuoguding.style.display="none";
			    	});
			    }
		    	for (var i = 0; i < floors.length-1; i++) {
		    		if (st>=floors[i].offsetTop-0.5*CH&&st<floors[i+1].offsetTop){
			    		temp.style.background="";
			    		louceng[i].style.background="#D70B1C";
			    		temp=louceng[i];
			    		}
		    	}
		    	if (st>=floors[i].offsetTop-0.5*CH) {
		    		temp.style.background="";
		    		louceng[i].style.background="#D70B1C";
		    		temp=louceng[i];
		    	}
		    },200)



		    var obj=document.documentElement.scrollTop==0?document.body:document.documentElement;

				if(obj.scrollTop>600){
					if(flag){
						flag=false;
					animate(yincang,{top:0})
					}
					
				}else{
					flag=true;
					animate(yincang,{top:-50})
				}



				for(let i=0;i<floors.length;i++){
					if(st+CH>=floors[i].offsetTop){
						let img=$("img",floors[i]);
						for(let j=0;j<img.length;j++){
							img[j].src=img[j].getAttribute("src1");
						}
					}
				}
			}

	
	// 返回顶部
	var dingbu=$('.dingbu')[0];
	dingbu.onclick=function(){
		var obj=document.documentElement.scrollTop==0?document.body:document.documentElement;
		animate(obj,{scrollTop:0},800)
	}




// 固定定位
	var  item=$('.item');
	var  che=$('.che');
	for(var i=0;i<item.length;i++){
		item[i].index=i;
		item[i].onmouseover=function(){
		animate(che[this.index],{left:-80})
		}
		item[i].onmouseout=function(){
			animate(che[this.index],{left:0})
		}
	}
	// 返回顶部
	var fanhuidingbu=$('.fanhuidingbu')[0];
	fanhuidingbu.onclick=function(){
		var obj=document.documentElement.scrollTop==0?document.body:document.documentElement;
		animate(obj,{scrollTop:0},800)
	}

	//秒杀轮播
	const msBox=$(".miaoshaBox")[0];
	const msul=$(".miaoshaul")[0];
	const zuoBtn=$(".miaoshazuojian")[0];
	const youBtn=$(".miaoshayoujian")[0];
	youBtn.onclick=function(){
		animate(msul,{left:-989},500,function(){
			msul.style.left=0;
			for(let i=0;i<5;i++){
				let first=msul.firstElementChild;
				msul.appendChild(first);
			}
		})
	}
	zuoBtn.onclick=function(){
		for(let i=0;i<5;i++){
			let first=msul.firstElementChild;
			let last=msul.lastElementChild;
			msul.insertBefore(last,first);
		}
		msul.style.left=-989+"px";
		animate(msul,{left:0},500);
	}

	//倒计时
		const dshi=$(".shi")[0];
		const dfen=$(".fen")[0];
		const dmiao=$(".miao")[0];
		class daojishi{
			constructor(s,f,m,nowd){
				this.s=s;
				this.f=f;
				this.m=m;
				this.nowd=nowd;
			}
			play(){
				let map=this.getChaTime();
				this.writes(map);
				this.update();
			}
			getChaTime(){
				let now= new Date();
				let cha=this.nowd.getTime()-now.getTime();
				cha/=1000;
				let s=parseInt(cha/60/60%24);
				let f=parseInt(cha/60%60);
				let m=parseInt(cha%60);
				if(s<10){
					s=0+""+s;
				}
				if(f<10){
					f=0+""+f;
				}
				if(m<10){
					m=0+""+m;
				}
				let map=new Map();
				map.set("s",s);
				map.set("f",f);
				map.set("m",m);
				return map;
			}
			writes(map){
				this.s.innerHTML=map.get("s");
				this.f.innerHTML=map.get("f");
				this.m.innerHTML=map.get("m");
			}
			update(){
				let that=this;
				setInterval(function(){
					let map=that.getChaTime();
					that.writes(map);
				},1000)
			}
		}
		let wy=new Date(2017,5,13,10,0,0);
		let wydjs=new daojishi(dshi,dfen,dmiao,wy);
		wydjs.play();


		//直播轮播
			const tupian=$(".youxptu img");
			const banner=$(".youxp")[0];
			const li=$(".xiaodian");
			const leftBtn=$(".zuoyou")[0];
			const rightBtn=$(".zuoyou1")[0];
			tupian[0].style.zIndex=2;
			li[0].style.background="#fd3131";
			var num=0;
			var t1=setInterval(move,1000);
			function move(type="r"){
				if(type=="r"){
					num++;
					if(num>4){
						num=0;
					}
					for(let i=0;i<tupian.length;i++){
						tupian[i].style.zIndex=1;
						li[i].style.background="#fff";
					}
					tupian[num].style.zIndex=2;
					li[num].style.background="#fd3131";
				}
				if(type=="l"){
					num--;
					if(num<0){
						num=4;
					}
					for(let i=0;i<5;i++){
						tupian[i].style.zIndex=1;
						li[i].style.background="#fff";
					}
					tupian[num].style.zIndex=2;
					li[num].style.background="#fd3131";
				}
			} 
			banner.onmouseover=function(){
				clearInterval(t1);
			}
			banner.onmouseout=function(){
				t1=setInterval(move,1000);
			}
			leftBtn.onclick=function(){
				move("l");
			}
			rightBtn.onclick=function(){
				move("r");
			}
			for(let j=0;j<li.length;j++){
				li[j].onmouseover=function(){
					for(let i=0;i<5;i++){
						tupian[i].style.zIndex=1;
						li[i].style.background="#fff";
					}
				tupian[j].style.zIndex=2;
				li[j].style.background="#fd3131";
				num=j;
				}
			}


	//小商标轮播
	const hongdouul=$(".hongdouul");
	console.log(hongdouul);
	const diyi=$(".diyi");
	console.log(diyi);

	const zuihou=$(".zuihou");
	console.log(zuihou);
	for(let i=0;i<hongdouul.length;i++){
		diyi[i].onclick=function(){
			animate(hongdouul[i],{left:-570},500,function(){
				hongdouul[i].style.left=15+"px";
				for(let i=0;i<6;i++){
					let first=hongdouul[i].firstElementChild;
					hongdouul[i].appendChild(first);
				}
			})
		}
		zuihou[i].onclick=function(){
			for(let i=0;i<6;i++){
				let first=hongdouul[i].firstElementChild;
				let last=hongdouul[i].lastElementChild;
				hongdouul[i].insertBefore(last,first);
			}
			hongdouul[i].style.left=-570+"px";
			animate(hongdouul[i],{left:15},500);
		}
	}
	

	//排行榜换页
	const shangzi=$(".paihangbangbottomt a");
	const yemian=$(".paihangbangbottom");
	const tiao=$(".tiao")[0];
	yemian[0].style.zIndex=2;
	for(let i=0;i<yemian.length;i++){
		shangzi[i].onmouseover=function(){
			for(let j=0;j<yemian.length;j++){
				yemian[j].style.zIndex=1;
			}
		yemian[i].style.zIndex=2;
		animate(tiao,{left:shangzi[i].offsetLeft},500)
		}
	}
	// banner选项卡
	const cx=$(".cx");
	const gonggaobiaoti=$(".gonggaobiaoti");
	const tiaos=$(".tiaos")[0];
	gonggaobiaoti[0].style.zIndex=2;
	for(let i=0;i<cx.length;i++){
		cx[i].onmouseover=function(){
			animate(tiaos,{left:cx[i].offsetLeft-2},300);
			for(let j=0;j<cx.length;j++){
				gonggaobiaoti[j].style.zIndex=1;
			}
			gonggaobiaoti[i].style.zIndex=2;
		}
	}

	// banner右下
	const yhf=$(".yhf");
	console.log(yhf);
	const hf=$(".bannerrb")[0];
	const title=$(".bannerrbt1");
	const gb=$(".cha")[0];
	const kuai=$(".kuaikuai");
	console.log(kuai);
	const tiaoh=$(".tiaoh")[0];
	console.log(tiaoh)
	kuai[0].style.zIndex=2;
	let flagk=true;
	let flagg=false;
	for(let i=0;i<yhf.length;i++){
		yhf[i].onmouseover=function(){
			if(flagk){
				flagk=false;
				flagg=true;
				animate(hf,{height:209},500);
			}
			for(let j=0;j<yhf.length;j++){
				kuai[j].style.zIndex=1;
			}
			kuai[i].style.zIndex=2;
			tiaoh.style.left=title[i].offsetLeft+"px";

		}
		title[i].onmouseover=function(){
				for(let j=0;j<yhf.length;j++){
					kuai[j].style.zIndex=1;
				}
				kuai[i].style.zIndex=2;
				tiaoh.style.left=title[i].offsetLeft+"px";
			}
		gb.onclick=function(){
			if(flagg){
				flagg=false;
				flagk=false;
				animate(hf,{height:0},500)
			}
			
		}
	}

		// const brrb=$(".kuaikuai .brrb");
		// const bannerrbm=$(".kuaikuai .bannerrbm");
		// for(let i=0;i<bannerrbm.length;i++){
		// 	let btn=$("a",bannerrbm[i]);
		// 	brrb[0].style.zIndex=3;
		// 	for(let k=0;k<btn.length;k++){
		// 		btn[k].onmouseover=function(){
		// 			for(let j=0;j<brrb.length;j++){
		// 				brrb[j].style.zIndex=2;
		// 			}
		// 			brrb[k].style.zIndex=3;
		// 		}
		// 	}
		// }


})