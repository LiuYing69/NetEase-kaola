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
			
			var $oul = $('<ul class="ul"></ul>')
			$.getJSON("../js/list.json",function(data){
 			$(data).each(function(i,n){
// 				for(let i in n){
// 					console.log(i);
// 					$(n[i]).each(function(i,n){
// 						var $a1 = $('<a href=""#">'+n+'</a>')
// 					})
// 				}
			
				$(n.h5).each(function(i,n){
					var $oli = $('<li class="list-li"><a href= "#"><img src="../../src/gulpimg/list2-'+i+'.jpg"></a></li>');
					var $a1 = $('<a href="#">'+n+'</a>')
					// console.log($a1);
					for(let i in $a1.get()){
						$oli.append($a1.get()[i]);
					}	
					$oul.append($oli);
				})
				var $oli1 = $('.list-li');
				$(n.h6).each(function(i,n){
					
					console.log($oli1);
					var $a2 = $('<a href="#">'+n+'</a>');
					for(let i in $a2.get()){
						$oli1.append($a2.get()[i]);
					}
					//$('.li').append($oli1);
				})
// 				$(n.h7).each(function(i,n){
// 					var $oli2 = $('<li></li>');
// 					var $p = $('<div><p>'+n+'</p><a href="#">立即购买</a></div>');
// 					for(let i in $p){
// 						$oli2.append($p.get()[i]);
// 					}
// 					$oul.append($oli2);
// 				})
				
				$(id).append($oul);
			})
			})
	
		}
	}
})