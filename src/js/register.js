//获取页面元素
var $user = $('input[name="user"]');
var $pwd = $('input[name="pwd"]') ;
var $rad = $('input[name="rad"]');
var $clue = $('.clue');
var $valibtn = $('.validate a');
var $btn = $('.box>a');
var $local = $('.local');
var $arr = [false,false];
console.log($user,$pwd,$rad,$clue,$valibtn,$btn);
$("#box").load('_register.html');
//设置验证事件
/*手机号验证事件*/
$user.blur(function(){
	var $content = $(this).val();
	var $re = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
	if(!$re.test($content)){
		$clue.html('手机号格式错误');
		$clue.css({"display":"block","color":"red"}),
		$clue.append('<span></span>');
		$arr[0] = false;
	}else{
		$arr[0] = true;
	}
})
/*密码验证事件*/
$pwd.blur(function(){
	var $content = $(this).val();
	var $re =/^[0-9A-Za-z_\.]{6,16}$/;
	if(!$re.test($content)){
		$clue.html('密码由6-16个字符组成');
		$clue.css({"display":"block","color":"red"});
		$clue.append('<span></span>');
		$arr[0] = false;
	}else{
		$arr[0] = true;
	}
})
/*给获取验证码按钮添加点击事件*/
$valibtn.click(function(){
	console.log(1);
	$clue.html(random(999999,100000));
	$clue.css({"color":"#666","display":"block"});
	
})
/*给验证码框添加失焦事件*/
$rad.blur(function(){
	var $content = $(this).val();
	if($content != $clue.html()){
		console.log(1);
		$(this).val("请输入正确验证码");
		$(this).css({"color":"red"});
	}
})
$rad.focus(function(){
	$(this).val("");
	$(this).css({"color":"#666"});
})
/*注册按钮事件*/
$btn.click(function(evt){
	var $us =  $user.val();
	var $pw = $pwd.val();
	var $ra = $rad.val();
	console.log(1);
	if(!$us){
		$clue.html('请输入手机号');
		$clue.css({"display":"block","color":"red"});
		$clue.append('<span></span>');
		return;
	}
	if(!$pw){
		$clue.html('密码不能为空');
		$clue.css({"display":"block","color":"red"});
		return;		
	}
	if(!$ra){
		$clue.html('验证码不能为空');
		$clue.css({"display":"block","color":"red"});
		return;		
	}
	var cookieStr = $.cookie('user') ? $.cookie('user') : '';
	var cookieObj = convertCookieStrToObj(cookieStr);
	if($us in cookieObj){
		$clue.html('手该机号已注册');
		$clue.css({"display":"block","color":"red"});
		$clue.append('<span></span>');
	}else{
		cookieObj[$us] = $pw;
		cookieStr = convertObjToCookieStr(cookieObj);
		$.cookie('user',cookieStr,{expire : 7,path : '/'});
		$local.css({"display":"block"});
	}
	
	
})
//跳转按钮事件
$local.click(function(){
	location.href = 'login.html';
})
//获取六位验证码
function random(max,min){
	return Math.floor(Math.random()*(max-min+1)+min)
}
console.log(random(999999,100000));
//将字符串转为对象
function convertCookieStrToObj(str){
		if(!str){
			return {};
		}
		
		var arr = str.split(','); 
		//console.log(arr);
		var obj = {};
		for(var i = 0;i < arr.length;i ++){
			var list = arr[i].split(':');
			obj[list[0]] = list[1];
		}
		return obj;
	}
	//将对象转为cookie字符串
	function convertObjToCookieStr(obj){
		var str = '';
		for(var i in obj){
			var pwd = obj[i];
			if(str){
				str += ',';
			}
			str += i + ':' + pwd;
		}
		return str;
	}
