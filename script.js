function opentab(event, tabname) {
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    for (var tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (var tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

document.addEventListener("DOMContentLoaded", function () {
    // Ensure the first tab is active by default
    var defaultTab = document.querySelector('.tab-links.active-link');
    if (defaultTab) {
        defaultTab.click();
    } else {
        document.querySelector('.tab-links').click();
    }
});
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
