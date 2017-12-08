	var hunli = window.hunju = {
      alert: function(a) {
        $(".alertMsg").remove();
        var b = '<div class="alertMsg"><span>' + a + "</span></div>";
        $("body").append(b);
        setTimeout(function() {
            $(".alertMsg").fadeOut(500)
        },
        1000)
    }
};	
	 function onsubmit(params){  
 	    params.tel=encodeURIComponent(encodeURIComponent(params.tel));
 	    params.name=encodeURIComponent(encodeURIComponent(params.name));
 	    params.yuyuetime=encodeURIComponent(encodeURIComponent(params.yuyuetime));
 	 	params.city = encodeURIComponent(encodeURIComponent(params.city));
	  var fromurl = encodeURIComponent(encodeURIComponent(window.location.href));
	  var formdata ="city=" + params.city+"&name="+params.name+"&yuyuetime="+params.yuyuetime +"&tel="+params.tel + "&fromurl=" + fromurl;
	$.ajax({
		dataType: 'jsonp',
		url: 'http://crm.zzxhao.com/SelfinfoService/add?' + formdata,
		jsonpCallback: "success_jsonpCallback",
		success: function(json) {
			var d = json;
			if (json[0].success) {
              	   if(params.callback){
              	   	    params.callback();  
              	   }
			}
		},
		error: function() {
			
		}
	})
 }
(function($) {
     $.fn.placeholder = function(options) {
         var opts = $.extend({}, $.fn.placeholder.defaults, options);
         var isIE = document.all ? true : false;
         return this.each(function() {
             var _this = this,
                 placeholderValue = _this.getAttribute("placeholder"); //缓存默认的placeholder值
             if (isIE) {
                 _this.setAttribute("value", placeholderValue);
                 _this.onfocus = function() {
                     $.trim(_this.value) == placeholderValue ? _this.value = "" : '';
                 };
                 _this.onblur = function() {
                     $.trim(_this.value) == "" ? _this.value = placeholderValue : '';
                 };
             }
         });
     };
 })(jQuery);