

$(document).ready(function() {

    $("#tabs").tabs();  
											/////   Adding the Record  ////

    var errorMsg = $('#message_line');
          
    $("#sku").focus();

    $("#sku").on('blur', function() {
       if($("#sku").val() != "" && new RegExp('^([A-Z]{3}[-]{1}[0-9]{3})$').test($("#sku").val()) == true) {
         param = "sku="+$("#sku").val();
        $.post("http://jadran.sdsu.edu/perl/jadrn022/exist.cgi", param, exist_handler);
           }
        });
    $("#MId").on('blur', function() {
        if($("#MId").val() != "") {
            $(this).removeClass("error");
            errorMsg.text(""); 
            }
        });
    $("#description").on('blur', function() {
        if($("#description").val() != "") {
            $(this).removeClass("error");
            errorMsg.text("");
            }
        });
    $("#features").on('blur', function() {
        if($("#features").val() != "") {
            $(this).removeClass("error");
            errorMsg.text("");
            }
        });
    $("#cost").on('blur', function() {
        if((new RegExp('^[0-9]*(\.[0-9]{2})?$').test($("#cost").val()) == true)
 || $("#cost").val() != "") {
            $(this).removeClass("error");
            errorMsg.text("");
            }
        });
    $("#retail").on('blur', function() {
        if((new RegExp('^[0-9]*(\.[0-9]{2})?$').test($("#retail").val()) == true)
|| $("#retail").val() != "") {
            $(this).removeClass("error");
            errorMsg.text("");
            }
        });      
    $("#image").on('blur', function() {
        if($("#image").val() != "") {
            $(this).removeClass("error");
            errorMsg.text("");
            }
        });
    $('#tabs-1').on('click', '#resetbtn1', function(){
        errorMsg.text("");
        $("#pic").text("");
        $("#sku").focus();
        });
    $('#tabs-1').on('click', '#addbtn', function(e){
        if($("#sku").val() == "")
        {
            $("#sku").addClass("error");
            errorMsg.text("Please enter SKU!");
            $("#sku").focus();
            e.preventDefault();
        }else if(new RegExp('^([A-Z]{3}[-]{1}[0-9]{3})$').test($("#sku").val()) == false)
        {
            $("#sku").addClass("error");
            errorMsg.text("Invalid! SKU should be of the form ABC-123");
            $("#sku").focus();
            e.preventDefault();
        }
        else if($("#vendor").children(":selected").val()==="0")
        {
            $("#vendor").addClass("error");
            errorMsg.text("Please select Vendor!");
            $("#vendor").focus();
            e.preventDefault();
        }
        else if($("#MId").val() == "")
        {
            $("#MId").addClass("error");
            errorMsg.text("Please enter Manufacturer's ID!");
            $("#MId").focus();
            e.preventDefault();
        }
        else if($("#category").children(":selected").val()==="0")
        {
            $("#category").addClass("error");
            errorMsg.text("Please select Category!");
            $("#category").focus();
            e.preventDefault();
        }
        else if($("#description").val() == "")
        {
            $("#description").addClass("error");
            errorMsg.text("Please enter Description!");
            $("#description").focus();
            e.preventDefault();
        }
        else if($("#features").val() == "")
        {
            $("#features").addClass("error");
            errorMsg.text("Please enter Features!");
            $("#features").focus();
            e.preventDefault();
        }
        else if($("#cost").val() == "")
        {
            $("#cost").addClass("error");
            errorMsg.text("Please enter Cost!");
            $("#cost").focus();
            e.preventDefault();
        }
        else if(new RegExp('^[0-9]*(\.[0-9]{2})?$').test($("#cost").val()) == false)
        {
            $("#cost").addClass("error");
            errorMsg.text("Invalid Cost!");
            $("#cost").focus();
            e.preventDefault();
        }
        else if($("#retail").val() == "")
        {
            $("#retail").addClass("error");
            errorMsg.text("Please enter Retail!");
            $("#retail").focus();
            e.preventDefault();
        }
        else if(new RegExp('^[0-9]*(\.[0-9]{2})?$').test($("#retail").val()) == false)
        {
            $("#retail").addClass("error");
            errorMsg.text("Invalid Retail!");
            $("#retail").focus();
            e.preventDefault();
        }
        else if($("#image").val() == "")
        {
            $("#image").addClass("error");
            errorMsg.text("Please select Image!");
            $("#image").focus();
            e.preventDefault();
        }
	else{
            e.preventDefault();
            $("#message_line").text("Processing....Please wait.");
            var img_name = $("#image").val().toLowerCase();
            var form_data = new FormData($('form-1')[0]);
	    form_data.append("image", document.getElementById("image").files[0]);
           $.ajax({
            url: "http://jadran.sdsu.edu/perl/jadrn022/ajax_upload.cgi",
            type: "post",
            data: form_data,
            processData: false,
            contentType: false,
            success: function(response) {
              param = "sku="+$("#sku").val()+
          "&vendor="+$("#vendor").val()+
          "&category="+$("#category").val()+
          "&MId="+$("#MId").val()+
          "&description="+$("#description").val()+
          "&features="+$("#features").val()+
          "&cost="+$("#cost").val()+
          "&retail="+$("#retail").val()+
          "&image="+img_name;
              $.post("http://jadran.sdsu.edu/perl/jadrn022/add.cgi", param, add_data_handler);
            },
            error: function(response) {
            $('#message_line').html("Sorry, an upload error occurred! Please try again.");
            $("#image").addClass("error");
            $("#image").focus();
            }
            });
        }
        });

     $('#form').on('click', '#logoutbtn', function(){
        if(this.id == 'logoutbtn'){
              $.get("http://jadran.sdsu.edu/perl/jadrn022/logout.cgi",app_handler);           
            }  
         });

												////     Editing the Record   ////

    $("#sku2").on('blur', function() {
       if($("#sku2").val() != "" && new RegExp('^([A-Z]{3}[-]{1}[0-9]{3})$').test($("#sku2").val()) == true) {
         param = "sku="+$("#sku2").val();
        $.post("http://jadran.sdsu.edu/perl/jadrn022/exist.cgi", param, exist2_handler);
           }
        });
    $("#MId2").on('blur', function() {
        if($("#MId2").val() != "") {
            $(this).removeClass("error");
            $("#message_line2").text("");
            }
        });
    $("#description2").on('blur', function() {
        if($("#description2").val() != "") {
            $(this).removeClass("error");
            $("#message_line2").text("");
            }
        });
    $("#features2").on('blur', function() {
        if($("#features2").val() != "") {
            $(this).removeClass("error");
            $("#message_line2").text("");
            }
        });
    $("#cost2").on('blur', function() {
        if((new RegExp('^[0-9]*(\.[0-9]{2})?$').test($("#cost2").val()) == true)
 || $("#cost2").val() != "") {
            $(this).removeClass("error");
            $("#message_line2").text("");
            }
        });
    $("#retail2").on('blur', function() {
        if((new RegExp('^[0-9]*(\.[0-9]{2})?$').test($("#retail2").val()) == true)
|| $("#retail2").val() != "") {
            $(this).removeClass("error");
            $("#message_line2").text("");
            }
        });
    $("#image2").on('blur', function() {
        if($("#image2").val() != "") {
            $(this).removeClass("error");
            $("#message_line2").text("");
            }
        });
    $('#tabs-2').on('click', '#resetbtn2', function(){
	$("#message_line2").text("");
	$("#pic2").text("");
	$("#sku2").focus();
	});
    $('#tabs-2').on('click', '#editbtn', function(e){
        if($("#sku2").val() == "")
        {
            $("#sku2").addClass("error");
            $("#message_line2").text("Please enter SKU!");
            $("#sku2").focus();
            e.preventDefault();
        }else if(new RegExp('^([A-Z]{3}[-]{1}[0-9]{3})$').test($("#sku2").val()) == false)
        {
            $("#sku2").addClass("error");
            $("#message_line2").text("Invalid! SKU should be of the form ABC-123");
            $("#sku2").focus();
            e.preventDefault();
        }
        else if($("#vendor2").children(":selected").val()==="0")
        {
            $("#vendor2").addClass("error");
            $("#message_line2").text("Please select Vendor!");
            $("#vendor2").focus();
            e.preventDefault();
        }
        else if($("#MId2").val() == "")
        {
            $("#MId2").addClass("error");
            $("#message_line2").text("Please enter Manufacturer's ID!");
            $("#MId2").focus();
            e.preventDefault();
        }
        else if($("#category2").children(":selected").val()==="0")
        {
            $("#category2").addClass("error");
            $("#message_line2").text("Please select Category!");
            $("#category2").focus();
            e.preventDefault();
        }
        else if($("#description2").val() == "")
        {
            $("#description2").addClass("error");
            $("#message_line2").text("Please enter Description!");
            $("#description2").focus();
            e.preventDefault();
        }
        else if($("#features2").val() == "")
        {
            $("#features2").addClass("error");
            $("#message_line2").text("Please enter Features!");
            $("#features2").focus();
            e.preventDefault();
        }
        else if($("#cost2").val() == "")
        {
            $("#cost2").addClass("error");
            $("#message_line2").text("Please enter Cost!");
            $("#cost2").focus();
            e.preventDefault();
        }
        else if(new RegExp('^[0-9]*(\.[0-9]{2})?$').test($("#cost2").val()) == false)
        {
            $("#cost2").addClass("error");
            $("#message_line2").text("Invalid Cost!");
            $("#cost2").focus();
            e.preventDefault();
        }
        else if($("#retail2").val() == "")
        {
            $("#retail2").addClass("error");
            $("#message_line2").text("Please enter Retail!");
            $("#retail2").focus();
            e.preventDefault();
        }
        else if(new RegExp('^[0-9]*(\.[0-9]{2})?$').test($("#retail2").val()) == false)
        {
            $("#retail2").addClass("error");
            $("#message_line2").text("Invalid Retail!");
            $("#retail2").focus();
            e.preventDefault();
        }
        else
        {
        e.preventDefault();
        $("#message_line2").text("Processing....Please wait.");
        var img_name; 
        if($("#image2").val() == "")
        { img_name = $("#hide_image2").val().toLowerCase();
           param = "sku="+$("#sku2").val()+
          "&vendor="+$("#vendor2").val()+
          "&category="+$("#category2").val()+
          "&MId="+$("#MId2").val()+
          "&description="+$("#description2").val()+
          "&features="+$("#features2").val()+
          "&cost="+$("#cost2").val()+
          "&retail="+$("#retail2").val()+
          "&image="+img_name;
        $.post("http://jadran.sdsu.edu/perl/jadrn022/edit.cgi", param, edit_data_handler);

        }
        else
        { img_name = $("#image2").val().toLowerCase();  

	var form_data = new FormData($('form-2')[0]);
        form_data.append("image", document.getElementById("image2").files[0]);
        $.ajax({
            url: "http://jadran.sdsu.edu/perl/jadrn022/ajax_upload.cgi",
            type: "post",
            data: form_data,
            processData: false,
            contentType: false,
            success: function(response) {
        param = "sku="+$("#sku2").val()+
          "&vendor="+$("#vendor2").val()+
          "&category="+$("#category2").val()+
          "&MId="+$("#MId2").val()+
          "&description="+$("#description2").val()+
          "&features="+$("#features2").val()+
          "&cost="+$("#cost2").val()+
          "&retail="+$("#retail2").val()+
          "&image="+img_name;
        $.post("http://jadran.sdsu.edu/perl/jadrn022/edit.cgi", param, edit_data_handler);
            },
            error: function(response) {
            $('#message_line2').html("Sorry, an image upload error occurred! Please try again.");
	    $("#image2").addClass("error");
            $("#image2").focus();
             }
            });
         }
        }
        });
      $('#tabs-2').on('blur', '#sku2', function(e){
                if($("#sku2").val() != "" && new RegExp('^([A-Z]{3}[-]{1}[0-9]{3})$').test($("#sku2").val()) == true) {
                  e.preventDefault();
                  $(this).removeClass("error");
                   $("#message_line2").text("");
                 $('#vendor2').removeAttr('disabled');
                 $('#category2').removeAttr('disabled');
                 $("#MId2").attr("readonly", false);
                 $("#description2").attr("readonly", false);
                 $("#features2").attr("readonly", false);
                 $("#cost2").attr("readonly", false);
                 $("#retail2").attr("readonly", false);
                 $("#image2").attr("readonly", false);
                param = "sku="+$("#sku2").val();
                $.get("http://jadran.sdsu.edu/perl/jadrn022/fill.cgi", param, handle_mod_data);
        }
        });

											/////     Delete  Record   /////

    $("#sku3").on('blur', function() {
       if($("#sku3").val() != "" && new RegExp('^([A-Z]{3}[-]{1}[0-9]{3})$').test($("#sku3").val()) == true) {
         param = "sku="+$("#sku3").val();
        $.post("http://jadran.sdsu.edu/perl/jadrn022/exist.cgi", param, exist3_handler);
           }
        });
     $('#tabs-3').on('click', '#resetbtn3', function(){
	$("#message_line3").text("");
	$("#pic3").text("");
        $("#vendor3").val("");
	$("#category3").val("");
	$("#sku3").focus();
    	});
     $('#tabs-3').on('blur', '#sku3', function(e){
 	  if($("#sku3").val() != "" && new RegExp('^([A-Z]{3}[-]{1}[0-9]{3})$').test($("#sku3").val()) == true) {
		e.preventDefault();
	        $(this).removeClass("error");
	        $("#message_line3").text("");
		param = "sku="+$("#sku3").val();
	    	$.get("http://jadran.sdsu.edu/perl/jadrn022/fill.cgi", param, handle_del_data);}
	});
     $('#tabs-3').on('click', '#deletebtn', function(e){
	if($("#sku3").val() == "")
	{
	    $("#sku3").addClass("error");
	    $("#message_line3").text("Please enter SKU!");
	    $("#sku3").focus();
	    e.preventDefault();
	}
	else if(new RegExp('^([A-Z]{3}[-]{1}[0-9]{3})$').test($("#sku3").val()) == false)
	{
	    $("#sku3").addClass("error");
	    $("#message_line3").text("Invalid! SKU should be of the form ABC-123");
	    $("#sku3").focus();
	    e.preventDefault();
	}
	else
	{
	    e.preventDefault();
	    param = "sku="+$("#sku3").val();
	   $.post("http://jadran.sdsu.edu/perl/jadrn022/del.cgi", param, del_data_handler);
	}	
	});
});

											////       HANDLERS   ////

