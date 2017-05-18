window.onload = function(){


	const renji=$(".xuanxiang")[0];
	const sence=$(".sence")[0];
	const mainsence=$(".mainsence")[0];
	renji.onclick=function(){
		sence.style.display="none";
		mainsence.style.display="block";
	}
	const nav=$(".xuanxiangnav");
	for(let i=0;i<nav.length;i++){
		nav[i].onclick=function(){
			for(let j=0;j<nav.length;j++){
				nav[j].classList.remove("active");
			}
			nav[i].classList.add("active");
		}
	}
	const xuanxianganniu=$(".xuanxiang6")[0];
	const xuanxiang=$(".xuanxiangsence")[0];
	xuanxianganniu.onclick=function(){
		sence.style.display="none";
		xuanxiang.style.display="block";
	}
	const zlyj=$(".zailaiyiju")[0];
	const jieshu=$(".jieshu")[0];
	const tcyx=$(".tuichuyouxi")[0];
	zlyj.onclick=function(){
		jieshu.style.display="none";
		mainsence.style.display="block";
	}
	tcyx.onclick=function(){
		jieshu.style.display="none";
		mainsence.style.display="none";
		sence.style.display="block";
	}
	const fanhui=$(".anniu1")[0];
	fanhui.onclick=function(){
		xuanxiang.style.display="none";
		mainsence.style.display="none";
		sence.style.display="block";
	}



function kaishi(){
	var flag = true;
	var chessBoard= [];
	var over = false;

	// 赢法数组
	var wins = [];

	// 赢法的统计数组
	var myWin = [];
	var computerWin = [];

	for(var i=0;i<23;i++){
		chessBoard[i] = [];
		for(var j=0;j<23;j++){
			chessBoard[i][j] = 0;
			console.log(chessBoard)
		}
	}


	for(var i=0;i<23;i++){
		wins[i] = [];
		for(var j=0;j<23;j++){
			wins[i][j]=[];
		}
	}


	var count = 0;
	for(var i=0;i<23;i++){
		for(var j=0;j<11;j++){
			for(var k=0;k<5;k++){
				wins[i][j+k][count]=true;
			}
			count++;
		}
	}

	for(var i=0;i<23;i++){
		for(var j=0;j<11;j++){
			for(var k=0;k<5;k++){
				wins[j+k][i][count]=true;
			}
			count++;
		}
	}

	for(var i=0;i<11;i++){
		for(var j=0;j<11;j++){
			for(var k=0;k<5;k++){
				wins[i+k][j+k][count]=true;
			}
			count++;
		}
	}

	for(var i=0;i<11;i++){
		for(var j=14;j>3;j--){
			for(var k=0;k<5;k++){
				wins[i+k][j-k][count]=true;
			}
			count++;
		}
	}

	for(var i=0;i<count;i++){
		myWin[i]=0;
		computerWin[i] = 0;
	}

	var chess= document.getElementById('chess');
	var context = chess.getContext('2d');

	context.strokeStyle = '#000';




		//棋盘画线
		for(var i=0;i<23;i++){
			context.moveTo(20+i*30,20);
			context.lineTo(20+i*30,680);
			context.stroke();
			context.moveTo(20,20+i*30);
			context.lineTo(680,20+i*30);
			context.stroke();
		}




		//画棋子
	var oneStep = function(i,j,flag){
		context.beginPath();
		context.arc(15+i*30,15+j*30,13,0,2*Math.PI);
		context.closePath();
		var gradient = context.createRadialGradient(20+i*30+2,20+i*30-2,13,20+i*30+2,20+i*30-2,0);
		if(flag){
			gradient.addColorStop(0,'#0A0A0A');
			gradient.addColorStop(1,'#636766');
		}else{
			gradient.addColorStop(0,'#D1D1D1');
			gradient.addColorStop(1,'#F9F9F9');
		}
		context.fillStyle = gradient;
		context.fill();
	}





	//开始下棋
	chess.onclick = function(e){
		if(over){
			return;
		}
		if(!flag){
			return;
		}
		var x = e.offsetX;
		var y = e.offsetY;
		var i = Math.floor(x/30);
		var j = Math.floor(y/30);
		if(chessBoard[i][j]==0){
			oneStep(i,j,flag);
			chessBoard[i][j]=1;
			
			for(var k=0;k<count;k++){
				if(wins[i][j][k]){
					myWin[k]++;
					computerWin[k]=6;
					if(myWin[k]==5){
						alert('你赢了');
						jieshu.style.display="block";
						context.clearRect(0,0,chess.width,chess.height);
						kaishi();
						over = true;
					}
				}
			}
			if(!over){
				flag = !flag;
				computerAI();
			}
		}
		
	}



	//电脑下棋控制
	function computerAI(){
		var myScore = [];
		var computerScore = [];
		var max = 0;
		var u=0,v=0;
		for(var i=0;i<23;i++){
			myScore[i]=[];
			computerScore[i]=[];
			for(var j=0;j<23;j++){
				myScore[i][j]=0;
				computerScore[i][j]=0;
			}
		}
		for(var i=0;i<23;i++){
			for(var j=0;j<23;j++){
				if(chessBoard[i][j]==0){
					for(var k=0;k<count;k++){
						if(wins[i][j][k]){
							if(myWin[k]==1){
								myScore[i][j]+=200;
							}else if(myWin[k]==2){
								myScore[i][j]+=400;
							}else if(myWin[k]==3){
								myScore[i][j]+=2000;
							}else if(myWin[k]==4){
								myScore[i][j]+=10000;
							}
							if(computerWin[k]==1){
								computerScore[i][j]+=220;
							}else if(computerWin[k]==2){
								computerScore[i][j]+=420;
							}else if(computerWin[k]==3){
								computerScore[i][j]+=2100;
							}else if(computerWin[k]==4){
								computerScore[i][j]+=20000;
							}
						}
					}
					if(myScore[i][j]>max){
						max = myScore[i][j];
						u = i;
						v = j;
					}else if(myScore[i][j]==max){
						if(computerScore[i][j]>computerScore[u][v]){
							u = i;
							v = j;
						}
					}
					if(computerScore[i][j]>max){
						max = computerScore[i][j];
						u = i;
						v = j;
					}else if(computerScore[i][j]==max){
						if(myScore[i][j]>myScore[u][v]){
							u = i;
							v = j;
						}
					}
				}
			}
		}
		oneStep(u,v,false);
		chessBoard[u][v]=2;
		for(var k=0;k<count;k++){
			if(wins[u][v][k]){
				computerWin[k]++;
				myWin[k]=6;
				if(computerWin[k]==5){
					alert('电脑赢了');
					jieshu.style.display="block";
					context.clearRect(0,0,chess.width,chess.height);
					kaishi();
					over = true;
				}
			}
		}
		if(!over){
			flag = !flag;
		}
	}
}
kaishi();
}