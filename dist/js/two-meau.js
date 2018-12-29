define(function(){
	
	return {
		img : function(id){
			var $oli=$("."+id+" li a");
			var $lg=$("<span class='lg'>&gt;</span>");
			$oli.append($lg);
			$oli.each(function(i,n){
				$(n).css({"background" : "url(../../src/gulpimg/two-"+(i+1)+".png) no-repeat 15px center " });
				$(n).hover(function(){
					
				},function(){
					
				})
			})
			},
		json : function(url){
			$.getJSON(url,function(data){
					var $two=$('<div class="two-meau-div"></div>');
					$('.meau-bar').append($two);
					for(var i in data[0]){
						console.log(data);
						var $ul = $('<ul class="two-meau-div-ul"></ul>')
						var $h3 = $('<div class="two-meau-div-ul-h3">'+i+'</h3>');
						var $ul2= $('<ul class="two-ul"></ul>');
						$ul.append($h3);
						$(data[0][i]).each(function(i,n){
							var $str = JSON.stringify(n);
							$str= $str.substring(1,$str.length-1);
							var $oli = $('<li><a href="#">'+$str+'</a></li>');
							$ul2.append($oli);
							$ul.append($ul2);
						})
						$two.append($ul);
						
					}
			})
		}
	}
})