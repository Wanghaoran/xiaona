<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Welcome extends CI_Controller {


    public function shows(){
        $this->load->helper('url');
        $token_url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx4b9a0bd3865f2332&redirect_uri=' . urlencode('http://nokia.cnhtk.cn/xiaona/index.php/welcome/checks') . '&response_type=code&scope=snsapi_base&state=index#wechat_redirect';
        redirect($token_url);
    }

    public function checks(){
        var_dump($_GET);
    }

	public function index()
	{
		$this->load->view('welcome');
	}
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */