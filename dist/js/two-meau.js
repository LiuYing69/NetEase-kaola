define(function(){
	return {
		img : function(id){
			var $oli=$(id);
			var $lg=$("<span class='lg'>&gt;</span>");
				$oli.append($lg);
				$oli.each(function(i,n){
					$(n).css({"background" : "url(../../src/gulpimg/two-"+(i+1)+".png) no-repeat 15px center " });
				})
			},
		json : function(url){
			var $div = $('<div class="two-meau-div"></div>');
			var $divlt = $('<div class="two-meau-div-left"></div>');
			var $divrt = $('<div class="two-meau-div-right"></div>');
			$div.append($divlt,$divrt);
			$('.two-meau li').append($div);
			$.getJSON(url,function(data){
					$(data).each(function(i,n){
						for(var i in n){
							var $ul = $('<ul class="two-meau-div-left-ul"></ul>')
							var $h3 = $('<div class="two-meau-div-left-ul-h3">'+i+'</h3>');
							var $ul2= $('<ul class="two-ul"></ul>');
							$ul.append($h3);
							$(n[i]).each(function(i,n){
								var $str = JSON.stringify(n);
								$str= $str.substring(1,$str.length-1);
								var $oli = $('<li><a href="two-home.html">'+$str+'</a></li>');
								$ul2.append($oli);
								$ul.append($ul2);
							})
							$($('.two-meau-div-left')).append($ul);		
						}
					})
					
					
			})
		},
		jsonimg : function(num){
			for(let i=1; i < num ; i ++){
				var $img =  $('<a href="#"><img src="../../src/gulpimg/ul-'+i+'.jpg"></a>');
				var $png = $('<a href="#"><img class="png" src="../../src/gulpimg/ul-7.png" ></a>');
				$($('.two-meau-div-right')).append($img);
			}
			$($('.two-meau-div-right')).append($png);
			
		},
		hover: function(id,obj){
			var $oli = $(id);
			$oli.each(function(i,n){
				$(n).hover(function(){
					$(obj).css("display","block");
				},function(){
					$(obj).css("display","none");
				})
			})
		},
		load : function(index,url){
			$(index).load(url);
		},
		hover1: function(id,obj){
			var $oli = $(id);
			$oli.each(function(i,n){
				$(n).hover(function(){
					$(obj).css("display","block");
					$(this).css({"background":"#fff","border":"1px solid #ccc","borderBottom":"0"});
					$(id+'>a').css({"color":"#ff2438"});
					$(id+' span').css({"transform":"rotate(180deg)","marginTop":"3px","borderColor":"#ff2438 transparent  transparent transparent","transtion":"3s"});
				},function(){
					$(obj).css("display","none");
					$(this).css({"background":"","border":"","borderBottom":"0"});
					$(id+'>a').css({"color":""})
					$(id+' span').css({"transform":"","marginTop":"","borderColor":"","transtion":""});
				})
			})
		},
		click : function(id,url){
			$(id).click(function(){
				localtion.href = url;
			})
		}
		
		
	}
	
})