

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
});
  
function disableSubmission(){
 document.getElementById("agreement").checked = false;
 document.getElementById("submit").disabled = true;
 document.getElementById("name").focus();
 document.getElementById("menu").children[2].style.display = "none";
 document.getElementById("complete").style.display = "none";
}

function enableSubmission(){
 if(document.getElementById("agreement").checked == false){
  document.getElementById("submit").disabled = true;
 } else {
    document.getElementById("submit").disabled = false;
   }
}

function validate(){
 var type = document.getElementById("type").value;
 var matrc = document.getElementById("matrc").value;
 var hndphn = document.getElementById("hndphn").value;
 var email = document.getElementById("email").value;
 var coursen = document.getElementById("coursen").value;
 var coursed = document.getElementById("coursed").value;
 var coursel = document.getElementById("coursel").value;
 var name = document.getElementById("name").value;
 var gndr = document.getElementById("gndr").value;
 var trvldoc = document.getElementById("trvldoc").value;
 var issnc = document.getElementById("issnc").value;
 var vld = document.getElementById("vld").value;
 var natnlty = document.getElementById("natnlty").value;
 var brth = document.getElementById("brth").value;
 var plcbrth = document.getElementById("plcbrth").value;
 var prsntry = document.getElementById("prsntry").value;
 var dated = document.getElementById("dated").value;
 var drive_link = document.getElementById("drive_link").value;
 var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 
 if(!type  == "None" && !matrc && !hndphn && !email && !coursen && !coursed && !coursel == "None" && !name && !gndr == "None" && !trvldoc && !issnc && !vld && !natnlty && !brth && !plcbrth && !prsntry && !dated && !drive_link){
    alert( "All Fields Are Empty!");
    document.getElementById("type").style.backgroundColor = "#FFFF99";
    document.getElementById("matrc").style.backgroundColor = "#FFFF99";
    document.getElementById("hndphn").style.backgroundColor = "#FFFF99";
    document.getElementById("email").style.backgroundColor = "#FFFF99";
    document.getElementById("coursen").style.backgroundColor = "#FFFF99";
    document.getElementById("coursed").style.backgroundColor = "#FFFF99";
    document.getElementById("coursel").style.backgroundColor = "#FFFF99";
    document.getElementById("name").style.backgroundColor = "#FFFF99";
    document.getElementById("gndr").style.backgroundColor = "#FFFF99";
    document.getElementById("trvldoc").style.backgroundColor = "#FFFF99";
    document.getElementById("issnc").style.backgroundColor = "#FFFF99";
    document.getElementById("vld").style.backgroundColor = "#FFFF99";
    document.getElementById("natnlty").style.backgroundColor = "#FFFF99";
    document.getElementById("brth").style.backgroundColor = "#FFFF99";
    document.getElementById("plcbrth").style.backgroundColor = "#FFFF99";
    document.getElementById("prsntry").style.backgroundColor = "#FFFF99";
    document.getElementById("dated").style.backgroundColor = "#FFFF99";
    document.getElementById("drive_link").style.backgroundColor = "#FFFF99";
    return false;
 } else if(type == "None"){
    alert( "Please choose type of application!");
    document.getElementById("type").style.backgroundColor = "#FFFF99";
    return false;
   } else if(!matrc){
     alert( "Invalid Matric Number!");
     document.getElementById("matrc").style.backgroundColor = "#FFFF99";
     return false;
   } else if(!hndphn){
      alert( "Invalid Phone Number!");
      document.getElementById("hndphn").style.backgroundColor = "#FFFF99";
      return false;
   } else if(!email || !pattern.test(email)){
      alert( "Invalid Email!");
      document.getElementById("email").style.backgroundColor = "#FFFF99";
      return false;
       } else if(!coursen){
      alert( "Invalid Course Name!");
      document.getElementById("coursen").style.backgroundColor = "#FFFF99";
      return false;
       } else if(!coursed || isNaN(coursed)){
      alert( "Invalid Course Duration!");
      document.getElementById("coursed").style.backgroundColor = "#FFFF99";
      return false;
       } else if(!coursel == "None"){
      alert( "Invalid Course Level!");
      document.getElementById("coursel").style.backgroundColor = "#FFFF99";
      return false;
       } else if(!name){
      alert( "Invalid Name!");
      document.getElementById("name").style.backgroundColor = "#FFFF99";
      return false;
       } else if(gndr == "None"){
        alert( "Invalid Gender!");
        document.getElementById("gndr").style.backgroundColor = "#FFFF99";
        return false;
         } else if(!trvldoc){
      alert( "Invalid Passport Number!");
      document.getElementById("trvldoc").style.backgroundColor = "#FFFF99";
      return false;
       } else if(!issnc){
      alert("Invalid Place of Passport Issuance!");
      document.getElementById("issnc").style.backgroundColor = "#FFFF99";
      return false;
      } else if(!vld){
      alert("Invalid Passport Expiry Date!");
      document.getElementById("vld").style.backgroundColor = "#FFFF99";
      return false;
      } else if(!natnlty){
      alert("Invalid Nationality!");
      document.getElementById("natnlty").style.backgroundColor = "#FFFF99";
      return false;
      } else if(!brth){
      alert("Invalid Date of Birth!");
      document.getElementById("brth").style.backgroundColor = "#FFFF99";
      return false;
      } else if(!plcbrth){
      alert("Invalid Place of Birth!");
      document.getElementById("plcbrth").style.backgroundColor = "#FFFF99";
      return false;
      } else if(!prsntry){
      alert("Invalid Date of Present Entry!");
      document.getElementById("prsntry").style.backgroundColor = "#FFFF99";
      return false;
         } else if(!dated){
      alert("Invalid Validty of Current Pass!");
      document.getElementById("dated").style.backgroundColor = "#FFFF99";
      return false;
       } else if(!drive_link){
      alert("Invalid Drive Link!");
      document.getElementById("drive_link").style.backgroundColor = "#FFFF99";
      return false;
          } else {
             document.getElementById("error").innerHTML="We Are Processing Your Submission. Please Wait...";
             document.getElementById("interact").style.display = "none";
             $('#myModal').modal("show");
             google.script.run.withSuccessHandler(onSuccess).setStudentDetails(details);
             return true;
            }
}

