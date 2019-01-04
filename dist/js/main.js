//1.配置模块路径
require.config({
	"paths" : {
		"jquery" : "jquery-1.11.3",
		"cookie" : "jquery.cookie",
		"two-meau" : "two-meau",
		"home":"home"
	}
})
//2.设置依赖
require(['jquery','cookie','two-meau','home'],function($,cookie,two,home){
	$(function(){
		two.load("#top","_Dolbal.html");
		two.load("#foot-box","_footer.html");
		two.img(".two-meau li a");
		two.json('../js/two-meau.json');
		
		two.jsonimg(7);
		two.hover(".two-meau li",".two-meau-div")
		two.hover(".first-li",".two-meau");
		two.hover1('.man-li',".man");
		two.hover1('.man-li1',".man1");
		two.hover1('.man-li2',".man2");
		two.hover1('.man-li3',".man3");
		two.hover1('.man-li4',".man4");
		home.list('.four-img',5);
		home.list2('.list1',16);
		home.list2('.list2',16);
		home.list2('.list3',16);
		home.json1('../js/foot.json','.after-center');
		// home.json2('../js/two-main.json','.two-home-list');
		home.scroll('.float-ul');
		two.click('.two-ul li a','two-home.html');
		
		//home.hover('#list-li','.li-a1','80px')
	})
	
})