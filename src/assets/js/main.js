
(function(doc,win){
	function change(){
		doc.documentElement.style.fontSize=document.documentElement.clientWidth*50/320+'px';
	}
	change();
	window.addEventListener('resize',change,false);
	
})(document,window);



$(document).ready(function(){
	//基本函数
	function toD(n){
		return n<10 ? '0'+n :''+n; 
	}
	
	function toSix(n){
		var n=''+n;
		var arr=n.split('');
		while (arr.length<6){
			arr.unshift('0');
		}
		return arr.join('');
	}
	
	function toSeven(n){
		var n=''+n;
		var arr=n.split('');
		while (arr.length<7){
			arr.unshift('0');
		}
		return arr.join('');
	}
	
	function rnd(m,n){
		return Math.floor(m+Math.random()*(n-m+1));
	}
	
	
//	初始化赋值
	var numBigShort=0;	//猜大小
	var numMul=0;		//倍数
	var numTotal=75;	//总分数
	var numArr=[0,0,0,0,0,0,0,0];				
	
//	按键音乐
	var musicArr=['./assets/mp3/sgj_bt1.ogg','./assets/mp3/sgj_bt2.ogg','./assets/mp3/sgj_bt3.ogg','./assets/mp3/sgj_bt4.ogg','./assets/mp3/sgj_bt5.ogg','./assets/mp3/sgj_bt6.ogg','./assets/mp3/sgj_bt7.ogg','./assets/mp3/sgj_bt8.ogg'];
	music={
		start:'./assets/mp3/sgj_start.ogg',
		loop:'./assets/mp3/sgj_loop.ogg',
		end:'./assets/mp3/sgj_end.ogg',
		train:'./assets/mp3/sjg_xh.ogg'
	};
	
// 	数字显示	
	function toNum(num,str){
		var num=''+num;
		var oUl=document.getElementById(str);
		for(var i=0,l=oUl.children.length;i<l;i++){
			oUl.children[i].children[0].style.top=-0.35*num.charAt(i)+'rem';
		}
	}
	
//	重置各数字为0
	function reset(){
		numBigShort=0;	//猜大小
		numMul=0;		//倍数
		numArr=[0,0,0,0,0,0,0,0];		
		toNum(toD(numBigShort),'num-bigshort');
		toNum(toSix(numMul),'num-mul');
		for(var i=0;i<8;i++){
			toNum(toD(numArr[i]),'num-'+i);
		}
	}
	
//	判断是否压玛法
	function isPlay(){
		for(var i=0;i<numArr.length;i++){
			if(numArr[i] != 0){
				return true;
			}
		}
		return false;
	}
	
//	第一次进入各数字初始化显示	
	toNum(toD(numBigShort),'num-bigshort');
	toNum(toSix(numMul),'num-mul');
	toNum(toSeven(numTotal),'num-total');
	for(var i=0;i<8;i++){
		toNum(toD(numArr[i]),'num-'+i);
	}
	
	

	
//	游戏开始	
	var timer,n,bOk=false,isChoose=false;
	var iNow=0;
	timer=setInterval(function(){
		lighting(0)
	},500);
	
	//跑火车
	function train(){
		iNow++;
		$('.fruit-body > li').removeClass('fruit-mod-act')
		$('.fruit-body > li').eq(iNow % 24).addClass('fruit-mod-act');
		$('.fruit-body > li').eq(iNow % 24 -1).addClass('fruit-mod-act');
		$('.fruit-body > li').eq(iNow % 24 -2).addClass('fruit-mod-act');
		$('.fruit-body > li').eq(iNow % 24 -3).addClass('fruit-mod-act');
	}
	
	//奇偶数闪
	function oddLight(arr,fn){
		var iCount=0;
		clearInterval(timer);
		timer=setInterval(function(){
			iCount++;
			if(iCount%2 == 0){
				$('.fruit-body > li').removeClass('fruit-mod-act');
				$('.fruit-body > li:even').addClass('fruit-mod-act');
			}else{
				$('.fruit-body > li').removeClass('fruit-mod-act');
				$('.fruit-body > li:odd').addClass('fruit-mod-act');
			}
			if(iCount == 10){
				clearInterval(timer);
				$('.fruit-body > li').removeClass('fruit-mod-act');
				for(var i=0,l=arr.length;i<l;i++){
					$('.fruit-body > li').eq(arr[i]).addClass('fruit-mod-act');	
				}					
				timer=setTimeout(function(){
					clearTimeout(timer);
					fn && fn();
				},2000);
			}
		},500);
	}

	//单闪
	function lighting(n){
		if($('.fruit-body > li').eq(n).hasClass('fruit-mod-act')){
			$('.fruit-body > li').eq(n).removeClass('fruit-mod-act');
		}else{
			$('.fruit-body > li').eq(n).addClass('fruit-mod-act');
		}
	}
	
	//运行
	function run(n,fn){
		iNow++;
		$('.fruit-body > li').eq(iNow % 24).addClass('fruit-mod-act').siblings('li').removeClass('fruit-mod-act');	
		if(n){
			if(iNow == n-2){
				$('#audio').attr('src',music.end);
				$('#audio').removeAttr('loop');
				clearInterval(timer);
				timer=setTimeout(function(){
					run();
					clearTimeout(timer);
					
					timer=setTimeout(function(){
						run();
						clearTimeout(timer);
						iNow=iNow%24;
						
						timer=setTimeout(function(){
							fn && fn();
						},1000);//游戏结束倒数第一声时间
					},750);//游戏结束倒数第二声时间
				},500);//游戏结束倒数第三声时间
			}			
		}
	}

	//游戏开始
	function start(n){
		$('#audio').attr('src',music.start);
		timer=setTimeout(function(){
			run();
			clearTimeout(timer);
			$('#audio').attr('src',music.loop);
			$('#audio').attr('loop',true);
			timer=setTimeout(function(){
				run();
				clearTimeout(timer);
				$('#audio').attr('src',music.loop);
				$('#audio').attr('loop',true);
				timer=setInterval(function(){
					run(n,function(){ 
					
						var endNum=n%24;
						clearInterval(timer)
						var time2;
						var time1=new Date();
						
						timer=setInterval(function(){
							
							time2=new Date();
							lighting(endNum);
							
							if((time2-time1)>2500){
								clearInterval(timer);
								
								if( n%24 == 9 ){
//									alert('中绿好运')
									var arr=[1,2,5];		//假设中的数组
									oddLight(arr,function(){
										iNow=9;
										$('.fruit-body > li').removeClass('fruit-mod-act');
										clearTimeout(timer);
										timer=setInterval(function(){
											lighting(9);
										},500);
										isChoose=true;
										bOk=false;	
									});
								}else if( n%24 == 21 ){
//									alert('中红好运')
									var numA=2;		//跑火车第一个数
									$('#audio').attr('src',music.train);
									$('#audio').attr('loop',true);
									clearInterval(timer);
									var timer3=new Date();
									timer=setInterval(function(){
										var timer4=new Date();
										train();
										
										if((timer4 - timer3 >2000) && (numA == (iNow%24))){
											iNow=numA;
											$('#audio').attr('src','');
											$('#audio').removeAttr('loop');
											clearInterval(timer);
											isChoose=true;
											bOk=false;	
										}
									},100);
								
									
								}else{
									console.log(n)
									console.log(n%24)
									iNow=n%24;
									clearInterval(timer);
									timer=setInterval(function(){
										lighting(iNow);
									},500);
									if(true){			//判断中奖,假设true
										numMul=5;		//假设5倍
										toNum(toSix(numMul),'num-mul');
										
										
									}
									isChoose=true;
									bOk=false;
								}
							}
						},500);//游戏开始重复时间
					
					});
				},50);//游戏开始第三声时间
			},250)//游戏开始第二声时间
		},350)//游戏开始第一声时间
		
	}


//	加砝码
	$('.fruit-bottom-mod-btn').on('click',function(){
		var num=$(this).parent().index();
		if(bOk){return;}
		if(isChoose){
			reset();
		}
		isChoose=false;
		$('#audio').attr('src',musicArr[num]);
		if(numTotal>0 && numArr[num]<99){
			numTotal--;
			toNum(toSeven(numTotal),'num-total');
			
			numArr[num]++;
			toNum(toD(numArr[num]),'num-'+num);
		}
	});
	
//	游戏开始
	$('#start').on('click',function(){
		if(bOk){return};
		if(!isPlay())return;
		bOk=true;
		//ajax发送数据，获取是否中奖，中奖数字
		var getNum=rnd(0,23);	//返回数，假设21
		console.log(getNum+' 传入值');
		var n=getNum+rnd(2,3)*24;
		clearInterval(timer);
		start(n);
	});	
	
	
//	加倍减倍
	$('.btn-addsub > li').on('click',function(){
		if(numMul == 0 || numMul>499999){
			return;
		}
		if($(this).index() == 0){
			if((numTotal-numMul)<0){return;}
			numTotal=numTotal-numMul;
			numMul*=2;
		}else{
			if(numMul == 1){return;}
			numTotal=numTotal+Math.ceil(numMul/2);
			numMul/=2;
			numMul=Math.floor(numMul);
			if(numMul == 0){
				numMul=1;
			}
		}
		toNum(toSix(numMul),'num-mul');
		toNum(toSeven(numTotal),'num-total');
	});
	
//	猜大小
	var bigTimer;
	var bigArr=[1,2,3,4,5,6,8,9,10,11,12];
	var bigOk=false;
	$('.btn-bigshort > li').on('click',function(){
//		console.log($(this).index());
		if(bigOk){return};
		if(numMul == 0){return;}
		bigOk=true;
		var bigTime1=new Date();
		bigTimer=setInterval(function(){
			var num=rnd(0,10);
			var bigTime2=new Date();
			toNum(toD(bigArr[num]),'num-bigshort');
			if((bigTime2 - bigTime1) > 2000){
				clearInterval(bigTimer);
				toNum(toD(10),'num-bigshort');
				bigOk=false;
			}
		},100);
	});	
	
	
});
