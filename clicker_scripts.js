var cps = 0;

function handleClick() {
  var lvlProgress = document.getElementById("lvlProgress");
  lvlProgress.value += 1;
  if (lvlProgress.value === lvlProgress.max) {
    lvlProgress.value = "0";
    lvlProgress.max += Math.floor(Math.random() * 25) + 1;
  }
}
