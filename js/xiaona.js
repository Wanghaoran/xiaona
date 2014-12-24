(function(){
    $("body").height($(window).height());
    //小娜文字描述
    window.XIAONA = {
        texts:[
            ["小娜亮绝技，<br>给你唱首歌！"," 来首老歌","听听这首怎么样。流水它带走光阴的故事改变了一个人。"],//1
            ["小娜亮绝技，<br>给你唱首歌！","你知道小苹果吗","你是我的小呀小苹果……后面是什么来着？"],//2
            ["小娜亮绝技，<br>给你唱首歌！","唱周杰伦的歌","那就来一首唯美的吧。天青色等烟雨，而我在等你。"],//3
            ["小娜亮绝技，<br>给你唱首歌！","唱首最炫民族风","苍茫的天涯是……啊哦……我有点忘词儿了。"],//4

            ["小娜亮绝技，<br>给你背首诗！","你会读诗吗","少小离家老大回，乡音无改鬓毛衰。儿童相见不相识，笑问客从何处来？"],//5
            ["小娜亮绝技，<br>给你背首诗！","背一首唐诗","床前明月光，疑是地上霜。举头望明月，低头思故乡。"],//6

            ["小娜亮绝技，<br>给你讲笑话！","给姐讲个笑话","我从网上找到了这个。一天同桌问我：“孙悟空最喜欢的水果是什么？”我说：“是桃子”，他说：“不对，是榴莲！有歌为证。”然后就唱起来：“有石猴，有石猴，宁愿选择榴莲不放手。”",27000],//7
            ["小娜亮绝技，<br>给你讲笑话！","给哥讲个笑话","我从网上找到了这个。我是做理发的。有天一小孩过来剪完头发没带钱，然后他跟我说：“叔叔 上个月我在这里剪的。”“嗯，我记得啊。”“妈妈说这里三个月保修的。”",21000],//8
            ["小娜亮绝技，<br>给你讲笑话！","讲笑话","我从网上找到了这个。一个小女孩3岁了不想去幼儿园，妈妈说：“除非你有一天嫁人了，不然就得去幼儿园。”小女孩立即抱住旁边一位叔叔说：“叔叔，你娶了我吧。”",21000],//9

            ["小娜亮绝技，<br>还会说方言！","你会东北话吗","别老让我学，说错了咋整。"],//10
            ["小娜亮绝技，<br>还会说方言！","你会说广东话吗","我好中意你。"],//11
            ["小娜亮绝技，<br>还会说方言！","你会说天津话吗","吃嘛好，嘛好吃，好吃嘛。"],//12
            ["小娜亮绝技，<br>还会说方言！","你能说台湾话吗","你知道吗？我喜欢你很久了。"],//13
            ["小娜亮绝技，<br>还会说方言！","你能听懂四川话吗","一起摆龙门阵，巴适的板。"],//14

            ["小娜会模仿，<br>什么都难不倒！","你会模仿啥动物","咴~噗~"],//15
            ["小娜会模仿，<br>什么都难不倒！","你会模仿哪个动物","汪~汪~"],//16
            ["小娜会模仿，<br>什么都难不倒！","你都会什么动物","哞~"],//17

            ["小娜最贴心，<br>给你送安慰！","累死了","工作辛苦了，吃顿好的吧。"],//18
            ["小娜最贴心，<br>给你送安慰！","我好累啊","休息休息！"],//19
            ["小娜最贴心，<br>给你送安慰！","我累趴了","睡一会儿把，我会设定一个闹铃，只要你告诉我什么时候叫你。"],//20

            ["小娜亮绝技，<br>给你卖个萌！","卖萌","萌这种东西对我来说是非卖品。"],//21
            ["小娜亮绝技，<br>给你卖个萌！","你会卖萌吗","这不是我的风格。"],//22

            ["一年四季，<br>小娜最爱秋天！","你喜欢秋天吗","金黄色的落叶踩上去应该很松软。"],//23
            ["一年四季，<br>小娜最爱秋天！","秋风吹不尽","总是玉关情。"],//24

            ["小娜亮绝技，<br>醉了帮你醒！","喝多了","今宵酒醒何处？不如回到家里舒服。"],//25
            ["小娜亮绝技，<br>醉了帮你醒！","我喝大了","酒不醉人人自醉，难受就和我说说话吧。"],//26
            ["小娜亮绝技，<br>醉了帮你醒！","我没喝多","记得别碰方向盘。"],//27

            ["小娜最贴心，<br>为你报天气！","据说明天的天气糟透了","真是bad news。"],//28

            ["小娜很博学，<br>名人都认识！","学一下葛优","二十一世纪最缺的是什么？人才！"],//29
            ["小娜很博学，<br>名人都认识！","学一下郭德纲","床前明月光，疑是地上霜，举头望明月，我叫郭德纲。"],//30
            ["小娜很博学，<br>名人都认识！","比尔盖茨是谁","这里有比尔·盖茨的最新动态"],//31


            ["小娜陪你过万圣节","学鬼叫","小女名叫聂小倩，你，可是我那遍寻不见的宁采臣？"],//32

            ["小娜陪你过万圣节","讲个鬼故事","我从网上找到了这个。清明节，我想回学校看看，祭奠一下我那曾被埋葬的青春。"],//33
            ["小娜陪你过万圣节","讲个鬼故事","我从网上找到了这个。在一个夜黑风高的夜晚，一个女人坐进了出租车。一路都很安静，知道女人把一个苹果递给司机，说到：“苹果给你吃...很好吃的。”司机接过苹果吃了一口说：“的确很好吃。”女人说：“我生前也很喜欢吃苹果。”司机吓的瑟瑟发抖，问道：“那...那你现在呢？”女人慢慢把头伸到前面，说：“但是我生完小孩之后就不喜欢吃了。”"],//34
            ["小娜陪你过万圣节","陪我过万圣节","太棒了！我想我需要一张白床单"],//35
            ["小娜陪你过万圣节","陪我过万圣节","正合我意，你准备好面具和戏装了吗？"],//36
            ["小娜陪你过万圣节","陪我过万圣节","好啊！我们一起做南瓜灯把！"],//37

            //圣诞节增加的
            ["小娜陪你过圣诞节","圣诞节都有什么习俗","装扮你的圣诞树或者扮演圣诞老人，都是西方的习俗啊！别忘了放好袜子要礼物！"],//38
            ["小娜陪你过圣诞节","圣诞节是怎么来的","是基督教徒纪念耶稣诞生的日子，由于人民格外重视，便成为一个全民性的节日"],//39
            ["小娜陪你过圣诞节","圣诞老人是从哪来的","有一位老人，名叫尼古拉斯。他乐善好施，喜欢帮助贫穷善良的人。后来，他就成了圣诞老人"],//40
            ["小娜陪你过圣诞节","圣诞色都有什么","西方的圣诞色有绿色、红色和白色。"],//41
            ["小娜陪你过圣诞节","圣诞树最早出现在哪儿","圣诞树最早出现再德国。"],//42

            ["小娜陪你过圣诞节","送我一句圣诞祝福","以往的圣诞都是灰色的，今年有了你，一切都变得不同，我的世界一下子变得多姿多彩，祝你圣诞快乐！"],//43
            ["小娜陪你过圣诞节","送我一句圣诞祝福","白雪飘飘，鹿铃霄霄，甜蜜的平安夜又来到，小手摆摆，舞姿曼曼，快乐的圣诞节日多美好！"],//44
            ["小娜陪你过圣诞节","送我一句圣诞祝福","愿圣诞之光普照你的每一个日子，愿阳关鲜花洒满你的人生旅程。"],//45
            ["小娜陪你过圣诞节","送我一句圣诞祝福","圣诞之夜祝福你，愿圣诞节的欢声笑语和欢乐气氛永远萦绕着你！"],//46
            ["小娜陪你过圣诞节","送我一句圣诞祝福","我们的友情很深，火鸡的味道很纯，小娜的祝福最真，祝愿圣诞快乐！"],//47

            ["小娜陪你过圣诞节","小娜圣诞节送男朋友什么礼物","送上一张你的购物清单"],//48
            ["小娜陪你过圣诞节","小娜圣诞节送男朋友什么礼物","让我想想......就送一双袜子来装礼物吧。"],//49

            ["小娜陪你过圣诞节","小娜圣诞节应该吃什么","西方吃火鸡，在中国，要问身边的姑娘。"],//50
            ["小娜陪你过圣诞节","小娜圣诞节应该吃什么","当然是吃大餐啊！如果你想换换口味，也可以吃点粗茶淡饭忆苦思甜。"],//51

            ["小娜陪你过圣诞节","小娜我也想要圣诞礼物","小娜可以帮你向圣诞老人许愿，明年你就会收到他的礼物了。"],//52
            ["小娜陪你过圣诞节","小娜我也想要圣诞礼物","我虽然不能送你礼物，但是我可以告诉你送礼物的圣诞老人到哪了。"],//53

            ["小娜陪你过圣诞节","怎么在圣诞节泡到姑娘","扮成圣诞老人，在她的袜子里装满礼物。"],//54
            ["小娜陪你过圣诞节","怎么在圣诞节泡到姑娘","送她一颗圣诞树，在树上挂满闪闪发亮的珠宝。"],//55
            ["小娜陪你过圣诞节","怎么在圣诞节泡到姑娘","请她吃火鸡，带她坐雪橇，给她唱铃儿响叮当。"],//56



            ["发朋友圈什么的，<br>吩咐小娜就够啦！","微信"],//57
            ["出门带上小娜，<br>再也不会迷路了！","高德地图"],//58
            ["想看什么视频，<br>告诉小娜就可以！","爱奇艺"],//59
            ["怕忘记什么，<br>叮嘱小娜就是了！","位置提醒"],//60
            ["订酒店什么的，<br>吩咐小娜就是了！","去哪儿"],//61
            ["买机票什么的，<br>吩咐小娜就是了！","国航"],//62
            57

        ],
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
            } else if(alignment == "bottom_center"){


                /* ***************      windows phone 单独处理 向上提 20  *************** */
                if(iswin == 1){
                    images[i].style.top = realH - imgH*bili - 20 +"px";
                }else if(iswin == 3){
                    images[i].style.top = realH - imgH*bili - 50 +"px";
                }else{
                    images[i].style.top = realH - imgH*bili +"px";
                }
                images[i].style.left = (realW-imgW*bili)/2+"px";
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
        /* ***************      windows phone 单独处理 *************** */
		$("#user_word").css("top", (parseInt($("#input_img").css("top"))+40*bili)+"px");
	    $("#xiaona_answer").css("left", (parseInt($("#input_img").css("left"))+10)+"px");
	    $("#xiaona_answer").css("width", (parseInt($("#input_img").css("width"))-10)+"px");
        /* ***************      windows phone 单独处理 *************** */
	    $("#show_info_img").css("top", (parseInt($("#input_img").css("top"))-500*bili)+"px");
	    $("#bill_img").css("top", (parseInt($("#input_img").css("top"))-872*bili)+"px");

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
			2. 服务器返回结果，停止晃动小娜头像，跳转到结果界面（0-63）0表示中奖，1-56是音频，57-62为视频, 63为优惠券
		*/

		//这里暂时做模拟操作
		//模拟开始
		var isRunning = $("#startBtn").attr("isRunning");
		if(isRunning == "true") return;
		$("#startBtn").attr("isRunning", true);
		$("#mainpage_xn").attr("src","img/mainpage_xn.gif");
		setTimeout(function(){


            //奖池1 - 不可中出手机，可中出优惠券，正常几率
            var prize_pool_1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63];

            //奖池2 - 不可中出手机，可中出优惠券，圣诞节中出几率50% 38-56 没有34
            var prize_pool_2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,33,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63];

            //奖池3 - 不可中出手机，不可中出优惠券，万圣节中出几率正常 38-56 没有34
            var prize_pool_3 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,33,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62];

            //可中出优惠券
            if(quan == 2){
                window.XIAONA.num = prize_pool_2[Math.floor(Math.random()*prize_pool_2.length)];
                //相反不可中出
            }else{
                window.XIAONA.num = prize_pool_3[Math.floor(Math.random()*prize_pool_3.length)];
            }

            //获得优惠券后进行标记
            if(window.XIAONA.num == 63){

                $.ajax({
                    type : 'POST',
                    url : 'http://182.92.64.207/xiaona/index.php/welcome/reloads',
                    data : '&od= ' + wechat_openid,
                    async : false,
                    dataType : 'json',
                    success : function(ress){
                        //设置不可再中出
                    }
                });

                quan = 1;
            }


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
				$("#show_info_img").attr("src","");
			} else if(XIAONA.num == 63){
				$("#show_info_img").attr("src","");
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

                //加载底部bing图片
                if(XIAONA.num <= 56 && XIAONA.num != 31) {
                    $("#show_info_img").attr("src","img/"+XIAONA.num+".jpg");
                }

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
        $("body").css("background-color","#fff");
        $("#mainpage").hide();
        $("#rewardList").show();
    });
    //
    $("#rewardReturn").click(function(){
        var isRunning = $("#startBtn").attr("isRunning");
        if(isRunning == "true") return;
        //TODO 打开排名界面，排名界面暂时没有
        $("body").css("background-color","#ee7700");
        $("#rewardList").hide();
        $("#mainpage").show();
    });


	//广告按钮事件
	$("#adBtn").click(function(){
		var isRunning = $("#startBtn").attr("isRunning");
		if(isRunning == "true") return;
		//TODO 点击广告图片操作
		window.location.href="http://www.nokia.com/cn-zh/phones/phone/lumia830/";
	});

	//中奖后，重新开始按钮操作
	$("#reward_phone_btn").click(function(){
		$("#rewardpage").css("display","none");
		$("#mainpage").fadeIn("slow");
		$("#close_btn").attr("isCancelPlay",false);
	});
	//没中奖，点击继续体验，执行小娜操作
	$("#noreward_phone").click(function(){
		if(XIAONA.num <57) {
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
		$("#show_info_img").css("display","none");

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
			if(XIAONA.num <= 56) {
				$("#func_l").attr("src","img/func_left_2.gif");
				$("#xiaona_answer").html(XIAONA.texts[XIAONA.num-1][2]);
				$("#xiaona_answer").css("display","block");


                //bill
                if(XIAONA.num == 31) {
                    $("#bill_img").css("display","block");
                }else{
                    $("#show_info_img").css("display","block");
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
		if(XIAONA.num <57) {
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

