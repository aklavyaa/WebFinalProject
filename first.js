// function hello(){
//   // document.getElementsByClassName('demo').innerHTML = "From outside file"
//   document.getElementById('demo').style.display = "none"
//
//   // document.getElementsByClassName('forming').style.display = "none"
// }


var firstName = "";

var username = "";
var password = "";

var savedUsername = "";
var savedPassword = "";
var savedEmail = "";

function printStatement(statement){
  document.getElementById('statement').innerHTML = statement
}


function displayRegisterForm(){
    // .form .register-form
    document.getElementById('registerForm').style.display = "block"
    document.getElementById('loginForm').style.display = "none"
}


function displayLoginForm(){
  document.getElementById('registerForm').style.display = "none"
  document.getElementById('loginForm').style.display = "block"
}



 function checkLogin(){
   if (username === "" || password === ""){
     //  enter the username or password
     printStatement("Enter the username or password")

     // console.log("enter the username or password");
     return
   }

   if(username === savedUsername && password === savedPassword){
      // Login Succesfully
      printStatement("Login Succesfully")
      // console.log();
   } else {
     //  Wrong username Password
     printStatement("Wrong username Password")
     // console.log();

   }
 }


 function checkForSignup(){
   if (savedUsername === "" || savedPassword === "" || savedEmail === ""){
     // Please fill all the fields
     printStatement("Please fill all the fields")
     // console.log();
   } else {
     // Signed up successfully
     printStatement("Signed up successfully")
     // console.log();
   }
 }



  function loginSubmit(){
    username =  document.getElementById('username').value
    password =  document.getElementById('password').value

    checkLogin()
  }

  function signUpSubmit(){
    savedUsername =  document.getElementById('signUsername').value
    savedEmail =  document.getElementById('signEmail').value
    savedPassword =  document.getElementById('signPassword').value

    checkForSignup()

  }

// function onClickeffect() {
//   // pChange.innerHTML = "well"
//       // document.getElementById('pChange').innerHTML = "Handsome"
//       // console.log("very wordl");
//
//     firstName =  document.getElementById('fname').value
//
//       console.log(firstName);
// }
