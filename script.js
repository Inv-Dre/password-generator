// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // find the password id in the document and saves it to the variable passwordText
  var passwordText = document.querySelector("#password");
// the value of passwordText is set equal to password
  passwordText.value = password;

    // function runs whent the function write password is invoked
    function generatePassword() {
      // list of variables
    var numbers = '123456789';
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var symbols = '@#$%&*';
    var allChar = " ";
    var password = ""; 
    // prompt user to enter a value the value will eaual the length of our password
    var length = window.prompt("Enter length of password","number between 8-128");
    // changes the type of length from a string to a number and stores it in a new variable
    var userLength = Number (length);
      // if the user cancels the prompt the function will stop and start from the beginning
    if (length === null){
  
      return generatePassword();
    }
//  if the function is cancelled this else if will be checked
// if userLength is not a number, <8, or >128 the function will start from the beginning
     else if ( typeof userLength !== "number" || userLength < 8 || userLength >128 ){

      return generatePassword();
  
    }
    // if both of those do not run then the user is alerted that they will be choosin character types
    else {
      alert("Now it's time to choose character types");
    }
// asks the user if they want lower case letters
    var lowerCase = window.confirm('Do you want lower case characters');
    // if they say yes a string of lower case letters is added to the allChar variable
    // if they say no it is not added
    if (lowerCase){
      allChar += alphabet;
    }
    // asks the user if they want upper case letters
    var upperCase = window.confirm('Do you want upper case characters');
    // if they say yes a string of upper case letters is added to the allChar variable
    // if they say no it is not added
    if (upperCase ){
      allChar += upperAlphabet;
    }
    // asks the user if they want  numbers
    var numChar = window.confirm('Do you want numbers in your password','1-9');
    // if they say yes a string of numbers is added to the allChar variable
    // if they say no it is not added
    if (numChar){
      allChar += numbers;
    }
    // asks the user if they want special case letters
    var specialChar = window.confirm('Do you want special characters in your password','1-9');
       // if they say yes a string of special characters is added to the allChar variable
    // if they say no it is not added
    if (specialChar){
      allChar += symbols;
    }
    // if you dont pick any chracters the user is alerted to pick a character
    // the function then starts over 
    if (allChar ===""){
      alert('Select a character type');
      return generatePassword();
    }
    
    // the values in allChar are selected using a random generator and added to the password variable
    for (let index = 0; index < userLength; index++) {
      password += allChar[Math.floor(Math.random() *allChar.length)];
   
    }
    
    // the value of password is returned and is placed in passwordText.value
    return password;
    
    }
  }


    