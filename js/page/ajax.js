	$(document).ready(function() {


		//焦点图
		$('.find').click(function(event) {
			$('.replace').css("display","block");
			$('.banner').css("display","none");
		});
		$('.change').click(function(event) {
			$('.replace').css("display","none");
			$('.banner').css("display","block");
		});

			var topBtn = $('#topBtn')
			/*回到顶部按钮*/
			topBtn.click(function(event) {
				$('html,body').animate({scrollTop:0}, 1000)

			});
			
			$(window).scroll(function(event) {
				var sTop = $(window).scrollTop();
				if (sTop >= 200) {
			       topBtn.fadeIn('normal')
		       } else {
			       topBtn.fadeOut('nomal')
		             }
			});

			/*
				分页参数
			*/
			var recordCount = 0;//总记录数
			var pageSize = 9;//每页多少条
			var pageCount = 0;//共几页
			var pageNum = 1;//当前页码

			// 数据集合
			var data;


			$.ajax({
				url:"data.json",
				type: 'GET',
				dataType:"json",
				async:false //同步请求
			})
			.done(function(json) {
				// 响应的数据赋值给变量
				data = json;
				 // alert('请求成功');
		     $('#show').fadeOut(2000);

			})
			.fail(function(xhr,status,errorText) { //执行失败
				alert('请求失败:' + errorText);				
			});	

			//总记录数
			recordCount = data.length;

			// 计算共几页
			pageCount = parseInt(recordCount / pageSize);
			if (recordCount % pageSize != 0)
				pageCount ++;

			/*
				显示当前指定页码的数据
			*/
			
			function showData() {

				// 计算当前页的数据的起始下标和终止下标
				var start = (pageNum - 1) * pageSize;
				var end = pageNum * pageSize;

				// 得到当前页的数据
				var newArray = data.slice(start,end);

				var list = $('#list');//评论列表容器
				// list.empty();
				// 遍历数据动态生成界面
				$.each(newArray, function(index, val) {
					//动态生成
					html = '<div class="pic">';
					html += '  	<div class="pic-top" style="background:url(image/p' + (start + index) + '.jpg)">';
					html += '  		<div id="target">';
					html += val.target + '  			 <i><img src="image/dream.png" alt=""></i>';
					html +=  '  	</div>';
					html += '  		<div id="time">' + val.time + '</div>';
					html += '  	</div>';
					html += '  	<div class="pic-bottom">';
					html += '  		<div id="title">' + val.title + '</div>';
					html += '  		<div>';
					html += '  			<div class="number">';
					html += '  				<div class="col">';
					html += '  					<p>' + val.p1 + '</p>';
					html += ' 					动态'  				
					html +='  				</div>';
					html += '  				<div class="col">';
					html += '  					<p>' + val.p2 + '</p>';
					html += ' 					钦佩者'				
					html +='  				</div>';
					html += '  				<div class="col">';
					html += '  					<p>' + val.p3 + '</p>';
					html += ' 					关注'
					html +='  				</div>';
					html +=' 			</div>';
					html +=' 		</div>';
					html +=' 	</div>';
					html +=' </div>';

					//追加到容器中
			
				list.append(html);
			});

			
			// /*
			// 	动态显示隐藏分页按钮
			// */
			// if (pageNum != 1) {
			// 	$('#firstBtn,#prevBtn').show();
			// } else {
			// 	$('#firstBtn,#prevBtn').hide();
			// }

			// if (pageNum != pageCount ) {
			// 	$('#lastBtn,#nextBtn').show();
			// } else {
			// 	$('#lastBtn,#nextBtn').hide();
			// }

			// // 显示分页信息
			// $('#pageInfo').html('共' + recordCount + '条记录，每页' + pageSize + '条，共' + pageCount + '页，当前第' + pageNum + '页');

			
			}	

			// 默认加载第一页数据
			setTimeout(function(){
				showData();

			},2000);
			// // 首页按钮单击事件
			// $('#firstBtn').click(function(event) {				
			// 	pageNum = 1;
			// 	showData();
			// });

			// // 末页按钮单击事件
			// $('#lastBtn').click(function(event) {				
			// 	pageNum = pageCount;
			// 	showData();
			// });

			// // 上页按钮单击事件
			// $('#prevBtn').click(function(event) {				
			// 	pageNum --;
			
			// 	if (pageNum < 1)
			// 		pageNum = 1;

			// 	showData();
			// });

			// 下页按钮单击事件
			$('#loading').click(function(event) {	
				$('#loading .btn .img').css('display','block');
				setTimeout(function(){
						pageNum ++;
					$('#loading .btn .img').css('display','none');
						if (pageNum > pageCount){
							$('.btn').html('已经没有更多了');
						}
						
						showData();
			
				},500)	;
				

			});

		});	