define(function(){
	return{
		list : function(id,num){
			
			var $oul = $('<ul></ul>')
			for(let i = 1; i < num ; i++){
				//console.log(i);
				var $oli = $('<li><a href= "#"><img src="../../src/gulpimg/list-'+i+'.png"></a></li>');
				$oul.append($oli);
			}
			$(id).append($oul);
		},
		list2 :function(id,num){
			var $oul = $('<ul class="list-ul"></ul>')
			$.getJSON("../js/list.json",function(data){
 			$(data).each(function(i,n){
				for(let i =1;i<num;i++){
					var $oli = $('<li id="list-li"><span><a href=""><img src="../../src/gulpimg/list2-'+i+'.jpg"></a></span></li>');
						$(n.h5).each(function(i,n){
						var $a1 = $('<a class="li-a1" href="two-home.html">'+n+'</a>');
							$oli.children().append($a1.get()[i]);
						$oul.append($oli);
					})
					$(n.h6).each(function(i,n){
						var $a2 = $('<a href="two-home.html">'+n+'</a>');
							$oli.children().append($a2.get()[i]);
						
						$oul.append($oli);
					})
					$(n.h7).each(function(i,n){
						var $n = n.split(' ');
						var $n1 = $n[0];
						var $n2 = $n[1];
						var $p = $('<div><p>'+$n1+'<span>'+$n2+'</span></p><a href="#">立即购买</a></div>');		
						$oli.children().append($p.get()[i]);
						$oul.append($oli);
					})	
				}		
				$(id).append($oul);
			})
			})
	
		},
		hover: function(id,obj,height){
			var $oli = $(id);
			$oli.each(function(i,n){
				console.log(this,$oli);
				$(n).hover(function(){
					$(obj).css("height",'"'+height+'"');
				},function(){
					$(obj).css("height","");
				})
			})
		},
		json1 : function(url,id){
			var $div = $('<div class="after-center-div"></div>');
			$(id).append($div);
			$.getJSON(url,function(data){
					$(data).each(function(i,n){
						for(var i in n){
							var $ul = $('<ul class="after-left-ul"></ul>')
							var $h3 = $('<div class="after-left-ul-h3">'+i+'</h3>');
							var $ul2= $('<ul class="two-ul"></ul>');
							$ul.append($h3);
							$(n[i]).each(function(i,n){
								var $str = JSON.stringify(n);
								$str= $str.substring(1,$str.length-1);
								var $oli = $('<li><a href="#">'+$str+'</a></li>');
								$ul2.append($oli);
								$ul.append($ul2);
							})
							$($('.after-center-div')).append($ul);		
						}
					})
					
					
			})
		},
		scroll : function(id){
			var $div = $(id);
			$(window).scroll( function(){
				var $top = $(this).scrollTop();
				if($top >= 500){
					$div.css({"display":"block"});
				}else{
					$div.css({"display":"none"});
				}
				
			} )
		},
		json2 : function(url,id){
			var $div = $('<div class="two-home-div"></div>');
			
			$(id).append($div);
			$.getJSON(url,function(data){
					$(data).each(function(i,n){
						for(var i in n){
							var $ul = $('<ul class="two-home-left-ul"></ul>')
							var $h3 = $('<div class="two-home-left-ul-h3">'+i+'</h3>');
							var $ul2= $('<ul class="two-ul"></ul>');
							$ul.append($h3);
							$(n[i]).each(function(i,n){
								var $str = JSON.stringify(n);
								$str= $str.substring(1,$str.length-1);
								var $oli = $('<li><a href="#">'+$str+'</a></li>');
								$ul2.append($oli);
								$ul.append($ul2);
							})
							$($('.after-center-div')).append($ul);		
						}
					})
					
					
			})
		}
		
	}
})