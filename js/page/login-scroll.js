$(document).ready(function(){

	
	/*
		侧边导航链接滑动到锚点
	*/
	$('#nav-right a').click(function(event) {
		$('#nav-right a').removeClass('active');
		$(this).addClass('active');
		var top = $(this.hash).offset().top ;
		$('html,body').animate({scrollTop:top},1000);

	});


			/*
		滚动条事件
	*/
	$(window).scroll(function(event) {
		
		function big(target){
			$('#nav-right a').removeClass('active');
			$(target).addClass('active');

		}
		// 滚动条卷去的大小
		var sTop = $(window).scrollTop();

		var header = $('#header');
		var timeSection = $('#timeSection');
		var exploreSection = $('#exploreSection');
		var detailSection = $('#detailSection');

		var  headerPos = {
			end:header.outerHeight()
		}

		var timePos = {
			start:timeSection.offset().top,
			end:timeSection.offset().top + timeSection.outerHeight() 
		}

		var explorePos = {
			start:exploreSection.offset().top,
			end:exploreSection.offset().top + exploreSection.outerHeight()
		}
		var detailPos = {
			start:detailSection.offset().top,
			end:detailSection.offset().top + detailSection.outerHeight()
		}

		if(sTop <= headerPos.end){
			big('.nav1');
		} else if(sTop > timePos.start && sTop <= timePos.end){
			big('.nav2');
		} else if(sTop > explorePos.start && sTop <= explorePos.end){
			big('.nav3');
		} else if(sTop > detailPos.start && sTop <= detailPos.end){
			big('.nav4');
		}  else{
			$('#nav-right a').removeClass('active');
		}

	});
	
	$('.icon-down').click(function(event) {
		var height = $('#header').outerHeight()
			$('html,body').animate({scrollTop:height},1000);
		});
});