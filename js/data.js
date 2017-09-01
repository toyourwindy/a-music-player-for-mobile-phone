var app = new Vue({
	el:"#app",
	data:{  
		cards: [
			//Safe&Sound
			{
				cardid: "card0", 
				name:'Safe & Sound',
				pic_url:'image/tylor.jpg',
				media_url:"http://win.web.rb03.sycdn.kuwo.cn/fa335a0c228dd082719bea47d8ba517a/59a63051/resource/a3/13/51/4076452981.aac"
			}, 
			//追光者
			{
				cardid: "card1", 
				name:'Light Chasers',
				pic_url:'image/light.jpg',
				media_url:"http://fs.web.kugou.com/13b7b4ed38fc9d9ec1c32560649e8408/59a4de33/G108/M03/0C/01/rA0DAFk_VuiALN9DADmXB0zHYTA058.mp3" 
			},
			//一生所爱
			{
				cardid: "card2", 
				name:'The love in my life',
				pic_url:'image/zixia.jpg',
				media_url:"http://fs.web.kugou.com/993f70782b0fc05701b462feab3e42a1/59a4ed45/G020/M02/10/14/9JMEAFV6waWATtlkAD3mh1K_LII696.mp3" 
			}, 
			//莫文蔚-执子之手
			{
				cardid: "card3", 
				name:'Hold your hand to the end',
				pic_url:'image/mo.jpg',
				media_url:"http://fs.web.kugou.com/01548e2d8c196608023470f64db78bfd/59a4e59c/G008/M09/12/11/SA0DAFUJEaSAKwQWAD8YCpcseos324.mp3"
			},
			//lost stars
			{
				cardid: "card4", 
				name:'Lost stars',
				pic_url:'image/loststars.jpg',
				media_url:"http://fs.web.kugou.com/74a1ab2c5f764e3edd3505b3f34ab8a3/59a4f298/G051/M02/03/05/04YBAFbaPBOAYtLxAECoL_tWi0w522.mp3" 
			},
			//林宥嘉-残酷月光
			{
				cardid: "card5", 
				name:'Moonlight',
				pic_url:'image/lin1.jpg',
				media_url:"media/Moonlight.mp3"
			},
			//林宥嘉-姗姗来迟的你
			{
				cardid: "card6", 
				name:'You',
				pic_url:'image/asi.JPG',
				media_url:"http://fs.web.kugou.com/ac742c0fce9628aa74cb0d26a5427023/59a5091b/G072/M08/1A/10/6IYBAFfsxG6AV15LADwWCb_CTtM044.mp3"
			},
			//魔性铃声
			{
				cardid: "card7", 
				name:'Apple Ringtone',
				pic_url:'image/apple.jpg',
				media_url:"http://fs.web.kugou.com/5d29a1d03585d00a2ae0d5f29bb87318/59a5073f/G037/M07/0A/13/xYYBAFYfYSSAdV47ADBwqeBVbK8186.mp3" 
			},
			//海绵宝宝
			{
				cardid: "card8", 
				name:'SpongeBob SquarePants',
				pic_url:'image/SquarePants.jpg',
				media_url:"http://fs.web.kugou.com/4b7e0a795222da147342f6fdb88a2a9c/59a4f30f/G008/M06/0C/11/SA0DAFUPegaITXQrAAuHmyW2A-sAABGUAAev7cAC4ez954.mp3" 
			}
		]
	} 
});  