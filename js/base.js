/**
 * Created by wowjiumy on 2017/6/7.
 */

/*————————页面初始化时————————*/
$(function () {
	$(".detail-mask").hide();
	$("section[class='detail']").hide();
});

/*————————详情链接被点击时————————*/
$(function () {
	$("a[class='detail-a']").click(function () {
		$("section.detail").show("slow");
		$(".detail-mask").show();
	})
});

/*——————————当mask（暗色块）被点击时——————————*/
$(function () {
	$(".detail-mask").click(function () {
		
		$(".detail-mask").hide("slow");
		$("section[class='detail']").hide("slow");
		
	})
});

/*————————当用户点击add-task中的input增加任务时————————*/

$(function () {
	$(".add-task input[type='text']").keypress(function (event) {
		
		if(event.which ==13){
			var task = $(".add-task input[type='text']");
			
			//将任务保存到localStorage中
			localStorage.setItem("task", task.val());
			task.val("");
		}
	})
});