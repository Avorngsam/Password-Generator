var characterLength =8;
var choiceArr = [];

var lowerCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberArr = ['0','1','2','3','4','5','6','7','8','9'];
var specialCharArr = ['!','#','$','%','&','(',')','*','+','-','/',':','<','=','>','?','@','[',']','^','{','}','~'];

// assignment code
var generateBtn = document.querySelector("#generate");

/// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();

  if (correctPrompts) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;

  }
  
}

function generatePassword() {
  var password = "";
  for(var i = 0; i < characterLength; i++ ) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}

function getPrompts() {
  choiceArr = [];
  characterLength = parseInt(prompt('How many characters would you like your password to contain? Choose between 8-128'));

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length must be a min 8 and max of 128. Please try again!");
    return false;
  }
  
  if (confirm("Would you like to include lowercase characters?")) {
  choiceArr = choiceArr.concat(lowerCaseArr);
  }
  if (confirm("Would you like to include uppercase characters?")) {
  choiceArr = choiceArr.concat(upperCaseArr);
  }
  if (confirm("Would you like to include numeric characters?")) {
  choiceArr = choiceArr.concat(numberArr);
  }
  if (confirm("Would you like to include special characters?")) {
  choiceArr = choiceArr.concat(specialCharArr);
  }
  return true;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
