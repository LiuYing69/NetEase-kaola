//1.配置模块路径
require.config({
	"paths" : {
		"jquery" : "jquery-1.11.3",
		"cookie" : "jquery.cookie",
		"two-meau" : "two-meau"
	}
})
//2.设置依赖
require(['jquery','cookie','two-meau'],function($,cookie,two){
	$(function(){
		two.img("two-meau");
		two.json('../js/two-meau.json');
	})
	
})