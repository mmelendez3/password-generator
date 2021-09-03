// Assignment code here



    
  
 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {

   
  //ask user how long they want password
var promptLength = (prompt("How long do you want your password to be? Please choose between 8 - 128 characters!"));{
  

//validate prompt answer

//if nothing entered then return message asking for valid response
if (promptLength === "" || promptLength === null) {
  window.alert("You need to provide a valid answer! Please Try Again.");

  return writePassword();
}
//if answer is less than 8 or more than 128 alert them to length conditions
else if (promptLength < 8) {
  window.alert("Password must be at least 8 characters long!  Please Try Again.")

  return writePassword();
}
else if (promptLength > 128) {
  window.alert("Password must be less than 128 characters long! Please Try Again.")

  return writePassword();
}
//if they dont input a number then return alert informing user that only numeric values are accepted
while (promptLength !== parseInt(promptLength).toString()) {
  alert("Please enter only numbers between 8 - 128!");

  return writePassword();
}

};

var inputType = (alert("Please select the character types to include in password!"));
  
  window.confirm("Do you want lowercase characters included in your password?");
  
  window.confirm("Do you want uppercase characters included in your password?")
  window.confirm("Do you want numbers included in your password?")
  window.confirm("Do you want special characters included in your password?")


if (inputType == false) {
  window.alert("You must select at least one variable for your password!")
  return writePassword();
}





  



  
  
  
  var password = generatePassword();





  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