function onSuccess(){
 $('#myModal').modal("hide");
 document.getElementById("type").disabled = true;
 document.getElementById("matrc").disabled = true;
 document.getElementById("hndphn").disabled = true;
 document.getElementById("email").disabled = true;
 document.getElementById("coursen").disabled = true;
 document.getElementById("coursed").disabled = true;
 document.getElementById("coursel").disabled = true;
 document.getElementById("name").disabled = true;
 document.getElementById("gndr").disabled = true;
 document.getElementById("trvldoc").disabled = true;
 document.getElementById("issnc").disabled = true;
 document.getElementById("vld").disabled = true;
 document.getElementById("natnlty").disabled = true;
 document.getElementById("brth").disabled = true;
 document.getElementById("plcbrth").disabled = true;
 document.getElementById("prsntry").disabled = true;
 document.getElementById("dated").disabled = true;
 document.getElementById("sev").disabled = true;
 document.getElementById("drive_link").disabled = true;
 document.getElementById("submit").style.display = "none";
 document.getElementById("clear").style.display = "none";
 document.getElementById("complete").style.display = "block";
 $('#myModal').modal("show");
 document.getElementById("error").innerHTML="Check Your Email for Confirmation!";
 document.getElementById("footer").style.display = "block";
}


function addDashes(f){
  num = f.value;
  parts = [num.slice(0,3),num.slice(3,6),num.slice(6,20)];
  fNum = parts[0]+"-"+parts[1]+""+parts[2];
  f.value = fNum;
}

$("#type").change(function() {
  if ($(this).val() == "New Application (IM14)" || $(this).val() == "Variation - Within Same University (IM14) [Change of course/ Kull etc]" || $(this).val() == "Variation - From Different University (IM14) [Change programme from other university]" || $(this).val() == "Progression (IM14) [from BA/ MA to MA/ PhD etc]") {
    $('#sev').show();
    $('#sev').attr('required', '');
    $('#sev').attr('data-error', 'This field is required.');
  } else {
    $('#sev').hide();
    $('#sev').removeAttr('required');
    $('#sev').removeAttr('data-error');
  }
});
$("#type").trigger("change");
