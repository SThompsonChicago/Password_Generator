// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordArray;
var passwordString;
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = [" ", "!", '"', '#', '$', '%', '&', "'", ')', '(', '*', '+', ',', '-', '.', '/', ':', '<', '=', '>', '?', '@', '[', '\\', '[', '^', '_', '`', '{', '|', '}', '~']; 


function getLength() {
    var passwordLength = prompt('How many characters would you like your password to contain?');
    while (passwordLength > 128 || passwordLength < 8) {
        if (passwordLength > 128) {
            alert ('Your password must contain less than 129 characters.');
            passwordLength = prompt('How many characters would you like your password to contain?');
        } else {
            alert ('Your password must contain at least eight characters.');
            passwordLength = prompt('How many characters would you like your password to contain?');
        }
    }
    return passwordLength;
    

}

function getTypes(){
    // Ask user what charater types should be included in password
    var specCheck = confirm('Press okay to confirm that you would like your password to contain special characters.');
    var numCheck = confirm('Press okay to confirm that you would like your password to contain numbers.');
    var lowCheck = confirm('Press okay to confirm that you would like your password to contain lower case characters.');
    var upCheck = confirm('Press okay to confirm that you would like your password to contain upper case characters.');

    // create variable that equals zero if user rejects all character types
    var check = (+ specCheck) + (+ numCheck) + (+ lowCheck) + (+ upCheck);
    return check;
}



function generatePassword() {
    var length = getLength();
    var check = getTypes();

    while (check === 0){
        alert("Your password must contain at least one of the following four character types: special characters, numbers, upper case letters or lower case letters.");
        check = getTypes();
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
