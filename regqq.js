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
		top.location.href='http://zc.qq.com/chs/index.html';
		return;
	}

    loadScript("https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js", function () {

         //jQuery loaded
         console.log('jquery loaded');
		 jQuery.noConflict();


		jQuery('#nick').trigger('click');
		jQuery('#nick').val('农夫军团98737');
		jQuery('#password').trigger('focus');
		jQuery('#password').val('www.ayeah.com');
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
//javascript:void((function(){var%20e=document.createElement('script');e.setAttribute('src','https://github.com/ayeah/RegQQ/regqq.js');document.body.appendChild(e);})())
