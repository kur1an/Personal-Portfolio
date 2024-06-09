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

window.onload = function() {
    // Check if view count exists in local storage
    if(localStorage.getItem('viewCount')) {
        // If exists, increment the count
        var count = parseInt(localStorage.getItem('viewCount'));
        count++;
        localStorage.setItem('viewCount', count);
        document.getElementById('viewCount').textContent = count;
    } else {
        // If not exists, set view count to 1
        localStorage.setItem('viewCount', 1);
        document.getElementById('viewCount').textContent = 1;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('main-content');
    const progressBar = document.getElementById('progress-bar');

    let progress = 0;
    const interval = setInterval(() => {
        progress += 1;
        progressBar.style.width = progress + '%';

        if (progress >= 50) {
            clearInterval(interval);
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
                mainContent.style.display = 'block';
                document.body.style.overflow = 'auto';  // Unlock scrolling
            }, 500);
        }
    }, 50);
});

// Event listener for PageUp and PageDown keys
window.addEventListener("keydown", function(event) {
    if (event.key === "PageUp") {
        scrollToTop();
    } else if (event.key === "PageDown") {
        scrollToBottom();
    }
});
