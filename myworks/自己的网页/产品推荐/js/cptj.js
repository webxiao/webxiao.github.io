$(function(){

	// 第一排轮播
	const zuo=$(".zuojian")[0];
	const you=$(".youjian")[0];
	const ul=$(".zuizin1")[0];
	var t=setInterval(move,3000);
	let n1=4;
	var flag=true;
	function move(type="r"){
		flag=false;
		if(type=="r"){
			animate(ul,{marginLeft:-1200},800,function(){
				for(let i=0;i<n1;i++){
					let first=ul.firstElementChild;
					ul.appendChild(first);
				}
				ul.style.marginLeft=0;
				flag=true;
			})
		}else if(type=="l"){
			for(let i=0;i<n1;i++){
				let last=ul.lastElementChild;
				let first=ul.firstElementChild;
				ul.insertBefore(last,first);
			}
			ul.style.marginLeft="-1200px";
			animate(ul,{marginLeft:0},800,
			function(){
				flag=true;
			});
		}
	}
	zuo.onclick=function(){
		clearInterval(t);
		if(flag){
			move("l");
		}
		zuo.classList.add("active1");
		you.classList.remove("active1");
	}
	you.onclick=function(){
		clearInterval(t);
		if(flag){
			move("r");
		}
		you.classList.add("active1");
		zuo.classList.remove("active1");
	}
	ul.onmouseover=function(){
		clearInterval(t);
	}
	ul.onmouseout=function(){
		t=setInterval(move,3000);
	}
	window.onblur=function(){
		clearInterval(t);
	}
	window.onfocus=function(){
		t=setInterval(move,3000);
	}


	// 第二排轮播
	const zuo1=$(".zuojian")[1];
	const you1=$(".youjian")[1];
	const ul1=$(".zuizin")[0];
	// var t1=setInterval(move1,4000);
	let n=4;
	var flag=true;
	function move1(type="r"){
		flag=false;
		if(type=="r"){
			animate(ul1,{marginLeft:-1200},800,function(){
				for(let i=0;i<n;i++){
					let first=ul1.firstElementChild;
					ul1.appendChild(first);
				}
				ul1.style.marginLeft=0;
				flag=true;
			})
		}else if(type=="l"){
			for(let i=0;i<n;i++){
				let last=ul1.lastElementChild;
				let first=ul1.firstElementChild;
				ul1.insertBefore(last,first);
			}
			ul1.style.marginLeft="-1200px";
			animate(ul1,{marginLeft:0},800,
			function(){
				flag=true;
			});
		}
	}
	zuo1.onclick=function(){
		// clearInterval(t1);
		if(flag){
			move1("l");
		}
		zuo1.classList.add("active1");
		you1.classList.remove("active1");
	}
	you1.onclick=function(){
		// clearInterval(t1);
		if(flag){
			move1("r");
		}
		you1.classList.add("active1");
		zuo1.classList.remove("active1");
	}

})