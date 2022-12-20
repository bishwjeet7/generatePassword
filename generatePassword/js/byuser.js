password = "";
var symbol = "~!@#$%^&*()?/<>{}[]()+-',";
var number = "0123456789";
var upperLowerCasealphabet = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";

var checkPasswordGenertedOrNot = false;

// length by user
var alphalength;
var numlength;
var symlength;
var passlength;
var checkPasswordGenertedOrNot = false;


function passlengthSet() {
    alphalength = document.getElementById("alphabetLength").value;
    numlength = document.getElementById("numberLength").value;
    symlength = document.getElementById("symbolLength").value;

    // console.log(typeof(parseInt(alphalength)));
    passlength = (parseInt(alphalength) + parseInt(numlength)) + parseInt(symlength);
    console.log(passlength);
    // document.getElementById("passwordGenerated").value = passlength;
    generatePassword();
    console.log(password);
    console.log(password.length);
}

function generatePassword() {
    if (checkPasswordGenertedOrNot == false) {
        for (let index = 0; index < passlength; index++) {
            var rand = Math.floor(Math.random() * 3);
            console.log("Rand = " + rand);
            if (rand == 0) {
                if (alphalength > 0) {
                    password = password + symbol[Math.floor(Math.random() * symbol.length)]
                }
                else {
                    index = index - 1;
                }
            }
            else if (rand == 1) {
                if (numlength > 0) {
                    password = password + number[Math.floor(Math.random() * number.length)];
                }
                else {
                    index = index - 1;
                }
            }
            else if (rand == 2) {
                if (symlength > 0) {
                    password = password + upperLowerCasealphabet[Math.floor(Math.random() * upperLowerCasealphabet.length)];
                }
                else {
                    index = index - 1;
                }
            }

        }
    }
    else {
        alert("Password already generated. Refresh to generate password again.");
    }
    checkPasswordGenertedOrNot = true;
}

function validatealp() {
    var num = document.getElementById("alphabetLength");
    if (num == "" || num != "") {
        if (isNaN(num.value)) {
            num.style.color = "red";
        }
        else if (num.value == " " || num.value == "") {
            num.placeholder = "Cannot be empty";
            num.style.color = "red";
        }
        else if (parseInt(num.value) < 0) {
            num.style.color = "red";
        }
        else {
            num.style.color = "green";
        }
    }
}

function validatealp2() {
    var num = document.getElementById("numberLength");
    if (num == "" || num != "") {
        if (isNaN(num.value)) {
            num.style.color = "red";
        }
        else if (num.value == " " || num.value == "") {
            num.placeholder = "Cannot be empty";
            num.style.color = "red";
        }
        else if (parseInt(num.value) < 0) {
            num.style.color = "red";
        }
        else {
            num.style.color = "green";
        }
    }
}

function validatealp3() {
    var num = document.getElementById("symbolLength");
    if (num == "" || num != "") {
        if (isNaN(num.value)) {
            num.style.color = "red";
        }
        else if (num.value == " " || num.value == "") {
            num.placeholder = "Cannot be empty";
            num.style.color = "red";
        }
        else if (parseInt(num.value) < 0) {
            num.style.color = "red";
        }
        else {
            num.style.color = "green";
        }
    }
}


// Copy to clipboard.
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
    else {
        alert("Pleaase generate password first.");
    }
}


// Show password.
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
    else {
        alert("Pleaase generate password first.");
    }
}