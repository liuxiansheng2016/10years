$(document).ready(function(){
	
        $('#passregister').focus(function() {
            $('#owl-login').addClass('password');
        }).blur(function() {
            $('#owl-login').removeClass('password');
        });
	// 邮箱或手机号框失去焦点时，检查是否合法
	$('#nameregister').blur(function(event) {
		var username = $(this).val();
		// 邮箱和手机号码验证手机号
		var usernameReg = /^\w+@((qq|126|163|sina|hotmail|gmail|sohu|139)\.com|sina\.cn|yeah\.net)$/;
		var phoneReg = /^1[345678]\d{9}$/;
		if(username){
			if(!usernameReg.test(username) && !phoneReg.test(username))
				$('.username').after('<p class="tipMsg msg1">请输入格式正确的邮箱或号码</p>');
		} else{
			$('.msg1').remove();
		}
	});
	//登录名框获得焦点时，提示信息消失
	$('#nameregister').focus(function(event) {
		$('.msg1').remove();
	});

	//密码框失去焦点后检查是否在6-16位之间
	$('#passregister').blur(function(event) {
		var password = $(this).val();
		var passwordReg = /^\d{6,8}$/;
		if(password){
			if (!passwordReg.test(password)) {
				$('.password').after('<p class="tipMsg msg2">请输入6-16位密码</p>');
			} else{
				$('.msg2').remove();
			}
		}
	});
	//密码框获得焦点时，提示信息消失
	$('#passregister').focus(function(event) {
		$('.msg2').remove();
	});

	// 产生随机验证码
	var code = new Array();
	function random(){
		var str = '';
		for(var i = 0; i <=3; i ++){
			code[i] = parseInt((90 - 55 + 1) * Math.random() + 55);
			if(code[i] >= 55 && code[i] <= 64){
				code[i] -= 7;
			}
			code[i] = String.fromCharCode(code[i]);
			
		}
		var randomCode = code.join(" ");
		$('.security-right div ').text(randomCode);
	}
	random();
	$('.security-right a').click(function(event) {
		random();
	});

	//验证码输入失去焦点时，检测输入是否与验证码相同
	$('.security input').blur(function(event) {
		var randomInput = $(this).val();
		var randomLetter = code.join('');
		if (randomInput) {
			//忽略大小写
			// 忽略大小写
			if(randomInput.toUpperCase() != randomLetter){
				$('.security').after('<p class="tipMsg msg3">验证码错误</p>');
			}else{
				$(".msg3").remove();
			}
		};
	});
	// 验证码输入框获得焦点时，提示信息消失
	$(".security input").focus(function(event) {
		$(".msg3").remove();
	});

	//点击注册按钮，验证表单
	$('#register-btn').click(function(event) {
		var username = $('#nameregister').val();
		if(!username ){
			if($('.msg1').length != 0)
				return ;
			$('.username').after('<p class="tipMsg msg1">请输入邮箱或号码</p>');
			return;
		}

		var password = $('#passregister').val();
		if(!password){
			if($('.msg2').length != 0)
				return;
			$('.password').after('<p class="tipMsg msg2">请输入密码</p>');
			return;
		}
		if (!$('.security input').val()) {
			if($('.msg3').val())
				return;
			$('.security').after('<p class="tipMsg msg3">请输入验证码</p>');
			return;
		};

		//创建用户类,参数是用户名和密码
		function Person(username,password){
			this.username = username;
			this.password = password;
		}
		//每次注册创建一个用户对象
		var u = new Person(username,password);

		//对象装换为字符串
		var uStr = JSON.stringify(u);

		//所有输入都合法，注册成功，将用户账号，密码存入本地存储
		if($('.tipMsg').length == 0){
			localStorage.setItem(username,uStr);
			if(localStorage.getItem(username)){
				alert("注册成功！");
				location.href = "login.html";
			} 
		}
	});
});