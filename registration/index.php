<html>
    <title>Registration</title>
    <head>
        <!--Jquery-->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
        <!--Bootstrap-->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
        <!--alerts-->
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.7.20/dist/sweetalert2.all.min.js"></script>
        <link href="https://cdn.jsdelivr.net/npm/sweetalert2@11.7.20/dist/sweetalert2.min.css" rel="stylesheet">
        <!--datepicker-->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.10.0/css/bootstrap-datepicker.min.css" integrity="sha512-34s5cpvaNG3BknEWSuOncX28vz97bRI59UnVtEEpFX536A7BtZSJHsDyFoCl8S7Dt2TPzcrCEoHBGeM4SUBDBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.10.0/css/bootstrap-datepicker.standalone.min.css" integrity="sha512-D5/oUZrMTZE/y4ldsD6UOeuPR4lwjLnfNMWkjC0pffPTCVlqzcHTNvkn3dhL7C0gYifHQJAIrRTASbMvLmpEug==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.10.0/css/bootstrap-datepicker3.min.css" integrity="sha512-aQb0/doxDGrw/OC7drNaJQkIKFu6eSWnVMAwPN64p6sZKeJ4QCDYL42Rumw2ZtL8DB9f66q4CnLIUnAw28dEbg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.10.0/css/bootstrap-datepicker3.standalone.min.css" integrity="sha512-t+00JqxGbnKSfg/4We7ulJjd3fGJWsleNNBSXRk9/3417ojFqSmkBfAJ/3+zpTFfGNZyKxPVGwWvaRuGdtpEEA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.10.0/js/bootstrap-datepicker.min.js" integrity="sha512-LsnSViqQyaXpD4mBBdRYeP6sRwJiJveh2ZIbW41EBrNmKxgr/LFZIiWT6yr+nycvhvauz8c2nYMhrP80YhG7Cw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <!--Validate form-->
        <script type="application/javascript" src="validation.js"></script>
        
        <!--style.css-->
        <link href="style.css" rel="stylesheet">
        <script>
        $( function() {
            $( "#datepicker" ).datepicker();
        } );
        </script>
    </head>
<body>
<section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-12 col-lg-9 col-xl-7">
        <div class="card shadow-2-strong card-registration" style="border-radius: 15px;">
          <div class="card-body p-4 p-md-5" id="registration">
            <h3 class="mb-4 pb-2 pb-md-0 mb-md-5" ">Registration Form</h3>
              <div class="row">
                <div class="col-md-6 mb-4">

                  <div class="form-outline">
                    <input type="text" id="full_name" class="form-control form-control-lg required_input" 
                    onkeypress="return /[a-zA-Z,. ]/i.test(event.key)" data-regex="[0-9a-zA-Z-_ ]"/>
                    <label class="form-label" for="fullName">Full Name</label>
                  </div>

                </div>
                <div class="col-md-6 mb-4 pb-2">

                  <div class="form-outline">
                    <input type="email" id="emailAddress" class="form-control form-control-lg required_input email" />
                    <label class="form-label" for="emailAddress">Email</label>
                  </div>

                </div>
              </div>

              <div class="row">
                <div class="col-md-6 mb-4 pb-2">

                    <div class="form-outline">
                        <input type="tel" id="phoneNumber" class="form-control form-control-lg required_input mobile_number" maxlength="11" onkeypress="return onlyNumberKey(event)"/>
                        <label class="form-label" for="phoneNumber">Phone Number</label>
                    </div>

                </div>

                <div class="col-md-6 mb-4 d-flex align-items-center">

                    <div class="form-outline datepicker w-100">
                        <input type="text" class="form-control form-control-lg required_input" id="datepicker" onChange="calculate_age(this.val)"/>
                        <label for="birthdayDate" class="form-label">Birthday</label>
                    </div>

                </div>

                <div class="col-md-6 mb-4 pb-2">

                  <div class="form-outline">
                    <input type="tel" id="age" class="form-control form-control-lg" readonly />
                    <label class="form-label" for="age">Age</label>
                  </div>

                </div>

                <div class="col-6">
                    <div class="form-outline">
                        <select class="select form-control form-control-lg required_input select_gender" id="gender">
                            <option></option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                  <label class="form-label">Gender</label>

                </div>
              </div>

              <div class="row">
                <div class="col-md-6 mb-4 pb-2">

                  <div class="form-outline">
                    <textarea class="form-control required_input" id="address"></textarea>
                    <label class="form-label" for="Address">Address</label>
                  </div>

                </div>
              </div>
              <div class="mt-4 pt-2">
                <input class="btn btn-primary btn-lg" type="submit" id="btn_registration" value="Submit" />
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<script>
$(document).on("click", "#btn_registration", function(e){
  var counter = 0;
    if(exist('profile','email',$("#emailAddress").val())===1){
      $("#emailAddress").css('border-color','red');
      $(".validate_error_message").remove(); 
      $("<span class='validate_error_message email-exist' style='color: red;'>Email exist!<br></span>").insertAfter("#emailAddress");
    }
    else if(validate.standard("registration")){
      if(exist('profile','contact',$("#phoneNumber").val())===1){
        $("#phoneNumber").css('border-color','red');
        $(".phone-exist").remove();
        $("<span class='validate_error_message phone-exist' style='color: red;'>Mobile number exist!<br></span>").insertAfter("#phoneNumber");
      }else{
        Swal.fire({
        title: 'Is all the information correct?',
        showDenyButton: false,
        showCancelButton: true,
        confirmButtonText: 'Yes',
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          var url ='functions.php';
          var data = {event: "insert", table: 'profile', full_name: $("#full_name").val(), email: $("#emailAddress").val(), phone: $("#phoneNumber").val(), birthday: $("#datepicker").val(),
          gender: $("#gender").val() , age: $("#age").val(), address: $("#address").val()};
          aJax.post(url,data,function(result){
              var obj = is_json(result)
              if(obj.stat==1){
                Swal.fire(obj.msg,'','success');
                $("#full_name").val('');
                $("#emailAddress").val('');
                $("#phoneNumber").val('');
                $("#datepicker").val('');
                $("#age").val('');
                $("#gender").val('');
                $("#address").val('');
              }else{
                Swal.fire(obj.msg,'','warning');
              }
          });
        }
      })
      }
    }
})
</script>
</body>
</html>