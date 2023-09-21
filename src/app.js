document.addEventListener("DOMContentLoaded", function () {
    const customNavbar = document.getElementById("custom-navbar");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            customNavbar.classList.add("scrolled");
        } else {
            customNavbar.classList.remove("scrolled");
        }
    });
});
