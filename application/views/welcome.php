<!doctype html>
<html>
<head>
    <meta charset=utf-8>
    <title>好礼摇不停 智趣享不够</title>
    <meta http-equiv="Cache-Control" content="no-cache">
    <meta name="viewport" content="width=device-width; initial-scale=1.0; minimum-scale=1.0; maximum-scale=1.0">
    <meta name="MobileOptimized" content="240">
    <meta name="tencent-x5-page-decoration" content="portrait">
    <meta name="oupengmobile" content="game,fullscreen,lockrotation,portrait">
    <meta name="x5-orientation" content="portrait">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="screen-orientation" content="portrait">
    <meta name="full-screen" content="yes">
    <meta name="imagemode" content="force">
    <meta name="browsermode" content="application">
    <link href="css/xiaona.css" rel="stylesheet" type="text/css" />
    <script src="js/jquery.js"></script>
    <script type="text/javascript" src="js/jquery.jplayer.js"></script>
    <script type="text/javascript">
        $(document).ready(function(){
            $("#jquery_jplayer_1").jPlayer({
                ready: function () {
                },
                canplay:function(){
                    $(this).jPlayer("play");
                },
                ended: function(){
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
                },
                swfPath: "/js",
                solution: "html, flash",
                supplied:"mp3",
                wmode: "window"
            });
        });
        if('ondevicemotion' in window){ //支持陀螺仪
            var SHAKE_THRESHOLD = 1000;
            var last_update = 0;
            var x, y, z, last_x, last_y, last_z;
            var shakeTimer = null;
            function deviceMotionHandler(eventData) {
                var acceleration =eventData.accelerationIncludingGravity;
                var curTime = new Date().getTime();
                if((curTime - last_update) > 100) {
                    var diffTime = curTime -last_update;
                    last_update = curTime;

                    x = acceleration.x;
                    y = acceleration.y;
                    z = acceleration.z;
                    var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;
                    if(speed > SHAKE_THRESHOLD){
                        if( $("#heng").css("display") == "block" || $("#mainpage").css("display") == "none" || $("#help_info").css("display") == "block") return;
                        $("#startBtn").click();
                    }
                    last_x = x;
                    last_y = y;
                    last_z = z;
                }
            }
            window.addEventListener('devicemotion', deviceMotionHandler, false);
        }
    </script>
</head>
<body style="background-color:#ee7700;">
<div id="heng"  style="display:none;position:fixed;background:url(img/heng.jpg) left bottom no-repeat;z-index:101"></div>
<div id="myVideoDiv" style="display:none;">
    <video id="myVideo" style="position:absolute;display:block;z-index:21" controls="controls" autoplay="autoplay"></video>
</div>
<div id="jquery_jplayer_1"></div>
<!--开始界面-->
<div data-role="page" id="mainpage" style="display:block;">
    <img id="title_head" src="img/title_head.jpg" realw="550" alignment="center" realh="232" realt="70">
    <img id="mainpage_xn" src="img/mainpage_xn.jpg" realw="472" alignment="center" realh="233" realt="360">
    <img id="startBtn" src="img/start_btn_1.png" realw="188" alignment="center" realh="188" realt="625" style="z-index:2">
    <img id="ruleBtn" src="img/rule_btn.jpg" realw="302" alignment="left_center" realh="78" realt="770">
    <img id="listBtn" src="img/reward_list_btn.jpg" realw="302" alignment="right_center" realh="78" realt="770">
    <img id="adBtn" src="img/ad_btn.jpg" realw="600" alignment="center" realh="250" realt="860" onclick="location.href='http://www.nokia.com/cn-zh/phones/phone/lumia830/';">
    <img id="help_info" src="img/help_info.jpg" realw="720" alignment="onresizeByWidth" realh="1562" style="display:none;z-index:10">
</div>

