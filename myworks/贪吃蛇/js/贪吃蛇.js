$(function(){
	const sence=$(".box")[0];
	const kaishi=$(".anniu1")[0];	
	const zanting=$(".anniu2")[0];
	const jixu=$(".anniu3")[0];
	const restart=$(".anniu4")[0];
	const tuichu=$(".anniu5")[0];
	const fenshu=$(".fenshu")[0];
	const fenshu1=$(".fenshu1")[0];
	const fenshuzhi=$(".fenshu span")[0];
	const zuigao=$(".fenshu1 span")[0];
	const jiemian=$(".jiemian")[0];
	const jieshu1=$(".over")[0];
	
	let snake1=new snake(sence,kaishi,fenshu,fenshu1,fenshuzhi,zanting,jixu,jiemian,jieshu1,zuigao);
	restart.onclick=function(){
		
		for(let i=0;i<snake1.she.length;i++){
			snake1.getElement(snake1.she[i]).classList.remove("she");
		}
		snake1.getElement(snake1.foodwz).classList.remove("food");
		snake1.she=[{x:0,y:0},{x:0,y:1},{x:0,y:2}];
		snake1.fenshuzhi.innerHTML=0;
		snake1.sence.innerHTML="";
		clearInterval(snake1.t);
		snake1.shefx="right";
		console.log(snake1)
		snake1.play();

		// snake2.shemove();
		// snake2.kongzhishe();
		// snake2.createfood();
	}
	// function clear(){
	// 	const shea=$(".she");
	// 	const food2=$(".food")[0];
	// 	const gezi=$(".gezi");
	// 	fenshuzhi.innerHTML=0;
	// 	for(let i=0;i<gezi.length;i++){
	// 		gezi[i].style.border=0;
	// 	}
	// 	food2.classList.remove("food");
	// 	for(let i=0;i<shea.length;i++){
	// 		shea[i].classList.remove("she");
	// 	}
	// }
	tuichu.onclick=function(){
		// clear();
		jiemian.style.display="block";
		jieshu1.style.display="none";
	}

})
class snake{
	constructor(sence,kaishi,fenshu,fenshu1,fenshuzhi,zanting,jixu,jiemian,jieshu1,zuigao){
		this.sence=sence;
		this.she=[{x:0,y:0},{x:0,y:1},{x:0,y:2}];
		this.shefx="right";
		this.shekeyflag=true;
		this.kaishi=kaishi;
		this.fenshu=fenshu;
		this.fenshu1=fenshu1;
		this.fenshuzhi=fenshuzhi;
		this.zanting=zanting;
		this.jixu=jixu;
		this.jiemian=jiemian;
		this.jieshu1=jieshu1;
		this.zuigao=zuigao;
		this.kaishi1();
	}
	//开始游戏
	kaishi1(){
		let that=this;
		//点击开始
		this.kaishi.onclick=function(){
			that.jiemian.style.display="none";
			that.fenshu.style.display="block";
			that.jieshu1.style.display="none";
			that.play();	
		}
	}
	play(){
		if(Number(localStorage.zuigao)){
			this.fenshu1.innerHTML=`历史最高：${localStorage.zuigao}`;
			this.maxfen=localStorage.zuigao;
		}else{
			this.maxfen=0;
			this.fenshu1.innerHTML=`历史最高：${this.maxfen}`;
		}
		//建场景
		this.createSence();
		//创建蛇
		this.createShe();
		//蛇跑
		this.shemove();
		//控制蛇
		this.kongzhishe();
		//创建食物
		this.createfood();
		//点击暂停
		this.zanting1();
		//点击继续
		this.jixu1();
	}
	//创建场景
	createSence(){
		// 行
		for(let i=0;i<20;i++){
			// 列
			for(let j=0;j<20;j++){
				let gezi=$("<div>");
				gezi.id=`${i}-${j}`;
				gezi.classList.add("gezi");
				this.sence.appendChild(gezi);
			}
		}

	}
	//创造蛇
	createShe(){
		for(let i=0;i<this.she.length;i++){
			this.getElement(this.she[i]).classList.add("she");
		}
	}
	//设置蛇的移动
	shemove(){
		let that=this;
		this.t=setInterval(move,200);
		function move(){
			//方向不同，新蛇头不同
			let newtou;
			if(that.shefx=="right"){
				newtou={x:that.she[that.she.length-1].x,y:that.she[that.she.length-1].y+1};
			}
			if(that.shefx=="left"){
				newtou={x:that.she[that.she.length-1].x,y:that.she[that.she.length-1].y-1};
			}
			if(that.shefx=="top"){
				newtou={x:that.she[that.she.length-1].x-1,y:that.she[that.she.length-1].y};
			}
			if(that.shefx=="bottom"){
				newtou={x:that.she[that.she.length-1].x+1,y:that.she[that.she.length-1].y};
			}
			if(newtou.x<0||newtou.x>19||newtou.y<0||newtou.y>19){
				
				that.gameover();
				return;
			}
			for(let k=0;k<that.she.length;k++){
				if(newtou.x==that.she[k].x&&newtou.y==that.she[k].y){
				
					that.gameover();
					return;
				}
			}
			that.she.push(newtou);
			let oldwei;
			if(newtou.x==that.foodwz.x&&newtou.y==that.foodwz.y){	
				that.createShe();
				that.getElement(that.foodwz).classList.remove("food");
				that.createfood();
				that.fenshuzhi.innerHTML=that.she.length-3;
				console.log(that.maxfen,that.fenshuzhi.innerHTML)
				if(that.maxfen<that.fenshuzhi.innerHTML){
					alert(1)
					that.maxfen=that.fenshuzhi.innerHTML;
					localStorage.zuigao=that.fenshuzhi.innerHTML;

				}
			}else{
				oldwei=that.she.shift(that.she[0]);
				that.removewei(oldwei);
				that.createShe();
			}
			
			//重新创建蛇
			// that.createShe();
			// that.fenshuzhi.innerHTML=that.she.length-3;
			// // if(that.maxfen){
			// 	console.log(that.maxfen,that.fenshuzhi.innerHTML)
			// 	if(that.maxfen<that.fenshuzhi.innerHTML){
			// 		alert(1)
			// 		that.maxfen=that.fenshuzhi.innerHTML;
			// 		localStorage.zuigao=that.fenshuzhi.innerHTML;

			// 	}
			// }
			that.shekeyflag=true;
		}
	}
	//去除蛇尾
	removewei(oldwei){
		this.getElement(oldwei).classList.remove("she");
	}
	//控制蛇的方向
	kongzhishe(){
		let that=this;
		window.onkeydown=function(e){
			if(that.shekeyflag){
				that.shekeyflag=false;
				if(e.keyCode==37){
					if(that.shefx!="right"){
						that.shefx="left";
					}
				}
				if(e.keyCode==38){
					if(that.shefx!="bottom"){
						that.shefx="top";
					}
				}
				if(e.keyCode==39){
					if(that.shefx!="left"){
						that.shefx="right";
					}	
				}
				if(e.keyCode==40){
					if(that.shefx!="top"){
						that.shefx="bottom";
					}
				}
			}
			


		}
	}
	//创建食物
	createfood(){
		this.foodwz={};
		this.foodwz.x=Math.floor(Math.random()*20);
		this.foodwz.y=Math.floor(Math.random()*20);
		this.getElement(this.foodwz).classList.add("food");

	}
	gameover(){
		for(let i=0;i<this.she.length;i++){
			this.getElement(this.she[i]).classList.remove("she");
		}
		alert("游戏结束！");
		this.getElement(this.foodwz).classList.remove("food");
		this.she=[{x:0,y:0},{x:0,y:1},{x:0,y:2}];
		this.fenshuzhi.innerHTML=0;
		clearInterval(this.t);
		this.sence.innerHTML="";
		this.shefx="right";
		localStorage.zuigao=this.maxfen;
		this.jieshu1.style.display="block";
	}
	//点击暂停
	zanting1(){
		let that=this;
		this.zanting.onclick=function(){
			clearInterval(that.t);
		}
	}
	//点击继续

	jixu1(){
		let that=this;
		this.jixu.onclick=function(){
			that.shemove();
		}
	}

	//通过Id获取
	getElement(weizhi){
		let id=weizhi.x+"-"+weizhi.y;
		return document.getElementById(id);
	}
}