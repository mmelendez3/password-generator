// Assignment code here

  const key_strings = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '0123456789',
  symbols: '!@#$%^&*()'
  };

  // Get references to the #generate element
var generateBtn = document.querySelector("#generate");

  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//prompts when you click generate password
function generatePassword () {
var passwordCharSet = "";
//ask user how long they want password be and use while loop to ensure they input valid option
var length = Number(prompt("Password must be between 8 and 128 characters. How long would you like your password to be?"));
while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Please enter valid number between 8 - 128!"));

  
//ask user which input types they want to include in their password and use while loop to ensure at least one option is chosen
var upperCase = confirm("Would you like to use uppercase letters?");
  if (upperCase) {
    passwordCharSet += key_strings.uppercase;
  };
var lowerCase = confirm("Would you like to use lowercase letters?");
  if (lowerCase) {
  passwordCharSet += key_strings.lowercase;
  }
var numbers = confirm("Would you like to use numbers?");
  if (numbers) {
  passwordCharSet += key_strings.numbers;
  }
var symbols = confirm("Would you like to use special characters?");
  if (symbols) {
  passwordCharSet += key_strings.symbols;
  }

while (!upperCase && !lowerCase && !numbers && !symbols) {
  alert("You must select at least one password variable!");
  upperCase = confirm("Would you like to use uppercase letters?");
  if (upperCase) {
    passwordCharSet += key_strings.uppercase;
  };
  lowerCase = confirm("Would you like to use lowercase letters?");
  if (lowerCase) {
    passwordCharSet += key_strings.lowercase;
    }
  numbers = confirm("Would you like to use numbers?");
  if (numbers) {
    passwordCharSet += key_strings.numbers;
    }
  symbols = confirm("Would you like to use special characters?");
  if (symbols) {
    passwordCharSet += key_strings.symbols;
    }

}

var code = "";
for (let i = 0; i < length; i++) {
code += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
}
return code;
};

//console.log(generatePassword)
