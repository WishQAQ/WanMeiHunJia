$(document).ready(function(){
	     var wiheight=window.screen.availHeight;
	      var scrolltop = $(document).scrollTop();
	    $(window).scroll(function(event) {
	    	 scrolltop = $(document).scrollTop();
	    	  if(scrolltop>=(wiheight*3)){
	    	     $(".fix_bottom").fadeIn();
	         }else{
	         	$(".fix_bottom").fadeOut();
	         }
	    })
	    $("#bt_close").click(function(){
	    	$(".fix_bottom").hide();
	    })
	    
	    $("#date").dateSelect();
//	    $("#date1").dateSelect();
	  $(".add1").find(".v_1").hover(function(){
	   	   $(this).find("img").attr("src","http://s.jingzhizx.com/hl/w/img/add1_i1_ac.png");
	   },function(){
	   	   $(this).find("img").attr("src","http://s.jingzhizx.com/hl/w/img/add1_i1.png");
	   })
	   $(".add1").find(".v_2").hover(function(){
	   	   $(this).find("img").attr("src","http://s.jingzhizx.com/hl/w/img/add1_i2_ac.png");
	   },function(){
	   	   $(this).find("img").attr("src","http://s.jingzhizx.com/hl/w/img/add1_i2.png");
	   })
	   $(".add1").find(".v_3").hover(function(){
	   	   $(this).find("img").attr("src","http://s.jingzhizx.com/hl/w/img/add1_i3_ac.png");
	   },function(){
	   	   $(this).find("img").attr("src","http://s.jingzhizx.com/hl/w/img/add1_i3.png");
	   })
	   $(".row5 li").hover(function(){
	   	   $(this).find("img").show();
	   },function(){
	   	    $(this).find("img").hide();
	   })
		var Olen=$('.img_scroll .img_group ul li').length;
	       $('.img_scroll .img_group ul').width(Olen*900+"px");
	 var i=0;
	$('.row7 .clic_ri').click(function(){
			i++;
			if(i>Olen-1) 
			i=0;
			$('.img_scroll .img_group ul').animate({"left":i*-900+"px"},600);
		})
    $('.row7 .clic_ri').hover(function(){
    	$(this).find("img").attr("src","http://s.jingzhizx.com/hl/w/img/ri_active.png");
    },function(){
    	$(this).find("img").attr("src","http://s.jingzhizx.com/hl/w/img/cli_ri.png");	
    })
	$('.row7 .clic_le').click(function(){
			i--;
			if(i<0) i=Olen-1;
			$('.img_scroll .img_group ul').animate({"left":i*-900+"px"},600)
		})
	
	 $('.row7 .clic_le').hover(function(){
    	$(this).find("img").attr("src","http://s.jingzhizx.com/hl/w/img/le_active.png");
    },function(){
    	$(this).find("img").attr("src","http://s.jingzhizx.com/hl/w/img/cli_le.png");	
    })
	 
	var city=getList();
	var olist=""; 
	for(var i=0;i<city.length;i++){
	     olist+='<option>'+city[i].text+'</option>';  
	}
	$(".city_select").append(olist); 
	$("#go_btn").click(function(){
		 var tel=$("#tel_").val();
		 var name=$("#name_").val();
	    if($(".city_select").find("option:selected").val() == "婚礼城市") {
				hunli.alert("请选择城市！");
			} else if($("#date").val().length <= 0) {
				hunli.alert("请选择婚期！");
			} else if(name.length <= 0) {
                hunli.alert("姓名不能为空！");
            } else if(tel.length <= 0) {
                hunli.alert("手机号不能为空！");
            } else if(!(/^1[34578]\d{9}$/.test(tel))) {
                hunli.alert("手机号格式不对！");
            } else {
                var params = {
					tel: tel,
					name: name,
					city: $(".city_select").find("option:selected").val(),
					yuyuetime: $("#date").val(),
					callback: function() {
						var txt = "恭喜您！已提交成功";
						window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.success);
					}
				}
				onsubmit(params);
			}
	}) 
})
//
//var app1 = new Vue({
//	el: '#form1',
//	data: {
//		name: "",
//		tel: "",
//		city: "",
//		yuyuetime: "",
//		YX: ""
//	},
//	mounted: function() {
//		this.YX = getList();
//	},
//	methods: {
//		action: function() {
//			if($(".city_select1").find("option:selected").val() == "婚礼城市") {
//				hunli.alert("请选择城市！");
//			} else if($("#date1").val().length <= 0) {
//				hunli.alert("请选择婚期！");
//			} else if(this.name.length <= 0) {
//				hunli.alert("姓名不能为空！");
//			} else if(this.tel.length <= 0) {
//				hunli.alert("手机号不能为空！");
//			} else if(!(/^1[34578]\d{9}$/.test(this.tel))) {
//			   hunli.alert("手机号格式不对！");
//			} else {
//				var params = {
//					tel: this.tel,
//					name: this.name,
//					city: $(".city_select1").find("option:selected").val(),
//					yuyuetime: $("#date1").val(),
//					callback: function() {
//						var txt = "恭喜您！已提交成功";
//						window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.success);
//
//					}
//				}
//				onsubmit(params);
//			}
//		}
//	}
//})   
//	 
//
//
//
//
//var app = new Vue({
//	el: '#form',
//	data: {
//		name: "",
//		tel: "",
//		city: "",
//		yuyuetime: "",
//		YX: ""
//	},
//	mounted: function() {
//		this.YX = getList();
//	},
//	methods: {
//		action: function() {
//			if($(".city_select").find("option:selected").val() == "婚礼城市") {
//				$("#form li").find(".arrow").html("");
//				$("#city").find(".arrow").html("*请确定城市");
//			} else if($("#date").val().length <= 0) {
//				$("#form li").find(".arrow").html("");
//				$("#time").find(".arrow").html("*请选择婚期");
//			} else if(this.name.length <= 0) {
//				$("#form li").find(".arrow").html("");
//				$("#name").find(".arrow").html("*姓名不能为空");
//			} else if(this.tel.length <= 0) {
//				$("#form li").find(".arrow").html("");
//				$("#tel").find(".arrow").html("*手机号不能为空");
//			} else if(!(/^1[34578]\d{9}$/.test(this.tel))) {
//				$("#form li").find(".arrow").html("");
//				$("#tel").find(".arrow").html("*手机号格式不对");
//			} else {
//				var params = {
//					tel: this.tel,
//					name: this.name,
//					city: $(".city_select").find("option:selected").val(),
//					yuyuetime: $("#date").val(),
//					callback: function() {
//						var txt = "恭喜您！已提交成功";
//						window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.success);
//
//					}
//				}
//				onsubmit(params);
//			}
//		}
//	}
//})


function onsubmit(params) {
	params.tel = encodeURIComponent(encodeURIComponent(params.tel));
	params.name = encodeURIComponent(encodeURIComponent(params.name));
	params.yuyuetime = encodeURIComponent(encodeURIComponent(params.yuyuetime));
	params.city = encodeURIComponent(encodeURIComponent(params.city));
	var fromurl = encodeURIComponent(encodeURIComponent(window.location.href));
	var formdata = "city=" + params.city + "&name=" + params.name + "&yuyuetime=" + params.yuyuetime + "&tel=" + params.tel + "&fromurl=" + fromurl;
	$.ajax({
		dataType: 'jsonp',
		url: 'http://crm.zzxhao.com/SelfinfoService/add?' + formdata,
		jsonpCallback: "success_jsonpCallback",
		success: function(json) {
			var d = json;
			if(json[0].success) {
				if(params.callback) {
					params.callback();
				}
			}
		},
		error: function() {

		}
	})
}