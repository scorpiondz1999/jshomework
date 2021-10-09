// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  //  characters accepted for the password
  var charsetlower = "abcdefghijklmnopqrstuvwxyz";
  var charsetupper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var charsetnumber = "0123456789";
  var charsetspecial = "!@#$%&<>({)}+?~";

  // charset selected 
  var charset = ""

  var length = window.prompt("How many characters will i have to contains ?:");
  //password length requirement.
  if (length < 8) {
    window.alert("Your password must have at least 8 characters");
  } else {
    if (length > 128) {
      window.alert("password must have less than 129 characters");
    } else {
      var lowercase = false;
        //asking if password contain lowercase characters then confirm  .
        lowercase = window.confirm("Click OK to confirm including Lowercase ?");

      if (lowercase == true) {
          charset = charset + charsetlower;
        }     

        //asking if the password contain Uppercase character then confirm  .
      var uppercase = false;
        uppercase = window.confirm("Click OK to confirm including Uppercase?");

      if (uppercase == true) {
          charset = charset + charsetupper;
        }     

        //asking and  if the password contain numbers then confirm .
      var number = false;
        number = window.confirm("Click OK to confirm including Number ?");

      if (number == true) {
          charset = charset + charsetnumber;
        }
     
        //asking if the password contain specialcharacters then confirm .
      var specialcharacters = false;
        specialcharacters = window.confirm(
          "Click OK to confirm including special characters??"
        );

      if (specialcharacters == true) {
        charset = charset + charsetspecial;
      }
      //in case lower,upper,number and specialcharacters are false then we use window.alert as return
      if(lowercase == false && uppercase==false && number ==false && specialcharacters==false){
        return window.alert("Please select at least one character");
      }      

      (retVal = ""), (n = charset.length);
      for (var i = 0; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      return retVal;
    }
  }
}
