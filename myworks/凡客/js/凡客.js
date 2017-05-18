$(function(){
	Zlunbo(".neikuan2 a img",".neikuan2",".yuanquan",[],".zuojiantou",".youjiantou",2,"#a10000",1500,1,"#ddd",6,0);
	// const btn=$(".daohang");
	// const con=$(".xiaxuan");
	// xuanxiangka(btn,con);
	// const btn1=$(".daohang1");
	// const con1=$(".xiaxuan1");
	// xuanxiangka(btn1,con1);
	const wxkuang=$(".wx");
	const erwei=$(".erweima");
	xuanxiangka(wxkuang,erwei);
	const gouwukuai=$(".gouwu");
	const xiala=$(".gouwukuang");
	xuanxiangka(gouwukuai,xiala);


	//下选框缓慢下降
		const item=$(".daohang");
		const ul=$(".daohang .xiaxuan");
		for(let i=0;i<ul.length;i++){
			let h=parseInt(attr(ul[i],"height"));
			ul[i].setAttribute("h",h);
			ul[i].style.height=0;
		}
		for(let i=0;i<item.length;i++){
			hover(item[i],function(){
				if(item[i].children[0]){
					let ul=item[i].children[0];
					ul.style.paddingTop=10+"px";
					animate(ul,{height:ul.getAttribute("h")},500)
				}
			},function(){
				if(item[i].children[0]){
					let ul=item[i].children[0];
					animate(ul,{height:0},500)}
			})	
		}
		const item1=$(".daohang1");
		const ul1=$(".daohang1 .xiaxuan1");
		for(let i=0;i<ul1.length;i++){
			let h=parseInt(attr(ul1[i],"height"));
			ul1[i].setAttribute("h",h);
			ul1[i].style.height=0;
		}
		for(let i=0;i<item1.length;i++){
			hover(item1[i],function(){
				if(item1[i].children[0]){
					let ul1=item1[i].children[0];
					ul1.style.paddingTop=10+"px";
					animate(ul1,{height:ul1.getAttribute("h")},500)
				}
			},function(){
				if(item1[i].children[0]){
					let ul1=item1[i].children[0];
					animate(ul1,{height:0},500)}
			})	
		}
})