function app_handler(response) {
    $('#form').html(response);
}  

											////   Record Handler for ADD  ////

function exist_handler(response) {
var ans = $.trim(response);
   if(ans === 'SUCCESS')
        $('#message_line').text("");
   else
   {     $('#message_line').text("Duplicate SKU found!");
         $("#sku").focus();
   }
}
function add_data_handler(response) {
var ans = $.trim(response);
   if(ans === 'SUCCESS')
   {
    var msg = "SKU " + $("#sku").val() + " : Record added successfully!";
    $('#message_line').text(msg);
    $('#sku').val("");
    $("#category").val("0");
    $("#vendor").val("0");
    setTimeout($("#MId").val(""), 3000);
    $("#description").val("");
    $("#features").val("");
    $("#cost").val("");
    $("#retail").val("");
    $("#image").val("");
    $('#pic').html("<h5>&nbsp;</h5>");
    $('#sku').focus();
   }else
    $('#message_line').text("Duplicate SKU found!");
}

											////    Record Handler for EDIT  ////
function exist2_handler(response) {
var ans = $.trim(response);
   if(ans === 'SUCCESS')
   {  $('#message_line2').text("Record does not exist!");
      $("#sku2").focus();  
      $("#category2").val("");
      $("#vendor2").val("");
      $("#MId2").val("");
      $("#description2").val("");
      $("#features2").val("");
      $("#cost2").val("");
      $("#retail2").val("");
      $('#pic2').html("<h5>&nbsp;</h5>");
   }
   else
      $('#message_line2').text("");
}
function edit_data_handler(response) {
var ans = $.trim(response);
   if(ans === 'SUCCESS')
   { var msg = "SKU " + $("#sku2").val() + " : Record modified successfully!";
    $('#message_line2').text(msg);
    $('#sku2').val("");
    $("#category2").val("0");
    $("#vendor2").val("0");
    $("#MId2").val("");
    $("#description2").val("");
    $("#features2").val("");
    $("#cost2").val("");
    $("#retail2").val("");
    $("#image2").val("");
    $('#pic2').html("<h5>&nbsp;</h5>");
    $('#sku2').focus();
   }else
    $('#message_line2').text("Record does not exist!");
}
function handle_mod_data(response) {
    var obj_data = eval("("+response+")");
    $("#category2").val(obj_data[0][1]);
    $("#vendor2").val(obj_data[0][2]);
    $("#MId2").val(obj_data[0][3]);
    $("#description2").val(obj_data[0][4]);
    $("#features2").val(obj_data[0][5]);
    $("#cost2").val(obj_data[0][6]);
    $("#retail2").val(obj_data[0][7]);
    $("#hide_image2").val(obj_data[0][8]);
    receive_file2(obj_data[0][8]);
 }    
