function myFunction() {
  var x = document.getElementById("navBar");
  if (x.className === "nav-container") {
    x.className += " responsive";
  } else {
    x.className = "nav-container";
  }
}