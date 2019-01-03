//$('#top').load('_entry.html');
//获取页面元素
//手机号框
var $user = $('input[name="user"]');
//密码框
var $pwd = $('input[name="pwd"]');
//密码框父亲
var $pwdfater = $('.rejingling2');
//验证码框
var $rad = $('input[name="rad"]');
//验证码框父亲
var $radfater = $('.validate')
//错误信息提示
var $clue = $('.clue');
//登录按钮
var $btn = $('.box>a');
//跳转按钮
var $local = $('.local');
//验证码按钮
var $valibtn = $('.validate a');
//滑块父亲
var $boxcenter = $('.box-center');
//切换密码登录按钮
var $pwdbtn = $('.cut a');
console.log($boxcenter);
/*给手机号框添加得焦事件*/
$user.focus(function(){
	$clue.css({"display":"none"});
})
/*给登陆按钮设置点击事件*/
$btn.click(function(){
	var $us = $user.val();
	var $ra = $rad.val();
	//判断内容为空
	if(!$us){
		$clue.html('请输入手机号');
		$clue.css({"display":"block","color":"red"});
		$clue.append('<span></span>');
		return;
	}
	if(!$ra){
		$clue.html('验证码不能为空');
		$clue.css({"display":"block","color":"red"});
		return;		
	}
	var cookieStr = $.cookie('user')? $.cookie('user') : '';
	var cookieObj =convertCookieStrToObj(cookieStr);
	if($us in cookieObj ){
		if($ra == $clue.html()){
			console.log(1);
			$local.html('登录成功');
			$local.css('display','block');
		}
	}else{
		$clue.html('手机号未注册');
		$clue.css({"display":"block","color":"red"});
		$clue.append('<span></span>');
		return;	
	}
})
/*给获取验证码按钮添加点击事件*/
$valibtn.click(function(){
	//console.log(1);
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
/*给验证码框添加得焦事件*/
$rad.focus(function(){
	$(this).val("");
	$(this).css({"color":"#666"});
})
//获取六位验证码
function random(max,min){
	return Math.floor(Math.random()*(max-min+1)+min)
}
/*给使用密码登录添加划过事件*/
$pwdbtn.hover(function(){
	$(this).css({"color":"#e93036"})
	$(this).children().css({"background":"url(../../src/gulpimg/rejingling.png)  0px -94px"})
},function(){
	$(this).css({"color":""})
	$(this).children().css({"background":"url(../../src/gulpimg/rejingling.png)  0px 1px"})
})
/*给使用密码登录添加点击事件*/
var $off = false;

$pwdbtn.click(function(){
		$pwdfater.css({"display":"block"});
		$radfater.css({"display":"none"});
		$boxcenter.css({"display":"none"});
		$(this).html('使用短信验证登录');
		$(this).append("<span></span>");
		console.log($(this).children());
		$(this).children().css({"background":"url(../../src/gulpimg/rejingling.png)  0px -10px"});
		$(this).hover(function(){
			$(this).css({"color":"#e93036"})
			$(this).children().css({"background":"url(../../src/gulpimg/rejingling.png)  0px -108px"});
		},function(){
			$(this).css({"color":""}),
			$(this).children().css({"background":"url(../../src/gulpimg/rejingling.png)  0px -13px"});
		})
		$(this).click(function(){
						$pwdfater.css({"display":"none"});
						$radfater.css({"display":"block"});
						$boxcenter.css({"display":"block"});
						$(this).html('使用密码验证登录');
						$(this).append("<span></span>");
						$(this).children().css({"background":"url(../../src/gulpimg/rejingling.png)  0px 1px"});
		})
		})

	
			
	
		
	








//将cookie字符串转为cookie对象
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