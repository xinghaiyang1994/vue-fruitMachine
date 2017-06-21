<template>
  <div class="fruit" >

		<!--滚动部分 -->
		<div class="fruit-top">
			<ul class="fruit-body">
				<li class="fruit-mod1 fruit-mod-act">
					<img src="../assets/img/main-pic1.png"/>
					<em></em>
				</li>
				<li class="fruit-mod2">
					<img src="../assets/img/main-pic2.png"/>
					<em></em>
				</li>
				<li class="fruit-mod3">
					<img src="../assets/img/main-pic3.png"/>
					<em></em>
				</li>
				<li class="fruit-mod4">
					<img src="../assets/img/main-pic4.png"/>
					<em></em>
				</li>
				<li class="fruit-mod5">
					<img src="../assets/img/main-pic5.png"/>
					<em></em>
				</li>
				<li class="fruit-mod6">
					<img src="../assets/img/main-pic6.png"/>
					<em></em>
				</li>
				<li class="fruit-mod7">
					<img src="../assets/img/main-pic7.png"/>
					<em></em>
				</li>
				<li class="fruit-mod8">
					<img src="../assets/img/main-pic8.png"/>
					<em></em>
				</li>
				<li class="fruit-mod9">
					<img src="../assets/img/main-pic9.png"/>
					<em></em>
				</li>
				<li class="fruit-mod10">
					<img src="../assets/img/main-pic10.png"/>
					<em></em>
				</li>
				<li class="fruit-mod11">
					<img src="../assets/img/main-pic11.png"/>
					<em></em>
				</li>
				<li class="fruit-mod12">
					<img src="../assets/img/main-pic12.png"/>
					<em></em>
				</li>
				<li class="fruit-mod13">
					<img src="../assets/img/main-pic13.png"/>
					<em></em>
				</li>
				<li class="fruit-mod14">
					<img src="../assets/img/main-pic14.png"/>
					<em></em>
				</li>
				<li class="fruit-mod15">
					<img src="../assets/img/main-pic15.png"/>
					<em></em>
				</li>
				<li class="fruit-mod16">
					<img src="../assets/img/main-pic16.png"/>
					<em></em>
				</li>
				<li class="fruit-mod17">
					<img src="../assets/img/main-pic17.png"/>
					<em></em>
				</li>
				<li class="fruit-mod18">
					<img src="../assets/img/main-pic18.png"/>
					<em></em>
				</li>
				<li class="fruit-mod19">
					<img src="../assets/img/main-pic19.png"/>
					<em></em>
				</li>
				<li class="fruit-mod20">
					<img src="../assets/img/main-pic20.png"/>
					<em></em>
				</li>
				<li class="fruit-mod21">
					<img src="../assets/img/main-pic21.png"/>
					<em></em>
				</li>
				<li class="fruit-mod22">
					<img src="../assets/img/main-pic22.png"/>
					<em></em>
				</li>
				<li class="fruit-mod23">
					<img src="../assets/img/main-pic23.png"/>
					<em></em>
				</li>
				<li class="fruit-mod24">
					<img src="../assets/img/main-pic24.png"/>
					<em></em>
				</li>
			</ul>
			<div class="fruit-top-num-box">
				<ul class="fruit-top-num" id="num-bigshort">
					<li>
						<img src="../assets/img/num.png" class="num"/>
					</li>
					<li>
						<img src="../assets/img/num.png" class="num"/>
					</li>
				</ul>
			</div>
		</div>
		<!--<input type="button" name="" id="start" value="开始"  />-->
		<!--分数-->
		<div class="fruit-score">
			<div class="fruit-score-mod">
				<img src="../assets/img/score-mul.png" class="score"/>
				<div class="fruit-score-mod-bottom">
					<ul class="score-box score-boxs" id="num-mul">
						<li>
							<img src="../assets/img/num.png" class="num"/>
						</li>
						<li>
							<img src="../assets/img/num.png" class="num"/>
						</li>
						<li>
							<img src="../assets/img/num.png" class="num"/>
						</li>
						<li>
							<img src="../assets/img/num.png" class="num"/>
						</li>
						<li>
							<img src="../assets/img/num.png" class="num"/>
						</li>
						<li>
							<img src="../assets/img/num.png" class="num"/>
						</li>
					</ul>
				</div>
			</div>
			<div class="fruit-score-mod">
				<img src="../assets/img/score-total.png" class="score"/>
				<div class="fruit-score-mod-bottom">
					<ul class="score-box" id="num-total">
						<li>
							<img src="../assets/img/num.png" class="num"/>
						</li>
						<li>
							<img src="../assets/img/num.png" class="num"/>
						</li>
						<li>
							<img src="../assets/img/num.png" class="num"/>
						</li>
						<li>
							<img src="../assets/img/num.png" class="num"/>
						</li>
						<li>
							<img src="../assets/img/num.png" class="num"/>
						</li>
						<li>
							<img src="../assets/img/num.png" class="num"/>
						</li>
						<li>
							<img src="../assets/img/num.png" class="num"/>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<!--控制按钮-->
		<div class="btn-box">
			<!--加倍减半-->
			<ul class="btn-left btn-left1 btn-addsub">
				<li class="btn2-mod">
					<img src="../assets/img/btn-double.png"/>
					<img src="../assets/img/btn-doubles.png" class="btn2-mod-act"/>
				</li>
				<li class="btn2-mod">
					<img src="../assets/img/btn-half.png"/>
					<img src="../assets/img/btn-halfs.png" class="btn2-mod-act"/>
				</li>
			</ul>
			<!--猜大小-->
			<ul class="btn-left btn-left2 btn-bigshort">
				<li class="btn2-mod">
					<img src="../assets/img/btn-short.png"/>
					<img src="../assets/img/btn-shorts.png" class="btn2-mod-act"/>
				</li>
				<li class="btn2-mod">
					<img src="../assets/img/btn-big.png"/>
					<img src="../assets/img/btn-bigs.png" class="btn2-mod-act"/>
				</li>
			</ul>
			
			<div class="btn3-mod" id="start" @click="addNum">
				<img src="../assets/img/start.png"/>
				<img src="../assets/img/starts.png" class="btn3-mod-act"/>
			</div>
			
		</div>	
		<!--按键-->
		<div class="fruit-bottom">
			<div class="fruit-bottom-mod" :class="index == 3?'fruit-bottom-mod-4':''" v-for="(item,index) in aBet">
				<ul class="fruit-bottom-mod-count" :id="'num-'+index">
					<li>
						<img src="../assets/img/num.png" class="num" />
					</li>
					<li>
						<img src="../assets/img/num.png" class="num"/>
					</li>
				</ul>
				<div class="fruit-bottom-mod-btn" :class="'fruit-bottom-mod-btn'+(index+1)" @click="changeBet(index)">
					<template v-if="index == 0">
						<img src="../assets/img/choose-1.png" class="btn1"/>
						<img src="../assets/img/choose-1s.png" class="btn1 btn-act"/>
					</template>
					<template v-else-if="index == 1">
						<img src="../assets/img/choose-2.png" class="btn1"/>
						<img src="../assets/img/choose-2s.png" class="btn1 btn-act"/>
					</template>
					<template v-else-if="index == 2">
						<img src="../assets/img/choose-3.png" class="btn1"/>
						<img src="../assets/img/choose-3s.png" class="btn1 btn-act"/>
					</template>
					<template v-else-if="index == 3">
						<img src="../assets/img/choose-4.png" class="btn1"/>
						<img src="../assets/img/choose-4s.png" class="btn1 btn-act"/>
					</template>
					<template v-else-if="index == 4">
						<img src="../assets/img/choose-5.png" class="btn1"/>
						<img src="../assets/img/choose-5s.png" class="btn1 btn-act"/>
					</template>
					<template v-else-if="index == 5">
						<img src="../assets/img/choose-6.png" class="btn1"/>
						<img src="../assets/img/choose-6s.png" class="btn1 btn-act"/>
					</template>
					<template v-else-if="index == 6">
						<img src="../assets/img/choose-7.png" class="btn1"/>
						<img src="../assets/img/choose-7s.png" class="btn1 btn-act"/>
					</template>
					<template v-else-if="index == 7">
						<img src="../assets/img/choose-8.png" class="btn1"/>
						<img src="../assets/img/choose-8s.png" class="btn1 btn-act"/>
					</template>
				</div>
			</div>
		</div>

		<!--音频-->
		<audio src="" id="audio"  autoplay=""></audio>


  </div>
