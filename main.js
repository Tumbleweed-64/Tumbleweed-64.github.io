function getSelectVal() {
  var cloakOps = document.getElementById("cloakOps");
  var titleElem = document.getElementById("titleElem");
  var fav = document.getElementById("fav")
  if (cloakOps.value === "clever") {
      fav.setAttribute("src", "clever-fav.ico");
      titleElem.innerHTML = "Clever | Portal";
  } else if (cloakOps.value === "schoology") {
    fav.setAttribute("src", "schoology-fav.ico");
    titleElem.innerHTML = "Home | Schoology";
  }
}
