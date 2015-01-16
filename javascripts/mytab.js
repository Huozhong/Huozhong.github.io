$(document).ready(function(){
	var $lis=$('.tab_hd ul li');
	var index;
	var $divs=$('.tab_bd .mod');
	var timeId=null;
	$lis.on('mouseover',function(){
		var $that=$(this);
		if(timeId){
			clearTimeout(timeId);
			timeId=null;
		}
		timeId=setTimeout(function(){
			$that.addClass('selected').siblings().removeClass('selected');
			index=$that.index();
			$divs.eq(index).show().siblings().hide();
		}, 100);
		
	});
});

// window.onload=function(){
// 	var $lis=$('.tab_hd ul li');
// 	var index;
// 	var $divs=$('.tab_bd .mod');
// 	$lis.on('mouseover',function(){
// 		$(this).addClass('selected').siblings().removeClass('selected');
// 		index=$(this).index();
// 		$divs.eq(index).show().siblings().hide();
// 	});
// }