</template>

<script>

import $ from '../assets/js/jquery-1.7.2.js';
//基本函数




export default {
  name: 'hello',
  data () {
    return {
    	aBet:[0,0,0,99,0,0,0,42],
    	num:4
    }
  },
  computed:{
  	
  },
  methods:{
  	changeBet(index){
  		var arr=[];
  		this.aBet.forEach(function(value,i){
  			if((i == index) && (value<99)){
  				value++;
  			}
  			arr.push(value);
  		});
  		this.aBet=arr;
  	},
  	addNum(){
  		this.num++;
  	}
  },
  watch:{
  	aBet(value){
  		
  		//监听各押注数字
			var aNum=$('.fruit-bottom .fruit-bottom-mod');
			for(var i=0;i<this.aBet.length;i++){
				aNum.eq(i).find('.fruit-bottom-mod-count li').eq(0).find('.num').css({
					top:-0.35*parseInt(this.aBet[i]/10)+'rem'
				});
				aNum.eq(i).find('.fruit-bottom-mod-count li').eq(1).find('.num').css({
					top:-0.35*(this.aBet[i]%10)+'rem'
				});
			}

  	}
  },
  mounted(){
  	
  	//初始化各押注数字
		var aNum=$('.fruit-bottom .fruit-bottom-mod');
		for(var i=0;i<this.aBet.length;i++){
			aNum.eq(i).find('.fruit-bottom-mod-count li').eq(0).find('.num').css({
				top:-0.35*parseInt(this.aBet[i]/10)+'rem'
			});
			aNum.eq(i).find('.fruit-bottom-mod-count li').eq(1).find('.num').css({
				top:-0.35*(this.aBet[i]%10)+'rem'
			});
		}
		
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  }
}
</script>

<style>

</style>
