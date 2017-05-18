const start=$(".start")[0];
const video=$("video")[0];
const pause=$(".pause")[0];
const zhe=$(".zhe")[0];
start.onclick=function(){
	video.play();
	start.style.display="none";
	zhe.style.display="none";
}
// 留言板功能
	const pinglun=$(".pinglun")[0];
	const con=$(".con ul")[0];

	pinglun.onkeydown=function(e){
		//按提交按钮或者ctrl+enter实行提交
		if(e.keyCode==13){
			let text=pinglun.value;
			if(text.trim()==""){
				pinglun.value="";
				alert("输入内容不能为空");
				return;
			}
			pinglun.value="";
			let li=$("<li>");
			li.innerHTML=text;
			console.log(li.innerHTML)
			console.log(con)
			con.appendChild(li);
		}
	}