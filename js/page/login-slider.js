window.onload = function (){


	/*时间轴区动画*/



	//时间轴动画

	var speed1 = 20; 

	//容器
	var box = document.getElementById('time-box');
	//内层容器
	var wrappers = document.getElementById('record-wrapper');
	//正体
	var sliders = document.getElementById('record-slider');
	sliders.innerHTML += sliders.innerHTML; //拷贝内容一式两份
	function move(){
		var sleft = parseInt(sliders.style.left);

		if (sleft <= -sliders.offsetWidth) {				
				sleft = 0;	
			}			
		sleft --;
		sliders.style.left = sleft + 'px';
	}

		 time1 = setInterval(move,speed1);

	
	box.onmouseover = function() {
		window.clearInterval(time1);
	}
	box.onmouseout = function() {
		 time1 = setInterval(move,speed1);
	}


	// 鼠标移动事件

	sliders.onmousedown = function(e){
		window.clearInterval(time1);
		e = window.event || e;
		//获得鼠标按下相对于div的位置
		var offsetX = e.offsetX;
		document.onmousemove = function(e){
			e = window.event || e;
			// 计算位置
			var vLeft = e.clientX - offsetX;	
			//动态设置div的位置
			if (vLeft >= box.offsetWidth)
			vLeft =  box.offsetWidth;
			sliders.style.left = vLeft + 'px';
		} 
			//document鼠标抬起事件
			document.onmouseup = function() {
					// 删除事件
					document.onmousemove = null;
					document.onmouseup = null;
				}
	}

	//
	// 轮播容器
	var list = document.getElementById('list');
	//div列表
	var wrapper = document.getElementById('list-wrapper');
	var content = document.getElementById('time-content');
	// 左右箭头
	var prev = document.getElementById('prev');
	var next = document.getElementById('next');
	//单个div宽度
	var divWidth = 1000;
	var divCount = document.getElementsByClassName('time-content').length;
		// 动画同步标识
	var isAnimate = false;

	// 左箭头单击事件
	prev.onclick = function() {
		//判断动画是否进行中
		if (isAnimate)
			return;
		animate(divWidth);//运动	
		
	}
	//右箭头单击事件
	next.onclick = function() {
			//判断动画是否进行中
		if (isAnimate)
			return;		
		animate(-divWidth); //运动

	}

	//运动函数
	function animate(offset){

		//计算出新的位置
		var newLeft = parseInt(wrapper.style.left) + offset;
		//运动参数
		var time = 800;//动画过渡时间
		var interval = 40;//每隔多少毫秒执行一次
		var speed = offset / (time / interval); //每次移动的像素数
		//go函数
		function go(){
			//获得位置
			var left = parseInt(wrapper.style.left);

			// 判断是否到达目标位置
			if (speed > 0 && left >= newLeft || speed < 0 && left <= newLeft) {
				// 终止定时器
				clearInterval(timerId);
				// 动画终止
				isAnimate = false;
				//防止误差，直接设置到目标位置
				left = wrapper.style.left = newLeft + 'px';
				return;
			}
			// 递增递减位置
			wrapper.style.left = left + speed + 'px';

		
			if (left >= -1000 ){
			prev.style.display = 'none';
			next.style.display = 'block'
			} else {
				prev.style.display = 'block';
			}
			if (left <= -4000){
			next.style.display = 'none';
			prev.style.display = 'block';
			} else{
				next.style.display = 'block'
			}
		}
			// 定时器
		var timerId = setInterval(go,interval);	
		// 动画进行中
		isAnimate = true;

	}



/*
	详情区动画*/
	var time = 680;//动画过渡时间
	var interval = 32;//每隔多少毫秒执行一次
	var speed = 32 / (time / interval); //每次移动的像素数
	var slider = document.getElementById('title-box');
	var slider1 = document.getElementById('slider1');
	var slider2 = document.getElementById('slider2');
	slider2.innerHTML = slider1.innerHTML;
	function marquee(){
		if (slider1.offsetHeight - slider.scrollTop <= 0)
			slider.scrollTop -= slider1.offsetHeight;
		else 
			slider.scrollTop +=  speed;
	}
	var timer = setInterval(marquee,interval);



}