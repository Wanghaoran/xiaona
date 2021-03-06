<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Welcome extends CI_Controller {



	public function index()
	{
        $this->load->helper('url');
        if(empty($_GET['code'])){
            $token_url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx4b9a0bd3865f2332&redirect_uri=' . urlencode('http://nokia.cnhtk.cn/xiaona') . '&response_type=code&scope=snsapi_userinfo&state=index#wechat_redirect';
            redirect($token_url);
        }


        $token_url = 'https://api.weixin.qq.com/sns/oauth2/access_token?appid=wx4b9a0bd3865f2332&secret=8359e84e67ca7138aa1342d23f32eb00&code=' . $_GET['code'] . '&grant_type=authorization_code';
        $result_json = file_get_contents($token_url);
        $result_arr = json_decode($result_json, true);
        if(!empty($result_arr['errcode'])){
//            die('Authorization failure!' .  $result_arr['errmsg'] . '</h1>');
            redirect('http://182.92.64.207/xiaona/');
        }

        $this -> load -> model('quan_model');

        //查询用户是否已中过优惠券，已中出则不在中
        $data = array();
        if($this -> quan_model -> checkquan($result_arr['openid'])){
            $data['quan'] = 1;
        }else{
            $data['quan'] = 2;
        }



        //区分windows phone 平台
        if(strpos($_SERVER["HTTP_USER_AGENT"], 'Windows Phone')){
            if(strpos($_SERVER["HTTP_USER_AGENT"], 'RM-1090')){
                $data['isWin'] = '3';
            }else{
                $data['isWin'] = '1';
            }
        }else{
            $data['isWin'] = '2';
        }

        //open id
        $data['openid'] = $result_arr['openid'];


        $this->load->view('welcome', $data);
	}


    /*
    public function index(){
        $data = array();
        $data['quan'] = 1;
        $data['openid'] = '2';
        $this->load->view('welcome', $data);
    }
    */

    public function tests(){
        if(strpos($_SERVER["HTTP_USER_AGENT"], 'Windows Phone')){

            if(strpos($_SERVER["HTTP_USER_AGENT"], 'RM-1090')){
                echo 'Lumia 535';
                return;
            }
            echo 'Windows Phone';
            return;
        }else{
            echo 'No';
            return;
        }
    }

    //记录已获得优惠券的用户
    public function reloads(){
        $openid = $_POST['od'];
        $this -> load -> model('quan_model');
        $this -> quan_model -> insertuser($openid);
    }

    public function webdebug(){
        //open id
        $data['openid'] = 'webdebug';
        $data['quan'] = 1;
        $data['isWin'] = '2';


        $this->load->view('welcome', $data);
    }


}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */