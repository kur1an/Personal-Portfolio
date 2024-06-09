document.addEventListener("DOMContentLoaded", function () {
    // Get the buttons
    var pageUpButton = document.getElementById("pageUpButton");
    var pageDownButton = document.getElementById("pageDownButton");

    // Add click event listeners to the buttons
    pageUpButton.addEventListener("click", function () {
        scrollToTop();
    });

    pageDownButton.addEventListener("click", function () {
        scrollToBottom();
    });
});

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Function to scroll to the bottom of the page
function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
}
