// stuff for main page, mainly tab-cloaking
function getSelectVal() {
  var cloakOps = document.getElementById("cloakOps");
  var titleElem = document.getElementById("titleElem");
  var fav = document.getElementById("fav")
  if (cloakOps.value === "clever") {
      fav.setAttribute("href", "clever-fav.ico");
      titleElem.innerHTML = "Clever | Portal";
  } else if (cloakOps.value === "schoology") {
    fav.setAttribute("href", "schoology-fav.ico");
    titleElem.innerHTML = "Home | Schoology";
  } else if (cloakOps.value === "default") {
    fav.setAttribute("href", "main.ico")
    titleElem.innerHTML = "Tumbleweed64/Main"
  }
}
