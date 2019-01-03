$(function(){
	//获取图片
	var $img = $('.banner-img li');
	//获取按钮
	var  $btn= $('.banner span');
	var $lt = $('#lt');
	var $gt = $('#rt');
	//获取圆点
	var $circle = $('.circle li a');
	//父盒子
	var $fater = $('.banner');
	/*记录下标*/
	var $index = 0;
	/*计时器*/
	var $timer = null;
	console.log($index);
	/*给放图片的盒子添加鼠标移入事件*/
	$fater.mouseenter(function(){
		$btn.css({"display":"block"});
		clearInterval($timer);
	})
	/*给放图片的盒子添加鼠标移出事件*/
	$fater.mouseleave(function(){
		$btn.css({"display":"none"})
		autoplay();
	})
	/*左按钮点击事件*/
	$lt.click(function(){
		$index -- ;
		if($index == -1){
			$index = $img.length-1;
		}
		slide();
	})
	/*右按钮点击事件*/
	$gt.click(function(){
		$index ++ ;
		if($index == $img.length){
			$index = 0;
		}
		slide();		
	})
	/*给小圆点添加移入移出给小圆点添加点击事件事件/给小圆点添加点击事件*/
	$circle.each(function(i,n){
		$(this).mouseenter(function(){
			$index = i;
			slide();
		})
		$(this).mouseleave(function(){
			$(this).css({"background":""});
		})
		$(this).click(function(){
			$(this).css({});
			$index = i;
			slide();
		})
		
	})
	//图片轮播
	function slide(){
		$img.each(function(i,n){
			$(this).css({"display":"none"}),
			$($circle[i]).css({"background":"#fff"});
		})
		//当前图片显示
		$($img[$index]).css({"display":"block"});
		//当前圆点颜色
		$($circle[$index]).css({"background":"red"});
	}
	function autoplay(){
		$timer = setInterval(function(){
			$index ++;
			if($index == $img.length){
				$index = 0;
			}
			slide();
		},3000)
	}
	autoplay();
	
})
