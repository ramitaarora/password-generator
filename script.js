// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  lowerCaseChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  upperCaseChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  specialCharacters = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', "`", "{", "|", "}", "~"];
  // CAN'T INCLUDE BACKSLASH IN SPECIAL CHARACTERS

  function numOfChars() {
    chars = window.prompt("How many characters does the password need to be? Please select a number between 8 and 128.")
    if (chars >= 8 && chars <= 128) {
      chars = Number(chars);
      charTypes();
    } else {
      window.alert("Please type a number between 8 and 128.")
      numOfChars();
    }
  }

  function charTypes() {

  }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
