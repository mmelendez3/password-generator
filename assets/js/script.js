// Assignment code here

  //input variables
  var length;
  var inputType = {
  lower: generateLowerCase(),
  upper: generateUpperCase(),
  number: generateNumber(),
  symbol: generateSymbol()
}

// Four random generator data types
    
    //lowercase
    function generateLowerCase() {
      var lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
    
      return lowerAlphabet[Math.floor(Math.random() * lowerAlphabet.length)];
      
    }
    console.log(generateLowerCase())
    
    //uppercase
    function generateUpperCase() {
      var upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    
      return upperAlphabet[Math.floor(Math.random() * upperAlphabet.length)];
      
    }
    console.log(generateUpperCase())
    
    //numbers
    function generateNumber() {
      var number = "0123456789"
    
      return number[Math.floor(Math.random() * number.length)];
      
    }
    console.log(generateNumber())
    
    //symbols
    function generateSymbol() {
      var symbol = "!@#$%^&*()"
    
      return symbol[Math.floor(Math.random() * symbol.length)];
      
    }
    console.log(generateSymbol())



    
  
 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {


  //ask user how long they want password be and use while loop to ensure they input valid option
  var length = Number(prompt("Password must be between 8 and 128 characters. How long would you like your password to be?"));
while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Please enter valid number between 8 - 128!"));

    
  //ask user which input types they want to include in their password and use while loop to ensure at least one option is chosen
  var upperCase = confirm("Would you like to use uppercase letters?");
  var lowerCase = confirm("Would you like to use lowercase letters?");
  var numbers = confirm("Would you like to use numbers?");
  var symbols = confirm("Would you like to use special characters?");

  while (!upperCase && !lowerCase && !numbers && !symbols) {
    alert("You must select at least one password variable!");
    upperCase = confirm("Would you like to use uppercase letters?");
    lowerCase = confirm("Would you like to use lowercase letters?");
    numbers = confirm("Would you like to use numbers?");
    symbols = confirm("Would you like to use special characters?");
  }
        
        
   

  
   
    }
  
  
  
    

      
      
      
      
     






  



  
  
  
  var password = generatePassword();





  var passwordText = document.querySelector("#password");

  passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
