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
		two.load("#top","_Dolbal.html");
		two.img(".two-meau li a");
		two.json('../js/two-meau.json');
		two.jsonimg(7);
		two.hover(".two-meau li",".two-meau-div")
		two.hover(".first-li",".two-meau");
		
	})
	
})