let currentRegion = Weglot.getCurrentLang();

document.addEventListener("DOMContentLoaded", function () {
  addClickEvent("region-btn-sv", "sv");
  addClickEvent("region-btn-global", "en");
  timeoutFilterProducts();
});

function addClickEvent(ID, langCode) {
  document.getElementById(ID).addEventListener("click", function () {
    changeLanguage(langCode);
  });
}

function changeLanguage(langCode) {
  Weglot.switchTo(langCode);
  showAllProducts();
  timeoutFilterProducts();
}

function timeoutFilterProducts() {
  setTimeout(function () {
    let currentRegion = Weglot.getCurrentLang();
    filterProductsNew(currentRegion);
  }, 200);
}

function filterProductsNew(currentRegion) {
  console.log("Current region: " + currentRegion);
  const productItems = document.querySelectorAll(".product-grid_item");

  productItems.forEach((item) => {
    let excludedOnRegion = item.querySelector(".excluded-region-var");

    if (excludedOnRegion.textContent.trim() === currentRegion) {
      item.style.display = "none";
    }
  });
}

function showAllProducts() {
  const productItems = document.querySelectorAll(".product-grid_item");
  productItems.forEach((item) => {
    item.style.display = "block";
  });
}

function hideAllProducts() {
  const productItems = document.querySelectorAll(".product-grid_item");
  productItems.forEach((item) => {
    item.style.display = "none";
  });
}
