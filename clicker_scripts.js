var cps = 0;

function buttonShrink() {
  var clickBtn = document.getElementById("clickBtn");
  clickBtn.width -= clickBtn.width * 0.5;
  clickBtn.height -= clickBtn.height * 0.5;
}

function buttonGrow() {
  var clickBtn = document.getElementById("clickBtn");
  clickBtn.style.width += clickBtn.style.width * 0.5;
  clickBtn.style.height += clickBtn.style.height * 0.5;
}

function handleClick() {
  var lvlProgress = document.getElementById("lvlProgress");
  lvlProgress.value += 1;
  if (lvlProgress.value === lvlProgress.max) {
    lvlProgress.value = "0";
    lvlProgress.max += Math.floor(Math.random() * 15) + 1
  }
}
