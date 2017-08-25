Vue.component("my-card",{
	template:'<div v-bind:id="this.card.cardid" class="singcard" ref="cardref"><div class="header"><img id="img" v-bind:src="this.card.pic_url" ref="imgref" v-on:click="goRepeat" alt="PIC"/></div><div class="caption"><img v-bind:src="this.playingIcon"/><p>{{this.card.name}}</p></div><audio id="song" ref="profile" preload="auto" v-bind:src="this.card.media_url" >Your browser does not support the audio element.</audio><button v-on:click.stop="btnclick" class="nextbtn"></button></div>',
	props:['obj'], 
	data: function () {
	    return {
		icon:[
			'image/icon1.png',
			'image/icon2.png',
			'image/icon3.png',
			'image/icon4.png',
			'image/icon5.png'
		],
	      	counter: 0, //第几张音效动画图
		playingIcon:"image/icon5.png",
		istrue: false,
		timer: 0, //setInterval 音效动画
		rotate: 0, //setInterval 旋转动画
		isend: 0,
		index: 0,
		card: 0,
		angle: 0,//图片旋转角度 
		song: 0,
		strong: 0, //setInterval 声音渐强
		dispear: 0//setInterval 声音渐弱
	    }
	},
	mounted: function () { //默认值是第一张卡片
	    this.$nextTick(function () {
	           this.card = this.obj[0];
	    });
	}, 
	methods: { 
		//音效动画
		repeat: function () {
		    	this.playingIcon = this.icon[this.counter];  
		   	 this.counter = (this.counter + 1) % 5; //5个图片构成动画
		}, 
		//旋转图片
		goRotate: function (){ 
		   	this.angle = this.angle + 0.1;  
		   	this.$refs.imgref.style.transform = "rotate(" + this.angle + "deg)"; 
		},
		//声音渐强
		gostrong: function (){
			var song = this.$refs.profile;
			if(song.volume < 0.9){
			    song.volume = song.volume * 1.1;
			}else{
			    song.volume = 1;
				window.clearInterval(this.strong);
			}
			// console.log(song.volume);
		},
		//声音减弱
		godispear: function (){
			var song = this.$refs.profile;
			song.volume = song.volume * 0.85;
			if(song.volume < 0.1){
				song.volume = 0;
				window.clearInterval(this.dispear);
				song.pause();
			}  
			// console.log(song.volume);
		},
		//点击播放下一曲
	    	btnclick: function(){ 
			this.index = (this.index + 1) % 8;//几张卡片mod几
			this.card = this.obj[this.index]; 
			//停止音效动画
			clearInterval(this.timer); 
			this.playingIcon = this.icon[4]; 
			//停止图片旋转，初始化下一张旋转的角度为0
		    	clearInterval(this.rotate); 
		    	this.$refs.imgref.style.transform = "rotate(0deg)";//虚拟DOM将图片角度设为0
		    	this.angle = 0;//旋转角度初值为0

			this.istrue = false;
	    	},
		//检查音乐播放完了没有
		end: function(){ 
		    	if(this.$refs.profile.ended){ 
		    		//停止音效动画
				clearInterval(this.timer); 
				this.playingIcon = this.icon[4]; 
				//停止图片旋转
			    	clearInterval(this.rotate); 

				this.istrue = false; 
			} 
		}, 
	    	goRepeat: function(){  
			clearInterval(this.timer);  
		    	this.istrue = !this.istrue;  
			if(this.istrue){ 
			    	var that = this;
				this.timer = setInterval(function(){ 
					that.repeat();
				}, 150);
				//旋转图片
				this.rotate = setInterval(function(){ 
					that.goRotate();
				}, 10);
				//音乐渐强至播放
				this.$refs.profile.volume = 0.2;
				this.$refs.profile.play(); 
				this.strong = setInterval(function(){ 
					that.gostrong();
				}, 20); 
				//播放音乐
			    	this.$refs.profile.play();
				//检测是否播放完了 
				setInterval(function(){ 
					that.end();
				}, 500);
		   	 }else{
		    		//停止音效动画
		    		clearInterval(this.timer);
				this.playingIcon = this.icon[4];
				//停止旋转图片 
		    		clearInterval(this.rotate);  
				//暂停音乐
			    	var that = this;
				this.dispear = setInterval(function(){ 
					that.godispear();
				}, 30);  
		   	 }
	  	}  

    	}
})
