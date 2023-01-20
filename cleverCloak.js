function cloak() {
  var fav = document.querySelector("link[type='image/x-icon']");
  var titleElem = document.querySelector("title");
  fav.setAttribute("href", "https://tumbleweed-64.github.io/clever-fav.ico");
  titleElem.innerHTML = "Clever | Portal";
}

cloak();
