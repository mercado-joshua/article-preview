"use strict";

document.addEventListener("readystatechange", function (event) {
  if (event.target.readyState === "complete") {
    console.log("readyState: complete");
    init();
  }
});

function init() {
  var shareBtn = document.querySelectorAll("[data-js-toggle-tooltip]");
  var tooltip = document.querySelector("[data-js-tooltip]");
  shareBtn.forEach(function (elem) {
    elem.addEventListener("click", function () {
      tooltip.classList.toggle("-active");
    });
  });
}