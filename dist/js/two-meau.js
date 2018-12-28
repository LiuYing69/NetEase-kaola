define(function(){
	return {
		img : function(id){
			//var oli = document.querySelectorAll("."+id+" li");
			var $oli=$("."+id+" li a");
			$oli.each(function(i,n){
			$(n).css({"background" : "url(../../src/gulpimg/two-"+(i+1)+".png) no-repeat 15px center " })
			})
			}
	}
	
})
