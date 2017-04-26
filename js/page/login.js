$(document).ready(function() {


	// 点击注册按钮，出现注册界面
	$('.wrapper .login').click(function(event) {
		$('.wrapper .login').text('登录');

		$('.account').addClass('none');
		$('.account-register').removeClass('none');

	});


	//登录按钮
	$('#login-btn').click(function(event) {
		
		// //点击登录按钮，验证用户名和密码
		// var username = $('#userlogin').val();
		// var password = $('#passlogin').val();

		// for(var i = 0; i < localStorage.length;i ++){
		// 	var key = localStorage.key(i);//键
		// 	var val = localStorage.getItem(key);
		// 	val = JSON.parse(val);

		// 	if (key != username ) {
		// 		alert("请输入正确的用户名和密码！");
		// 		return;
		// 	}else{
		// 		if(password == val.password){
		// 			alert('终于登录成功了');
		// 			location.href = "about.html";
		// 		}else {
		// 			alert("用户名或密码不正确");
		// 		}
		// 	}
		// }
				var username = $("#userlogin").val();
				var password = $("#passlogin").val();
				if(!localStorage.getItem(username)){
					alert("请先去注册吧！");
					return;
				}else{
					if(password == JSON.parse(localStorage.getItem(username)).password){
						alert("登录成功");
						location.href = "about.html";
					}
					else{
						alert("用户名或密码不正确");
					}
				}
		
	});


	// 勾选记住我选项，提示安全信息
	$("#remeber input").click(function(event) {
		if($(this).prop('checked')){
			$(".remeber_msg").fadeIn("slow");
			setTimeout(function(){
				$(".remeber_msg").fadeOut("slow");
			},2500);
			//如果登录时选中记住我，则记录此次登录的用户名
			localStorage.setItem("remember",$('#userlogin').val());
		} else{
			//取消记住我按钮选项，删除localstorage中的remember;
			localStorage.removeItem("remember");
		}
	});
		//如果localstorage中存在remember,则自动显示用户名和密码，记住我为选中状态
		if(localStorage.getItem('remmember')){
			$("#remeber input").attr("checked",true);
			//取出remenber中存储的用户名
			$('#userlogin').val(localStorage.getItem("remember"));

		}
	
});


