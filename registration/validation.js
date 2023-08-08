function exist(table,col,id){
	var exists = 0;
	var url ='functions.php';
    var data = {event: "exists", table: table, col: col, id: id };
    aJax.post(url,data,function(result){
        if(result == 1){
            exists = 1;
        }
        else{
            exists = 0;
        }
        
    });
    return exists;
}
function calculate_age() { 
	getbday = document.getElementById('datepicker').value;
	dob = new Date(getbday);
	//console.log(dob);
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
    //return Math.abs(age_dt.getUTCFullYear() - 1970);
	//console.log(Math.abs(age_dt.getUTCFullYear() - 1970)) ;
	$("#age").val(Math.abs(age_dt.getUTCFullYear() - 1970));
}
function onlyNumberKey(evt) {
             
	// Only ASCII character in that range allowed
	var ASCIICode = (evt.which) ? evt.which : evt.keyCode
	if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
		return false;
	return true;
}
var aJax = {
	post : function(url,data,cb){
	    $.ajax({
			async: false,
			cache: false,
			type: 'POST',
			url:url,
			data:data,
			success: cb,
			error: 
				function(){
					//modal.loading(false); 
					//modal.alert(ajax_error_message,function(){
						//location.href = ajax_error_href;
					//});
				}
		})
	},
}
//return if json
function is_json(str) {
    try {
	    if (/MSIE 9/i.test(navigator.userAgent)) {
	        return JSON.parse($.trim(str));
	    }else{
	        var jparse = JSON.parse($.trim(str));
	        if(Object.values(jparse)[0] == 'Asterisk is not allowed!'){
	        	alert(Object.values(jparse)[0]);
	        }else{
	        	return jparse;
	        }
	    }
    } catch (e) {
        return $.trim(str)
    }
}
var form_empty_error = "Empty field!"; 
var form_invalid_mobile_no = "Invalid mobile number. Required format : 09XXXXXXXXX";
var form_invalid_email = "Please enter a valid email address.";
var validate = {
	all: function(){
		var element = ".required_input";
		var element2 = ".requiredTagInput";
		var counter = 0;
		$(".validate_error_message").remove();
		var error_message = "<span class='validate_error_message' style='color: red;'>"+form_empty_error+"<br></span>"
	    $(element).each(function(){
	    	if($(this).val() != null){
	    		var input = $(this).val().trim();
	          	if (input.length == 0 || input == "Select Position" || input == "Select Role") {
					  if($(".requiredTagInput").length <= 2){
						$(".bootstrap-tagsinput").css('border-color','#ccc');
						$(error_message).insertAfter($(".bootstrap-tagsinput"));
					  }
	          		$(this).css('border-color','red');
	          		$(error_message).insertAfter(this);
	            	counter++;
	          	}else{
	            	$(this).css('border-color','#ccc');
	              $(this).next(".validate_error_message").remove();       	
	          	}
	    	} else {
	    		$(this).css('border-color','red');
	    		$(error_message).insertAfter(this);
	    	}
	          
		});
		$(element2).each(function(){
	    	if($(this).val() != null){
	    		var input = $(this).val().trim();
	          	if (input.length <= 0) {
					$(".bootstrap-tagsinput").css('border-color','#ccc');
					$(error_message).insertAfter($(".bootstrap-tagsinput"));
	            	counter++;
	          	}else{
	            	$(".bootstrap-tagsinput").css('border-color','#ccc');
					$(".bootstrap-tagsinput").next(".validate_error_message").remove();       	
	          	}
	    	} else {
				$(".bootstrap-tagsinput").css('border-color','red');
				$(error_message).insertAfter($(".bootstrap-tagsinput"));
	    	}
	          
		});

				//alpha only
				$(".alphaonly").each(function(){
					var str = $(this).val();
					if(/^[a-zA-Z .,-’]*$/.test(str) == false) {
							counter++;
							$(this).css('border-color','red');
	          	$("<span class='validate_error_message' style='color: red;'>This field only accepts alphabets.<br></span>").insertAfter(this);
					}
				});

				//validate script tags
				$(".form-control").each(function(){
					if($(this).val().trim().indexOf("<script") != -1){
						counter++;
						$(this).css('border-color','red');
						$("<span class='validate_error_message' style='color: red;'>"+form_script+"<br></span>").insertAfter(this);
					}

					if($(this).val().trim().indexOf("< script") != -1){
						counter++;
						$(this).css('border-color','red');
						$("<span class='validate_error_message' style='color: red;'>"+form_script+"<br></span>").insertAfter(this);
					}


					if($(this).val().trim().indexOf("<?php") != -1){
						counter++;
						$(this).css('border-color','red');
						$("<span class='validate_error_message' style='color: red;'>"+form_script+"<br></span>").insertAfter(this);
					}

					if($(this).val().trim().indexOf("<?=") != -1
						){
						counter++;
						$(this).css('border-color','red');
						$("<span class='validate_error_message' style='color: red;'>"+form_script+"<br></span>").insertAfter(this);
					}
				});

				//test mobile number
				$(".mobile_number").each(function(){
					var number = $(this).val();
					if(/^09\d{9}$/.test(number) === false){
						counter++;
						$(this).css('border-color','red');
						$("<span class='validate_error_message' style='color: red;'>"+form_invalid_mobile_no+"<br></span>").insertAfter(this);
					
					}
				});


				///email validator
				$(".email").each(function(){
					var email = $(this).val();
					var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
					if(!pattern.test(email)){
						counter++;
						$(this).css('border-color','red');
	          $("<span class='validate_error_message' style='color: red;'>"+form_invalid_email+"<br></span>").insertAfter(this);
					
					}
				});
		if(counter == 0){
			return true;
		} else {
			return false;
		}
	},
	standard: function(element_id){
		
		var element = element_id ? `#${element_id} ` : '';
		element += '.required_input';
		var counter = 0;
		$(this).css('border-color','#ccc');
		$(".validate_error_message").remove();
		var error_message = "<span class='validate_error_message' style='color: red;'>"+form_empty_error+"<br></span>";
		var select_gender = "<span class='validate_error_message' style='color: red;'>Please select Gender<br></span>";
	    $(element).each(function(){
	    	var type = $(this).attr("type");
			if(type != "ckeditor" && type != "ckeditor_modal" && type != "ckeditor_email"){
		    	if($(this).val() != null){
		    		var input = $(this).val().trim();
		          	if (input.length == 0 ) {
		          		$(this).css('border-color','red');
		          		$(error_message).insertAfter(this);
		            	counter++;
		          	}else{
		            	$(this).css('border-color','#ccc');
		              	$(this).next(".validate_error_message").remove();       	
		          	}
		    	} else {
		    		$(this).css('border-color','red');
		    		$(error_message).insertAfter(this);
		    	}
		    }
		});
		//select gender
		if ($(element).hasClass("select_gender")) {
			$(".select_gender").each(function(){
				var str = $(this).val();
				if(str == '') {
					counter++;
					$(this).css('border-color','red');
	  				$(select_gender).insertAfter(this);
				}
			});
		}
		//alpha only
		
	    if ($(element).hasClass("alphaonly")) {
			$(".alphaonly").each(function(){
				var str = $(this).val();
				if(/^[a-zA-Z .,-’]*$/.test(str) == false) {
					counter++;
					$(this).css('border-color','red');
	  				$("<span class='validate_error_message' style='color: red;'>This field only accepts alphabets.<br></span>").insertAfter(this);
				}
			});
		}

		//validates url pattern and special characters
		if ($(element).hasClass("validateURL")) {
			$(".validateURL").each(function(){
				var str = $(this).val();
				if(str && /^(?:(?:ht|f)tp(?:s?)\:\/\/|~\/|\/)?(?:\w+:\w+@)?((?:(?:[-\w\d{1-3}]+\.)+(?:com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|edu|co\.uk|ac\.uk|it|fr|tv|museum|asia|local|travel|[a-z]{2}))|((\b25[0-5]\b|\b[2][0-4][0-9]\b|\b[0-1]?[0-9]?[0-9]\b)(\.(\b25[0-5]\b|\b[2][0-4][0-9]\b|\b[0-1]?[0-9]?[0-9]\b)){3}))(?::[\d]{1,5})?(?:(?:(?:\/(?:[-\w~!$+|.,=]|%[a-f\d]{2})+)+|\/)+|\?|#)?(?:(?:\?(?:[-\w~!$+|.,*:]|%[a-f\d{2}])+=?(?:[-\w~!$+|.,*:=]|%[a-f\d]{2})*)(?:&(?:[-\w~!$+|.,*:]|%[a-f\d{2}])+=?(?:[-\w~!$+|.,*:=]|%[a-f\d]{2})*)*)*(?:#(?:[-\w~!$ |\/.,*:;=]|%[a-f\d]{2})*)?$/i.test(str) == false) {
						counter++;
						$(this).css('border-color','red');
			$("<span class='validate_error_message' style='color: red;'>Invalid URL.<br></span>").insertAfter(this);
				}
			});
		}

		//validates input to have 4 digits with decimals
		$(".price-4-digit").each(function(){
			var str = $(this).val();
			if(/^((\d{0,4}((\.\d*)?))|(\.\d+))$/.test(str) == false) {
					counter++;
					$(this).css('border-color','red');
		$("<span class='validate_error_message' style='color: red;'>Allowed count is 1-9999 only.<br></span>").insertAfter(this);
			}
		});

		//validate script tags

		$(".form-control").each(function(){
			if($(this).val() === "") {
				if($(this).val().trim().indexOf("<script") != -1){
					counter++;
					$(this).css('border-color','red');
					$("<span class='validate_error_message' style='color: red;'>"+form_script+"<br></span>").insertAfter(this);
				}
	
				if($(this).val().trim().indexOf("< script") != -1){
					counter++;
					$(this).css('border-color','red');
					$("<span class='validate_error_message' style='color: red;'>"+form_script+"<br></span>").insertAfter(this);
				}
	
	
				if($(this).val().trim().indexOf("<?php") != -1){
					counter++;
					$(this).css('border-color','red');
					$("<span class='validate_error_message' style='color: red;'>"+form_script+"<br></span>").insertAfter(this);
				}
	
				if($(this).val().trim().indexOf("<?=") != -1){
					counter++;
					$(this).css('border-color','red');
					$("<span class='validate_error_message' style='color: red;'>"+form_script+"<br></span>").insertAfter(this);
				}
			}
		});

		//strip tags
		if ($(element).hasClass("no_html")){
			$(".no_html").each(function(){
				if ($(this).val() === "") {
					var type = $(this).attr("type");
					if(type != "ckeditor"){
						if(/<\/?[^>]*>/.test($(this).val().trim())){
							counter++;
							$(this).css('border-color','red');
							$("<span class='validate_error_message' style='color: red;'>"+form_nohtml+"<br></span>").insertAfter(this);
						}
					}
				}
			});
		}

		//test mobile number
		if ($(element).hasClass("mobile_number")){
			$(".mobile_number").each(function(){
				var number = $(this).val();
				if(number != ''){
					if(/^09\d{9}$/.test(number) === false){
						counter++;
						$(this).css('border-color','red');
						$("<span class='validate_error_message' style='color: red;'>"+form_invalid_mobile_no+"<br></span>").insertAfter(this);
					
					}
				}
			});
		}

		//captcha
		if ($(element).hasClass("captcha_ci")){
			$(".captcha_ci").each(function(){
				var captcha_val = $(this).attr("cpt-val");
				var input_val = sha1($(this).val().trim());
				if($(this).val().trim() != ""){
					if(captcha_val != input_val){
						counter++;
						$(this).css('border-color','red');
						$("<span class='validate_error_message' style='color: red;'>"+form_invalid_captcha+"<br></span>").insertAfter(this);
					}
				}
				
			});
		}

		if ($(".g-recaptcha")[0]){
		    if(grecaptcha.getResponse().length == 0){
		    	$(".g-recaptcha").css('border-color','red');
				$("<span class='validate_error_message' style='color: red;'>"+form_invalid_captcha+"<br></span>").insertAfter(".g-recaptcha");
		    }
		}

		///filemanger extension filter validator
		if ($(element).hasClass("ext_filter")){
			$(".ext_filter").each(function(){
				if($(this).val() != ""){
					var value = $(this).val().split('.').pop();
					var accept = $(this).attr("accept");
					var extension = accept.split(',');
					if(!is_in_array(value,extension)){
						counter++;
						$(this).css('border-color','red');
						$("<span class='validate_error_message' style='color: red;'>"+form_invalid_extension+"<br></span>").insertAfter(this);
					}
				}
			});
		}

		///filemanger extension filter validator
		if ($(element).hasClass("size_filter")){
			$(".size_filter").each(function(){
				if($(this).val() != ""){
					var value = $(this).val();
					var this_element = $(this);
					var max = parseInt($(this).attr("max_size"));
					$.ajax(base_url + value, {
					    type: 'HEAD',
					    async: false,
					    success: function(d,r,xhr) {
					       	fileSize = xhr.getResponseHeader('Content-Length');
					       	var total_size_MB = fileSize / Math.pow(1024,2)
					      	if(max < total_size_MB){
					      		counter++;
								$(this_element).css('border-color','red');
								$("<span class='validate_error_message' style='color: red;'>"+form_max_size+"<br></span>").insertAfter(this_element);		
							}
					    }
					});
				}
			});
		}

		///email validator
		if ($(element).hasClass("email")){
			$(".email").each(function(){
				if($(this).val() != ""){
					var email = $(this).val();
					var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
					if(!pattern.test(email)){
						counter++;
						$(this).css('border-color','red');
		      			$("<span class='validate_error_message' style='color: red;'>"+form_invalid_email+"<br></span>").insertAfter(this);
					}
				}
			});
		}

		//ckeditor
		if ($(element).hasClass("ckeditor_input")){
			$('.required_input').each(function(){
				var type = $(this).attr("type");
				var id = $(this).attr("id");
				$(".cke_editor_" + id).css('border-color','#ccc');
				if(type == "ckeditor"){
					var editor = CKEDITOR.instances[id].getData();
					if(editor.trim().length == 0){
						counter++;
						$(".cke_editor_" + id).css('border-color','red');
						$("<span class='validate_error_message' style='color: red;'>"+form_empty_error+"<br></span>").insertAfter(".cke_editor_" + id);
					}
				}
			});
		}

		if ($(element).hasClass("ckeditor_input_modal")){
			$('.required_input').each(function(){
				var type = $(this).attr("type");
				var id = $(this).attr("id");
				$(".cke_editor_" + id).css('border-color','#ccc');
				if(type == "ckeditor_modal"){
					var editor = CKEDITOR.instances[id].getData();
					if(editor.trim().length == 0){
						counter++;
						$(".cke_editor_" + id).css('border-color','red');
						$("<span class='validate_error_message' style='color: red;'>"+form_empty_error+"<br></span>").insertAfter(".cke_editor_" + id);
					}
				}
			});
		}

		if ($(element).hasClass("role_input")){
			var role = $('#role').val();
			if(role === '0')
			{
				error_message = "<span class='validate_error_message'>"+form_empty_error+"<br></span>";
				validation_error_red('role');
				$(error_message).insertAfter('#role');
			}
		}

		$('.ckeditor_input').each(function(){
			var id = $(this).attr("id");
			var editor = html_decode(CKEDITOR.instances[id].getData());
			if(editor.trim().indexOf("<script") != -1){
				counter++;
				$(".cke_editor_" + id).css('border-color','red');
				$("<span class='validate_error_message' style='color: red;'>"+form_script+"<br></span>").insertAfter(".cke_editor_" + id);
			}

			if(editor.trim().indexOf("< script") != -1){
				counter++;
				$(".cke_editor_" + id).css('border-color','red');
				$("<span class='validate_error_message' style='color: red;'>"+form_script+"<br></span>").insertAfter(".cke_editor_" + id);
			}


			if(editor.trim().indexOf("<?php") != -1){
				counter++;
				$(".cke_editor_" + id).css('border-color','red');
				$("<span class='validate_error_message' style='color: red;'>"+form_script+"<br></span>").insertAfter(".cke_editor_" + id);
			}

			if(editor.trim().indexOf("<?=") != -1){
				counter++;
				$(".cke_editor_" + id).css('border-color','red');
				$("<span class='validate_error_message' style='color: red;'>"+form_script+"<br></span>").insertAfter(".cke_editor_" + id);
			}	
		});
		

		$('.password_checkbox').each(function(){
			var id = $(this).attr("id");
			if(!$(this).is(':checked')) {
				counter++;
				$("."+id+"").css('color','red');
			}else{
				$("."+id+"").css('color','#333');
			}
		});


		if(counter == 0){
			return true;
		} else {
			return false;
		}
	},
}