document.addEventListener("DOMContentLoaded", function() {
    var scrollToTopButton = document.querySelector(".scroll-to-top");
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    };

    // Scroll to the top when the button is clicked
    scrollToTopButton.addEventListener("click", function() {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0; 
    });
});