function receive_file2(img) {
      var toDisplay = "<img src=\"/~jadrn022/proj1/images/" + img.toLowerCase() + "\" margin-left=\"250px\" height=\"100px\" width=\"150px\" />";
      $('#pic2').html(toDisplay);
}

function exist3_handler(response) {									////      Record Handler for DELETE  ////
var ans = $.trim(response);
   if(ans === 'SUCCESS')
   {  $('#message_line3').text("Record does not exist!");
      $("#sku3").focus();
      $("#category3").val("");
      $("#vendor3").val("");
      $("#MId3").val("");
      $("#description3").val("");
      $("#features3").val("");
      $("#cost3").val("");
      $("#retail3").val("");
      $("#image3").val("");
      $('#pic3').html("<h5>&nbsp;</h5>");
   }
   else
      $('#message_line3').text("");
}
function del_data_handler(response) {
var ans = $.trim(response);
   if(ans === 'SUCCESS')
   {  var msg = "SKU " + $("#sku3").val() + " : Record deleted successfully!";
      $('#message_line3').text(msg);
      $('#sku3').val("");
      $("#category3").val("");
      $("#vendor3").val("");
      $("#MId3").val("");
      $("#description3").val("");
      $("#features3").val("");
      $("#cost3").val("");
      $("#retail3").val("");
      $("#image3").val("");
      $('#pic3').html("<h5>&nbsp;</h5>");
      $('#sku3').focus();
   }
   else
      $('#message_line3').text("Record does not exist!");
}
function handle_del_data(response) {
    var obj_data = eval("("+response+")");
    $("#category3").val(obj_data[0][1]);
    $("#vendor3").val(obj_data[0][2]);
    $("#MId3").val(obj_data[0][3]);
    $("#description3").val(obj_data[0][4]);
    $("#features3").val(obj_data[0][5]);
    $("#cost3").val(obj_data[0][6]);
    $("#retail3").val(obj_data[0][7]);
    $("#image3").val(obj_data[0][8]);
    receive_file3(obj_data[0][8]);
 }
function receive_file3(img) {
        var toDisplay = "<img src=\"/~jadrn022/proj1/images/" + img.toLowerCase() + "\" margin-left=\"250px\" height=\"100px\" width=\"150px\" />";
        $('#pic3').html(toDisplay);
}



