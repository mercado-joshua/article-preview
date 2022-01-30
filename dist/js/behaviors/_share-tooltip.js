"use strict";

document.addEventListener("readystatechange", function (event) {
  if (event.target.readyState === "complete") {
    console.log("readyState: complete");
    init();
  }
});

function init() {
  var toolip = document.querySelector("[data-js-tooltip]");
  var shareBtn = document.querySelector("[data-js-toggle-tooltip]");
  shareBtn.addEventListener("click", function () {
    toolip.classList.toggle("-active");
    console.log(tooltip.className);
  });
}