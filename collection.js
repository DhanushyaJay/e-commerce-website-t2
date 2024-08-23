var productContainer = document.getElementById("product"); // Consistent naming convention
var searchInput = document.getElementById("search"); // Consistent naming convention

var productList = productContainer.querySelectorAll("div");

searchInput.addEventListener("keyup", function () {
  var enterValue = event.target.value.toUpperCase();

  for (var i = 0; i < productList.length; i++) {
    var productName = productList[i].querySelector("p").textContent.toUpperCase();

    if (productName.indexOf(enterValue) === -1) {
      productList[i].style.display = "none";
    } else {
      productList[i].style.display = "block";
    }
  }
});