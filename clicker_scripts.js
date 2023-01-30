var cps = 0;
var shopPoints = 0;

function handleClick() {
  var lvlProgress = document.getElementById("lvlProgress");
  lvlProgress.value += 1;
  if (lvlProgress.value === lvlProgress.max) {
    shopPoints++;
    lvlProgress.value = "0";
    lvlProgress.max += Math.floor(Math.random() * 25) + 1;
  }
}

function getUpgrade(upgrade, cost) {
  document.getElementById(upgrade);
  if ((upgrade.id == "autoclick1") && (shopPoints == cost)) {
    cps++;
    cost++;
  }
}
