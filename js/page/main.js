window.onload = function (){

		//滚动条事件
		$(window).scroll(function(event) {
				//获得滚动条事件
			if ($(window).scrollTop() > 100) {
				$('.toolbar-item-top').css('display', 'block');

			} else {

				$('.toolbar-item-top').css('display', 'none');
			}
		});
		$('.toolbar-item-top').click(function(event) {
			$('html,body').animate({
				scrollTop: 0
			},1000);
		});

	
//无间断滚动
    var speed = 10;//速度

		var slider = document.getElementById('slider-box');//容器
		var sliderWrapper = document.getElementById('slider-wrapper');//内层容器
		var slider1 = document.getElementById('slider1');//正体		

		slider1.innerHTML += slider1.innerHTML; //拷贝内容一式两份
		slider1.innerHTML += slider1.innerHTML; //考虑内容填不满，一式四份

		//改变left位置向左移动，当left值小于等于正体内容，left复位0
		function marquee() {
			var sLeft = parseInt(slider1.style.left);

			if (sLeft <= -slider1.offsetWidth/4) {				
				sLeft = 0;	
			}			

			sLeft --;
			slider1.style.left = sLeft + 'px'; 			
		}

		//初始化定时器
		var timer = setInterval(marquee, speed);

		//鼠标移上停止
		slider.onmouseover = function() {
			window.clearInterval(timer);
		}

		//鼠标离开继续
		slider.onmouseout = function() {
			timer = setInterval(marquee, speed);
		}


	//share区标签页
	var titles = document.getElementById('share_title');
	var as = titles.getElementsByTagName('a')
	// alert(as.length);
	var details = document.getElementsByClassName('share-detail');
	// alert(details.length);
	for (var i = 0; i <= as.length; i++) {

		//设置自定义属性tid
		as[i].setAttribute('tid',i);

		as[i].onmouseenter = function(){

		// 读取当前标题的tid属性
		var tid = this.getAttribute('tid');
		//所有内容隐藏
		for(var j = 0; j < details.length;j ++){
			details[j].style.display = 'none';
		}
		//当前内容显示
		details[tid].style.display = 'block';

		}
	};
}
