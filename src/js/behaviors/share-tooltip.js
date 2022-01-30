document.addEventListener("readystatechange", function (event) {
    if (event.target.readyState === "complete") {
        console.log("readyState: complete");
        init();
    }
});

function init() {
    const shareBtn = document.querySelectorAll("[data-js-toggle-tooltip]");
    const tooltip = document.querySelector("[data-js-tooltip]");

    shareBtn.forEach(function(elem) {
        elem.addEventListener("click", function() {
            tooltip.classList.toggle("-active");
        });
    });
}
