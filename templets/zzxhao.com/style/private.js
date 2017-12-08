
function new_lr_js_gather(){
	  var conbg=$(".contents_lr"); 
	  var stepbg=$(".step_ct");
	  
	  var bot = $(".step_sub").children("li");
	  var bot1 = $(bot[0]);
      var bot2 = $(bot[1]);
      var bot3 = $(bot[2]);
      var bot4 = $(bot[3]);
      
      var nav1=$(".new_lr_body_1");
      var nav2=$(".new_lr_body_2");
      var nav3=$(".new_lr_body_3");
      var nav4=$(".new_lr_body_4");
      var nav =$(".js_select_part");
      
      var step1=$("#next_step_1");
      var step2=$("#next_step_2");
      var step3=$("#next_step_3");
      var step4=$("#next_step_4");
      var step=$(".next_step");

      var priceLow=$("#priceLow");
      var priceHigh=$("#priceHigh");
      
      var theme_one=$("#theme_one");
      var theme_two=$("#theme_two");
      
      var atmosphere_one=$("#atmosphere_one");
      var atmosphere_two=$("#atmosphere_two");
      
      var covla=$(".cover_layer");
       next1();
       step1.click(next2);
       step2.click(next3);
       step3.click(next4);
      //底部点击
       bot1.click(next1);
       bot2.click(next2);
       bot3.click(next3);
       bot4.click(next4);
       
      step.each(function(a) {
        $(this).click(function() {
            covla.css("left", 104 * [a + 2]);
            $(bot[a]).css("background-position", "0px 0");
            $(bot[a + 1]).css("background-position", "-45px 0")
        })
      });
  /*开始*/
	function next1() {
        nav.addClass("new_lr_body_display");
        nav1.removeClass("new_lr_body_display");
        stepbg.stop().animate({
            backgroundPosition: "-490px 0px"
         },
        400);
        conbg.stop().animate({
            backgroundPosition: "0px 0px"
        },
        200);
        
        setTimeout(function() {
            nav1.children(".new1_pr_list").stop().animate({
                marginRight: "0px"
            },
            400)
        },
        400);
        
        setTimeout(function() {
            nav1.children(".new1_pr_left").stop().animate({
                marginLeft: "0px"
            },
            500)
        },
        900);
        setTimeout(function() {
            step1.stop().animate({
                bottom: "0px"
            },
            350)
        },
        1300)
    };
    
    //第二步
  function next2() {
        if (priceLow.val() == "" || priceHigh.val() == "") {
           hunli.alert("请输入或选择一个价格区间！");
         return
        }
        nav.addClass("new_lr_body_display");
        nav2.removeClass("new_lr_body_display");
        stepbg.stop().animate({
            backgroundPosition: "-385px 0px"
        },
        400);
        conbg.stop().animate({
            backgroundPosition: "-1920px 0px"
        },
        200);
        setTimeout(function() {
            nav2.find(".new2_con").children(".new2_left").stop().animate({
                marginLeft: "30px"
            },
            500)
        },
        400); 
        setTimeout(function() {
            nav2.find(".new2_con").children(".new2_right").stop().animate({
                marginRight: "80px"
            },
            600)
        },
        900);
         setTimeout(function() {
            nav2.children(".new2_step").stop().animate({
                top: "202px"
            },
            600)
        },
        1000);
        
        setTimeout(function() {
            step2.stop().animate({
                bottom: "0px"
            },
            350)
        },
        1500)
   }	
     //第三部
      function next3(){
   	     if(theme_one.val()== "" && theme_two.val() == ""){
   	     	hunli.alert("请选择一个主题风格！");
              return  
  	        }
     	  nav.addClass("new_lr_body_display");
          nav3.removeClass("new_lr_body_display"); 
            stepbg.stop().animate({
            backgroundPosition: "-280px 0px"
             },
              400);
            conbg.stop().animate({
               backgroundPosition: "-3840px 0px"
             },
            200);
           setTimeout(function() {
            nav3.children(".new3_title").stop().animate({
                marginTop: "0px"
              },
                400)
           },
            400);
            
            setTimeout(function() {
              nav3.children(".new3_con").stop().animate({
                bottom: "109px"
               },
               500)
            },
            900);
            
           setTimeout(function() {
            step3.stop().animate({
                bottom: "0px"
            },
            350)
          },
          1500);
     }
      //第四步
      function next4(){
    	  if(atmosphere_one.val()== "" && atmosphere_two.val() == ""){
 	     	 hunli.alert("请选择您喜欢的色调!");
              return  
	         }
           nav.addClass("new_lr_body_display");
           nav4.removeClass("new_lr_body_display"); 
           stepbg.stop().animate({
                backgroundPosition: "-175px 0px"
             },
              400);
            conbg.stop().animate({
               backgroundPosition: "-5760px 0px"
             },
            200);
            
            setTimeout(function() {
            nav4.find(".new4_con").children(".new4_left").stop().animate({
                marginLeft: "0px"
              },
                400)
           },
            400);
            
            setTimeout(function() {
              nav4.find(".new4_con").children(".new4_right").stop().animate({
                marginRight: "0px"
               },
               500)
            },
            900);
     };  
}
$(document).ready(function(){
		new_lr_js_gather();
})
