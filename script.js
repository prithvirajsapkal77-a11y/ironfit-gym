document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

    });

    // Close menu after clicking a link
    const links = navLinks.querySelectorAll("a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

        });

    });

});

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function () {

    alert("Thank you! Your enquiry is being submitted.");

});