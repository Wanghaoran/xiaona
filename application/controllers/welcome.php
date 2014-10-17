<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Welcome extends CI_Controller {


    public function shows(){

    }

    public function checks(){
        if(!$_GET['code']){
            die('Authorization failure!');
        }


        //记录信息
    }

	public function index()
	{
        if(empty($_GET['code'])){
            $this->load->helper('url');
            $token_url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx4b9a0bd3865f2332&redirect_uri=' . urlencode('http://nokia.cnhtk.cn/xiaona') . '&response_type=code&scope=snsapi_base&state=index#wechat_redirect';
            redirect($token_url);
        }

        $token_url = 'https://api.weixin.qq.com/sns/oauth2/access_token?appid=wx4b9a0bd3865f2332&secret=8359e84e67ca7138aa1342d23f32eb00&code=' . $_GET['code'] . '&grant_type=authorization_code';
        $result_json = file_get_contents($token_url);
        $result_arr = json_decode($result_json, true);
        if(!empty($result_arr['errcode'])){
            die('Authorization failure!' .  $result_arr['errmsg'] . '</h1>');
        }

        $this -> load -> model('quan_model');
        //查询用户是否已中过优惠券，已中出则不在中
        $data = array();
        if($this -> quan_model -> checkquan($result_arr['openid'])){
            $data['quan'] = 1;
        }else{
            $data['quan'] = 2;
        }

        var_dump($data);
        $this->load->view('welcome', $data);
	}
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */