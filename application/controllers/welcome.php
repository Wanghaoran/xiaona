<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Welcome extends CI_Controller {


    public function shows(){
        $this->load->helper('url');
        $token_url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx4b9a0bd3865f2332&redirect_uri=' . urlencode('http://nokia.cnhtk.cn/xiaona/index.php/welcome/checks') . '&response_type=code&scope=snsapi_base&state=index#wechat_redirect';
        redirect($token_url);
    }

    public function checks(){
        if(!$_GET['code']){
            die('Authorization failure!');
        }
        $token_url = 'https://api.weixin.qq.com/sns/oauth2/access_token?appid=wx4b9a0bd3865f2332&secret=8359e84e67ca7138aa1342d23f32eb00&code=' . $_GET['code'] . '&grant_type=authorization_code';
        $result_json = file_get_contents($token_url);
        $result_arr = json_decode($result_json, true);
        if(!empty($result_arr['errcode'])){
            die('Authorization failure!' .  $result_arr['errmsg'] . '</h1>');
        }

        //记录信息
        $this -> load -> model('quan_model');
        $this -> quan_model -> insertuser($result_arr['openid']);
    }

	public function index()
	{
		$this->load->view('welcome');
	}
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */