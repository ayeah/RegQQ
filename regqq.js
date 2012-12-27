(function () {

    function loadScript(url, callback) {

        var script = document.createElement("script")
        script.type = "text/javascript";

        if (script.readyState) { //IE
            script.onreadystatechange = function () {
                if (script.readyState == "loaded" || script.readyState == "complete") {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else { //Others
            script.onload = function () {
                callback();
            };
        }

        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
    }

	if(top.location.href!='http://zc.qq.com/chs/index.html'){
		if(location.host=='zc.qq.com'){
			//remove all cookies
			  var arrCookie=document.cookie.split(";"); // 将多cookie切割为多个名/值对
			  for(var i=0;i<arrCookie.length;i++){ // 遍历cookie数组，处理每个cookie对
				document.cookie=arrCookie[i]+";expires="+new Date('1999/9/9').toGMTString()+";path=/;domain=.zc.qq.com";
			  }
		}
		top.location.href='http://zc.qq.com/chs/index.html';
		return;
	}

    loadScript("http://code.jquery.com/jquery-latest.js", function () {

         //jQuery loaded
         console.log('jquery loaded');
		 jQuery.noConflict();


		jQuery('#nick').trigger('click');
		jQuery('#nick').val('<?php echo isset($_REQUEST['nickname']) ? $_REQUEST['nickname'] : '农夫军团98737';?>');
		jQuery('#password').trigger('focus');
		jQuery('#password').val('<?php echo isset($_REQUEST['password']) ? $_REQUEST['password'] : 'www.ayeah.net';?>');
		jQuery('#password').trigger('blur');
		//password_wspvagain
		jQuery('#password_again').trigger('click');
		jQuery('#password_again').val(jQuery('#password').val());

		jQuery('#year_value').trigger('click');
		setTimeout(function(){
			jQuery('#year_ul #year_27').trigger('click');
			setTimeout(function(){
				jQuery('#month_value').trigger('click');
				setTimeout(function(){
					jQuery('#month_ul #month_7').trigger('click');
					setTimeout(function(){
						jQuery('#day_value').trigger('click');
						setTimeout(function(){
							jQuery('#day_ul #day_7').trigger('click');	
							setTimeout(function(){
								if(jQuery('#code_img').attr('src')!=''){
									jQuery('#code').trigger('focus').on('keyup',function(){
										if(this.value.length==4){
											jQuery('#submit').click();
										}
									});

								}else{
									jQuery('#submit').click();
								}
							},500);
						},500);
					},500);
				},500);
			},500);
		},500);

	});
})();

//add this bookmark link
//javascript:void((function(){var%20e=document.createElement('script');e.setAttribute%20%20('src','http://www.ayeah.net/wp-content/uploads/regqq.php?nickname=%E5%86%9C%E5%A4%AB%E5%9B%A298737&password=www.ayeah.com&rand='+new%20Date().getTime());document.body.appendChild%20%20(e);})())
