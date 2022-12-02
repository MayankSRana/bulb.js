// left side of screen

// *** this function is for the time and image on left side of screen

function timer() {
  
  var dateTime = new Date();
  var hours = dateTime.getHours();
  var minutes = dateTime.getMinutes();
  var seconds = dateTime.getSeconds();
  var meridian = document.getElementById("meridian");
  // var HOURS=hours;
  var IMAGE = document.getElementById("img");

  if (hours > 1 && hours < 12) {
    document.getElementById("greet").innerHTML = "GOOD-MORNING";
    meridian.innerHTML = "AM";
    IMAGE.src ="/Volumes/Drive-B/CODING/java script projects/timelimitpage/images/morning.gif";
  }
  if (hours > 12 && hours < 18) {
    document.getElementById("greet").innerHTML = "GOOD-AFTERNOON";
    meridian.innerHTML = "PM";
    IMAGE.src =
      "/Volumes/Drive-B/CODING/java script projects/timelimitpage/images/afternoon.gif";
  }

  if (hours > 18 && hours < 20) {
    document.getElementById("greet").innerHTML = "GOOD-EVENING";
    meridian.innerHTML = "PM";
    IMAGE.src =
    "/Volumes/Drive-B/CODING/java script projects/timelimitpage/images/evening.gif";
  }
  if (hours > 20 && hours < 24) {
    document.getElementById("greet").innerHTML = "GOOD-NIGHT";
    meridian.innerHTML = "PM";
    IMAGE.src =
      "/Volumes/Drive-B/CODING/java script projects/timelimitpage/images/night.gif";
  }

  if (hours > 12) {
    hours = hours - 12;
  }
  document.getElementById("time").innerHTML =
    hours + ":" + minutes + ":" + seconds;
}
setInterval(timer, 1000);

         //right side of the screen

     // ***this function is for COUNT-DOWN timer
function countdown() {
  

  let m = 4;
  let s = 60;
  let countdowntime = setInterval(function () {
    s--;
    document.getElementById("count").innerHTML = m + ":" + s;
    if (s == 0) {
      s = 59;
      m--;
    }
    if (m == 0 && s == 1) {
      clearInterval(countdowntime);      // to redirect on another page
      setInterval(function () {
        window.location.href =
          "/Volumes/Drive-B/CODING/java script projects/timelimitpage/redirect.html";
      }, 2000);
    }
  }, 1000);
}

//  ***FORM VALIDATION start...

function seterror(id, error) {
  element = document.getElementById(id);      //----     // this is to target the id of div
  element.getElementsByClassName("error")[0].innerHTML = error; //----    // target class error and write in it
}

function validation() {
  var returnvalue = true;
  var resultcheck = false;

  
// name should not be empty
  var NAME = document.forms["myform"]["fname"].value; 
  if (NAME == "") {
    seterror("name", "*name is empty");
    returnvalue = false;
   
  }
      //for phone digit..
  let MOBILE = document.forms["myform"]["fmob"].value; 
  if (MOBILE.length != 10) {
    seterror("mobile", " * mob no. shoud be filled");
    returnvalue = false;
  }

     //for too long email..
  let email = document.forms["myform"]["femail"].value; 
  if (email.length > 30) {
    seterror("email", "*email is too long");
    returnvalue = false;
  }

  // for empty email
  if (email == "") {                                          
    
    seterror("email", "*email is empty");
    returnvalue = false;
  }

  let FPASSWORD = document.forms["myform"]["fpass"].value;
  let CPASSWORD = document.forms["myform"]["fcpass"].value;

// empty password
  if (FPASSWORD == "") {
    seterror("password", "*password is empty"); 
    returnvalue = false;
  }

  // for match the password..
  if (FPASSWORD !== CPASSWORD) {
    
    seterror("cpassword", "*incorrect password ");
    returnvalue = false;
  }
// empty address
  let address = document.forms["myform"]["fadd"].value; 
  if (address == "") {
    seterror("address", "*fill your address");
  }

//for empty gender..
  let totalgender = document.getElementsByName('gender').length;             
  let GENDER=document.getElementsByName('gender');
 
 
  for(i=0;i<totalgender;i++){
      if(GENDER[i].checked==true){
          resultcheck=true;
      }
  }
  if(resultcheck==false){
      seterror('gen','* select gender')
  }
      

    //for chekbox  


  let checklength=document.getElementsByName("language").length;            
  let check=document.getElementsByName("language");
  for(i=0;i<checklength;i++){
      if(check[i].checked==true){
          resultcheck=true;
      }
  }
  if(resultcheck==false){
    seterror('lang','* select the languages')
  }

 
  if(returnvalue==false || resultcheck==false){
    return false;
}
else{
    return true;
}

  
}

// ***function for AUTO FILL ADDRESS

function check() {
  let ADDRESS = document.forms["myform"]["fadd"].value;

  document.forms["myform"]["fpadd"].value = ADDRESS;
  document.getElementById("submitBtn").disabled = false ;
}
function uncheck() {
  document.forms["myform"]["fpadd"].value = "";
  document.getElementById("submitBtn").disabled = true ;
  document.getElementById("submitBtn").style.backgroundColor ="green"
}


// ***function to disable and enabled button

function checkform(){
  var frminput = document.getElementsByClassName('inputclass');
  var frmlength = document.getElementsByClassName('inputclass').length
  // alert(frmlength);
  
  var cansubmit = true;
  for (var i = 0; i < frmlength; i++) {
    if(frminput[i].value==""){
      cansubmit = false;
    }
    else{
      cansubmit = true ;
    }
    // alert(cansubmit)
  }
  
  if(cansubmit == true){
    document.getElementById("submitBtn").disabled = false ;
    document.getElementById("submitBtn").style.backgroundColor ="green";
  } 
 



// **** this is for the valid and invalid sign in mob number

mobiles = document.forms["myform"]["fmob"].value;
// alert(mobiles)
if (mobiles.length == 10) {
  seterror("mobile", "  &#10004 valid");
  document.getElementById("moberr").style.color = "green";
}
if (mobiles.length < 10 || mobiles.length > 10) {
  seterror("mobile", "  \u274C invalid");
  document.getElementById("moberr").style.color = "red";
}

}


