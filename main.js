// Select the menu icon and navbar
let menuIcon = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

// Add a click event listener
menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmarks");
    navbar.classList.toggle("active"); // Toggle navbar visibility
};

let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navlinks.forEach((link) => {
                link.classList.remove("active");
            });

            let activeLink = document.querySelector(`header nav a[href="#${id}"]`);
            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });

    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);
};

menuIcon.classList.remove("fa-xmarks");
navbar.classList.remove("active");

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', {
    origin: 'top'
});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {
    origin: 'bottom'
});
ScrollReveal().reveal('.home-content h1, .about-img', {
    origin: 'left'
});
ScrollReveal().reveal('.home-content p, .about-content', {
    origin: 'right'
});

const typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer", "Web Designer", "Youtuber"],
    typeSpeed: 79,
    backSpeed: 78,
    backDelay: 1000,
    loop: true,
});. 