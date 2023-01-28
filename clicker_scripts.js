var cps = 0;

function genClickFrame() {
  for (var i = 0; i < 5; i++) {
    document.getElementById("clickFrame").appendChild("br");
  }
  var clickBtn = document.createElement("img");
  clickBtn.src = "button.png";
  clickBtn.setAttribute("id", "clickBtn");
  clickBtn.setAttribute("onmousedown", "buttonShrink();");
  clickBtn.setAttribute("onmouseup", "buttonGrow();");
  document.getElementById("clickFrame").appendChild(clickBtn);
}

function buttonShrink() {
  var clickBtn = document.getElementById("clickBtn");
  clickBtn.width -= clickBtn.width * 0.5;
  clickBtn.height -= clickBtn.height * 0.5;
}

function buttonGrow() {
  var clickBtn = document.getElementById("clickBtn");
  clickBtn.width += clickBtn.width * 0.5;
  clickBtn.height += clickBtn.height * 0.5;
}

function handleClick() {
  var lvlProgress = document.getElementById("lvlProgress");
  lvlProgress.value += 1;
  if (lvlProgress.value === lvlProgress.max) {
    lvlProgress.value = "0";
    lvlProgress.max += Math.floor(Math.random() * 15) + 1
  }
}