<!--摇奖结果界面-->
<div data-role="page" id="rewardpage" style="display:none;">
    <img id="reward_bgd" src="img/bg.jpg" realw="720" alignment="center" realh="1133">
    <!--中奖显示 start-->
    <div id="rewarded" style="display:none;">
        <label id="reward_desc" style="display:block;" reall="50" realt="50" fontsize="60" realw="200">亲爱的</label>
        <label id="reward_name" style="display:none;" reall="100" realt="110"  fontsize="60" realw="600"></label>
        <img id="reward_phone" style="display:block;" src="img/reward_phone.png" realw="344" alignment="center" realh="461" realT="220">
        <img id="reward_quan" style="display:none;" src="img/coupon.png" realw="600" alignment="center" realh="794" realT="100">
        <label id="reward_info1" style="display:block;" realt="760" fontsize="50" realw="720">恭喜你获得一部Lumia830</label>
        <label id="reward_info2" style="display:block;" realt="840" fontsize="30" realw="720">(注:请将您的姓名，地址，电话微信给小诺)</label>
        <img id="reward_phone_btn" src="img/reward_btn_c.png" realw="519" alignment="center" realh="164" realT="900">
    </div>
    <!--中奖显示 end-->
    <div id="noreward" style="display:block;">
        <img id="second_xn" style="display:block;" src="img/second_xn.png" realw="432" alignment="center" realh="391" realt="160">
        <label id="noreward_info1" style="display:block;" realt="650" fontsize="50" realw="700"></label>
        <img id="noreward_phone" src="img/second_btn.png" realw="519" alignment="center" realh="164" realt="820">
    </div>

</div>

<!--未中奖，显示小娜功能界面-->
<div data-role="page" id="funcpage" style="display:none;">
    <img id="bill_img" src="img/bill_img.jpg" realw="720" alignment="center" realh="872" realt="200" style="display:none;">
    <img id="close_btn" src="img/close.jpg" realw="28" alignment="right" realh="28" realt="40" style="z-index:10;">
    <img id="func_c" src="img/func_center_1.gif" realw="225" alignment="center" realh="225" realt="200">
    <label id="xiaona_word" style="display:block;color:rgb(20,99,250)" realt="400" fontsize="60" realw="720">主人，接下来，你<br>想要我做点什么？</label>
    <img id="func_l" src="img/func_left_1.gif" realw="110" realh="100" realt="10" reall="10">
    <label id="user_word" style="display:block;color:rgb(0,0,0);" reall="20" realt="1035" fontsize="40" realw="580"></label>

    <img id="input_img" src="img/input_img.jpg" realw="720" alignment="center" realh="119" realt="1000">

    <label id="xiaona_answer" style="display:block;color:rgb(20,99,250);word-wrap:break-word;" reall="60" realt="150" fontsize="50" realw="600"></label>
</div>
<!--显示功能结束返回界面-->
<div data-role="page" id="thirdpage" style="display:none;">
    <img id="reward_bgd" src="img/bg.jpg" realw="720" alignment="center" realh="1133">
    <img id="title_head" src="img/third_title.png" realw="550" alignment="center" realh="232" realt="70">
    <img id="third_xn" src="img/third_xn.png" realw="432" alignment="center" realh="391" realt="360">
    <img id="shareBtn" src="img/third_share_btn.png" realw="519" alignment="center" realh="164" realt="730">
    <img id="againBtn" src="img/third_again_btn.png" realw="519" alignment="center" realh="164" realt="910">
    <img id="share_help" src="img/share_info.png" realw="720" alignment="center" realh="1133" style="display:none;">
</div>

<div style="display: none;">
    <script src="http://v1.cnzz.com/stat.php?id=1253430086&web_id=1253430086" language="JavaScript"></script>
</div>
</body>

<script type="text/javascript" src="js/xiaona.js"></script>
<script type="text/javascript">
    var shareData = {
        "img_url": "http://182.92.64.207/xiaona/img/share_icon.jpg",
        "img_width": "200",
        "img_height": "200",
        "link": "http://182.92.64.207/xiaona/index.html",
        "desc":  "",
        "title": "<?=$quan?>好礼摇不停 智趣享不够"
    };
    document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
        WeixinJSBridge.call('hideToolbar');

        WeixinJSBridge.on('menu:share:timeline', function () {
            shareData.title = "<?=$quan?>好礼摇不停 智趣享不够";
            WeixinJSBridge.invoke('shareTimeline',shareData, function (res) {
                _report('send_msg', res.err_msg);
            });
        });

        //发送给好友
        WeixinJSBridge.on('menu:share:appmessage', function () {
            shareData.title = "<?=$quan?>好礼摇不停 智趣享不够";
            WeixinJSBridge.invoke('sendAppMessage', shareData, function (res) {
                _report('send_msg', res.err_msg);
            })
        });
    }, false);
</script>
</html>