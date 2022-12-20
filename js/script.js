password = "";
var symbol = "~!@#$%^&*()?/<>{}[]()+-',";
var number = "0123456789";
var upperCasealphabet = "ABCDEFGHUJKLMNOPQRSTUVWXYZ";
var lowerCasealphabet = "abcdefghijklmnopqrstuvwxyz";

var checkPasswordGenertedOrNot = false;

// document.getElementById("passwordGenerated").value = "*****************";
function autoGenerate() {
  min = 12, max = 20
  let difference = max - min;

  let rand = Math.random();

  // multiply with difference 
  rand = Math.floor(rand * difference);

  // add with min value 
  rand = rand + min;
  password = rand
  // console.log(password);

  // Creating password from combination of length.

  for (let index = 0; index < rand; index++) {
    var chooseRan = Math.floor(Math.random() * 4);
    if (chooseRan == 0) {
      password = password + symbol[Math.floor(Math.random() * symbol.length)];
    }
    else if (chooseRan == 1) {
      password = password + number[Math.floor(Math.random() * number.length)];
    }
    else if (chooseRan == 2) {
      password = password + upperCasealphabet[Math.floor(Math.random() * upperCasealphabet.length)];
    }

    else if (chooseRan == 3) {
      password = password + lowerCasealphabet[Math.floor(Math.random() * lowerCasealphabet.length)];
    }
  }

  checkPasswordGenertedOrNot = true;
}

function copyToClipBoard() {
  if (checkPasswordGenertedOrNot == true) {
    document.getElementById("passwordGenerated").value = password;
    var copyText = document.getElementById("passwordGenerated");
  
    copyText.select();
  
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Password Copied : " + copyText.value);
  }
  else{
    alert("Pleaase generate password first.");
  }
}

function showPassword() {
  if (checkPasswordGenertedOrNot == true) {
    document.getElementById("passwordGenerated").value = password;
    var x = document.getElementById("passwordGenerated");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  else{
    alert("Pleaase generate password first.");
  }
}