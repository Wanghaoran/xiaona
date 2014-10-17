(function(){
	//小娜文字描述
	window.XIAONA = {
		texts:[
			["小娜亮绝技，<br>给你唱首歌！"," 来首老歌","听听这首怎么样。流水它带走光阴的故事改变了一个人。"],
			["小娜亮绝技，<br>给你唱首歌！","你知道小苹果吗","你是我的小呀小苹果……后面是什么来着？"],
			["小娜亮绝技，<br>给你唱首歌！","唱周杰伦的歌","那就来一首唯美的吧。天青色等烟雨，而我在等你。"],
			["小娜亮绝技，<br>给你唱首歌！","唱首最炫民族风","苍茫的天涯是……啊哦……我有点忘词儿了。"],

			["小娜亮绝技，<br>给你背首诗！","你会读诗吗","少小离家老大回，乡音无改鬓毛衰。儿童相见不相识，笑问客从何处来？"],
			["小娜亮绝技，<br>给你背首诗！","背一首唐诗","床前明月光，疑是地上霜。举头望明月，低头思故乡。"],

			["小娜亮绝技，<br>给你讲笑话！","给姐讲个笑话","我从网上找到了这个。一天同桌问我：“孙悟空最喜欢的水果是什么？”我说：“是桃子”，他说：“不对，是榴莲！有歌为证。”然后就唱起来：“有石猴，有石猴，宁愿选择榴莲不放手。”",27000],
			["小娜亮绝技，<br>给你讲笑话！","给哥讲个笑话","我从网上找到了这个。我是做理发的。有天一小孩过来剪完头发没带钱，然后他跟我说：“叔叔 上个月我在这里剪的。”“嗯，我记得啊。”“妈妈说这里三个月保修的。”",21000],
			["小娜亮绝技，<br>给你讲笑话！","讲笑话","我从网上找到了这个。一个小女孩3岁了不想去幼儿园，妈妈说：“除非你有一天嫁人了，不然就得去幼儿园。”小女孩立即抱住旁边一位叔叔说：“叔叔，你娶了我吧。”",21000],

			["小娜亮绝技，<br>还会说方言！","你会东北话吗","别老让我学，说错了咋整。"],
			["小娜亮绝技，<br>还会说方言！","你会说广东话吗","我好中意你。"],
			["小娜亮绝技，<br>还会说方言！","你会说天津话吗","吃嘛好，嘛好吃，好吃嘛。"],
			["小娜亮绝技，<br>还会说方言！","你能说台湾话吗","你知道吗？我喜欢你很久了。"],
			["小娜亮绝技，<br>还会说方言！","你能听懂四川话吗","一起摆龙门阵，巴适的板。"],

			["小娜会模仿，<br>什么都难不倒！","你会模仿啥动物","咴~噗~"],
			["小娜会模仿，<br>什么都难不倒！","你会模仿哪个动物","汪~汪~"],
			["小娜会模仿，<br>什么都难不倒！","你都会什么动物","哞~"],

			["小娜最贴心，<br>给你送安慰！","累死了","工作辛苦了，吃顿好的吧。"],
			["小娜最贴心，<br>给你送安慰！","我好累啊","休息休息！"],
			["小娜最贴心，<br>给你送安慰！","我累趴了","睡一会儿把，我会设定一个闹铃，只要你告诉我什么时候叫你。"],

			["小娜亮绝技，<br>给你卖个萌！","卖萌","萌这种东西对我来说是非卖品。"],
			["小娜亮绝技，<br>给你卖个萌！","你会卖萌吗","这不是我的风格。"],

			["一年四季，<br>小娜最爱秋天！","你喜欢秋天吗","金黄色的落叶踩上去应该很松软。"],
			["一年四季，<br>小娜最爱秋天！","秋风吹不尽","总是玉关情。"],

			["小娜亮绝技，<br>醉了帮你醒！","喝多了","今宵酒醒何处？不如回到家里舒服。"],
			["小娜亮绝技，<br>醉了帮你醒！","我喝大了","酒不醉人人自醉，难受就和我说说话吧。"],
			["小娜亮绝技，<br>醉了帮你醒！","我没喝多","记得别碰方向盘。"],

			["小娜最贴心，<br>为你报天气！","据说明天的天气糟透了","真是bad news。"],

			["小娜很博学，<br>名人都认识！","学一下葛优","二十一世纪最缺的是什么？人才！"],
			["小娜很博学，<br>名人都认识！","学一下郭德纲","床前明月光，疑是地上霜，举头望明月，我叫郭德纲。"],
			["小娜很博学，<br>名人都认识！","比尔盖茨是谁","这里有比尔·盖茨的最新动态"],

			["发朋友圈什么的，<br>吩咐小娜就够啦！","微信"],
			["出门带上小娜，<br>再也不会迷路了！","高德地图"],
			["想看什么视频，<br>告诉小娜就可以！","爱奇艺"],
			["怕忘记什么，<br>叮嘱小娜就是了！","位置提醒"],
			["订酒店什么的，<br>吩咐小娜就是了！","去哪儿"],
			["买机票什么的，<br>吩咐小娜就是了！","国航"],
		]
	};

	function _onResize(){
		var realW = document.documentElement.clientWidth, realH = document.documentElement.clientHeight;
		var bili = Math.min(realW/720,realH/1133);

        //修改所有图片尺寸大小
        var images = document.getElementsByTagName("img");
        for(var i=0; i<images.length; i++) {
            var imgW = images[i].getAttribute("realw"), imgH = images[i].getAttribute("realh"), alignment = images[i].getAttribute("alignment");

            var imgT = images[i].getAttribute("realt"), isBgd = images[i].getAttribute("isBgd");
            if (alignment != "onresizeByWidth") {
                images[i].style.width = imgW*bili+"px";
                images[i].style.height = imgH*bili+"px";
                images[i].style.top = imgT*bili+"px";
            } else {
                images[i].style.width = imgW*realW/720+"px";
                images[i].style.height = imgH*realW/720+"px";
                images[i].style.top = "0px";
            }
            //居中图片需要居中
            if(alignment == "center") {
                images[i].style.left = (realW-imgW*bili)/2+"px";
                //images[i].style.top = (realH-imgH*bili)/2+"px";
            } else if(alignment == "right"){
           		images[i].style.left = (realW-imgW*bili-20)+"px";
            } else if(alignment == "left_center"){
           		images[i].style.left = (realW/2-imgW*bili)+"px";
            } else if(alignment == "right_center"){
           		images[i].style.right = (realW/2-imgW*bili)+"px";
            } else if(alignment == "false"){
                images[i].style.top = imgT*bili+"px";
                images[i].style.left = (realW-200)/2+"px";
            }
        }
		//修改所有label尺寸大小
	    var labels = document.getElementsByTagName("label");
	    for(var i=0; i<labels.length; i++) {
	    	var imgW = labels[i].getAttribute("realw"), imgL = labels[i].getAttribute("reall"), fontsize = labels[i].getAttribute("fontsize"), imgT = labels[i].getAttribute("realt"), alignment = labels[i].getAttribute("alignment");;
	    	if(imgL) {
	    		labels[i].style.left = imgL*bili+"px";
	    	} else {
	    		labels[i].style.left = (realW-imgW*bili)/2+"px";
	    	}
	        labels[i].style.top = imgT*bili+"px";
	        labels[i].style.fontSize = fontsize*bili+"px";
	        labels[i].style.width = imgW*bili+"px";
	    }
	    //特殊处理
	    $("#user_word").css("left", (parseInt($("#input_img").css("left"))+10)+"px");
	    $("#xiaona_answer").css("left", (parseInt($("#input_img").css("left"))+10)+"px");
	    $("#xiaona_answer").css("width", (parseInt($("#input_img").css("width"))-10)+"px");

	    var video_container = $("#myVideo");
	    video_container.css("width",720*bili+"px");
	    video_container.css("height",405*bili+"px");
	    video_container.css("top",200*bili+"px");
	    video_container.css("left",(realW-720*bili)/2+"px");

		$('#heng').css('width',1.3*realH+'px');
		$('#heng').css('height',realW +'px');
		$('#heng').css( "background-size",1.3*realH+'px '+realW+'px');
	};

	//屏幕适配
	_onResize();

	//横竖屏监听
	window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function(){

	    if(window.orientation==180||window.orientation==0)
		{			
			$('#heng').css('display','none');
	    }
		if(window.orientation==90||window.orientation==-90)
		{
			$('#heng').css('display','block');
		}
	}, false);

	//按钮功能
	$("#startBtn").click(function(){
		//TODO向服务器请求摇奖结果
		/*
			1. 请求服务器同时，晃动mainpage小娜头像
			2. 服务器返回结果，停止晃动小娜头像，跳转到结果界面（0-38）0表示中奖，1-31是音频，32-37为视频, 38为优惠券
		*/

		//这里暂时做模拟操作
		//模拟开始
		var isRunning = $("#startBtn").attr("isRunning");
		if(isRunning == "true") return;
		$("#startBtn").attr("isRunning", true);
		$("#mainpage_xn").attr("src","img/mainpage_xn.gif");
		setTimeout(function(){


            //设置不中奖 和 没有优惠券
            do{
                window.XIAONA.num = Math.floor(Math.random()*38);

            }while(window.XIAONA.num == 0);

			$("#mainpage").css("display","none");
			$("#rewardpage").fadeIn("slow");
			//中奖
			if(XIAONA.num == 0) {	
				$("#noreward").css("display","none");
				$("#rewarded").css("display","block");
				$("#reward_phone").css("display","block");
				$("#reward_quan").css("display","none");
				$("#reward_info1").css("display","block");
				$("#reward_info2").css("display","block");
				$("#reward_desc").css("display","block");
				$("#reward_name").css("display","block");
			} else if(XIAONA.num == 38){
				$("#noreward").css("display","none");
				$("#rewarded").css("display","block");
				$("#reward_phone").css("display","none");
				$("#reward_quan").css("display","block");
				$("#reward_info1").css("display","none");
				$("#reward_info2").css("display","none");
				$("#reward_desc").css("display","none");
				$("#reward_name").css("display","none");
				$("#reward_quan").click(function(){
					window.location.href = "http://taoquan.taobao.com/coupon/unify_apply.htm?sellerId=1711191736&activityId=161502381";
				});
			} else {
				$("#rewarded").css("display","none");
				$("#noreward").css("display","block");

				$("#noreward_info1").html(XIAONA.texts[XIAONA.num-1][0]);
			}
			$("#mainpage_xn").attr("src","img/mainpage_xn.jpg");
			$("#startBtn").attr("isRunning", false);
		}, 2000);
		//模拟结束----end
	});
	//打开帮助界面
	$("#ruleBtn").click(function(){
		var isRunning = $("#startBtn").attr("isRunning");
		if(isRunning == "true") return;
		$("#help_info").fadeIn("slow");
	});
	//隐藏帮助界面
	$("#help_info").click(function(){
		$("#help_info").fadeOut("slow");
	});
	//排名按钮事件
	$("#listBtn").click(function(){
		var isRunning = $("#startBtn").attr("isRunning");
		if(isRunning == "true") return;
		//TODO 打开排名界面，排名界面暂时没有
	});

	//广告按钮事件
	$("#adBtn").click(function(){
		var isRunning = $("#startBtn").attr("isRunning");
		if(isRunning == "true") return;
		//TODO 点击广告图片操作
	});

	//中奖后，重新开始按钮操作
	$("#reward_phone_btn").click(function(){
		$("#rewardpage").css("display","none");
		$("#mainpage").fadeIn("slow");
		$("#close_btn").attr("isCancelPlay",false);
	});
	//没中奖，点击继续体验，执行小娜操作
	$("#noreward_phone").click(function(){
		if(XIAONA.num <32) {
			play_sound();
		};
		$("#close_btn").attr("isCancelPlay",false);

		$("body").css("background-color","#000");
		$("#rewardpage").css("display","none");
		$("#funcpage").fadeIn("slow");
		$("#close_btn").css("display","none");

		//第一步
		$("#func_c").attr("src","img/func_center_1.gif");
		$("#func_c").css("display","block");
		$("#func_l").css("display","none");
		$("#xiaona_word").css("display","block");
		$("#user_word").css("display","none");
		$("#xiaona_answer").css("display","none");
		$("#bill_img").css("display","none");

		XIAONA.step = 0;
		showXiaona();
	});
	function showXiaona(){
		if($("#close_btn").attr("isCancelPlay") == "true") {
			//清除音频
			$("#jquery_jplayer_1").jPlayer("clearMedia");
			$("#jquery_jplayer_1").jPlayer("stop");
			//清除视频
			$("#myVideoDiv").css("display","none");
			$("#myVideo").attr("pause");
			$("#myVideo").attr("src","");
			return;
		}
		if(XIAONA.step == 1) {
			$("#user_word").html(XIAONA.texts[XIAONA.num-1][1]);
			$("#user_word").css("display","block");
		} else if(XIAONA.step == 2) {
			$("#func_c").attr("src","img/func_center_2.gif");
			$("#xiaona_word").css("display","none");
		} else if(XIAONA.step == 3) {
			$("#func_c").css("display","none");
			$("#close_btn").fadeIn();
			//左上角显示“小娜功能页左上状态2.gif”，同时显示相应功能答案及播放相应音频
			//如果是APP类功能页，则左上角显示“小娜功能页左上状态1.gif”，同时显示视频框架
			if(XIAONA.num <= 31) {
				$("#func_l").attr("src","img/func_left_2.gif");
				$("#xiaona_answer").html(XIAONA.texts[XIAONA.num-1][2]);
				$("#xiaona_answer").css("display","block");

				if(XIAONA.num == 31) {
					$("#bill_img").css("display","block");
				}
			} else {
				$("#func_l").attr("src","img/func_left_1.gif");
				play_sound();
			}

			$("#func_l").css("display","block");
		} else if(XIAONA.step > 3) {
			return;
		}

		XIAONA.step++;

		setTimeout(showXiaona, 2000);
	}
	//关闭按钮，强制性返回分享界面
	$("#close_btn").click(function(){
		$("#close_btn").attr("isCancelPlay",true);
		//清除音频
		$("#jquery_jplayer_1").jPlayer("clearMedia");
		$("#jquery_jplayer_1").jPlayer("stop");
		//清除视频
		$("#myVideoDiv").css("display","none");
		$("#myVideo").attr("pause");
		$("#myVideo").attr("src","");

		$("#rewardpage").css("display","none");
		$("#funcpage").css("display","none");
		$("body").css("background-color","#ee7700");
		$("#thirdpage").fadeIn("slow");
	});
	
	//分享按钮
	$("#shareBtn").click(function(){
		$("#share_help").fadeIn("slow");
	});
	//隐藏分享帮助
	$("#share_help").click(function(){
		$("#share_help").fadeOut("slow");
	});
	//再试一次
	$("#againBtn").click(function(){
		$("#thirdpage").css("display","none");
		$("#mainpage").fadeIn("slow");
	});
	//初始化音效或者视频
	function play_sound(){
		$("#jquery_jplayer_1").jPlayer("clearMedia");
		if(XIAONA.num <32) {
			$("#jquery_jplayer_1").jPlayer("setMedia", {mp3:"./music/MP3/"+XIAONA.num+".mp3"});//.jPlayer("play");
		} else {
			$("#myVideoDiv").css("display","block");
			$("#myVideo").attr("poster","./img/"+XIAONA.num+".jpg");
			$("#myVideo").attr("src","./music/VIDEO/"+XIAONA.num+".m4v");
			$("#myVideo").attr("autoplay","true");

			var video = document.getElementById("myVideo");
			video.addEventListener("ended", function(){
				setTimeout(function(){
		        	if($("#close_btn").attr("isCancelPlay") == "true") return;

					$("#jquery_jplayer_1").jPlayer("clearMedia");
					$("#jquery_jplayer_1").jPlayer("stop");

					$("#myVideoDiv").css("display","none");
					$("#myVideo").attr("src","");
					$("#myVideo").attr("pause");

					$("#funcpage").css("display","none");
					$("body").css("background-color","#ee7700");
					$("#thirdpage").fadeIn("slow");
				},2000);
			});
			//$("#jquery_jplayer_1").jPlayer("setMedia", {m4v:"./music/VIDEO/test.m4v"}).jPlayer("fullScreen");//.jPlayer("play");//{mp4:"./music/VIDEO/"+XIAONA.num+".mp4"});
		}
	};
})();

