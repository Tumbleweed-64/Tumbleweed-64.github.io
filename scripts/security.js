document.addEventListener('contextmenu', (e) => e.preventDefault());

function ctrlShiftKey(e, keyCode) {
return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
// Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
if (
event.keyCode === 123 ||
ctrlShiftKey(e, 'I') ||
ctrlShiftKey(e, 'J') ||
ctrlShiftKey(e, 'C') ||
(e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
)
return false;
};

var alphaNumeric = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","0"];

function getChar() {
var randChar = alphaNumeric[Math.floor(Math.random() * alphaNumeric.length)];
return randChar;
}

function genCode() {
  var codeString = "";
  for (let i=0; i<20; i++) {
  codeString += getChar();
  }
  return codeString;
}

var passcode = genCode();

function checkCode() {
  var guessCode = prompt('Paste in the code:');
  if (guessCode == passcode) { 
    alert('You\'re in.'); 
    window.location.href = 'main.html';
  } else { 
    alert('Wrong code. Try again.'); }
}

function adminLogin() {
  var adminUsername = "Tumbleweed-64";
  var adminPW = "1t$@m3m@r10";
  var prmptusrnm = prompt("Enter username: ");
  var prmptPW = prompt("Enter password: ")
  if ((prmptusrnm === adminUsername) && (prmptPW === adminPW)) {
    window.location.href = "main.html"
  } else {
    alert("Nice try!")
  }
}

  
