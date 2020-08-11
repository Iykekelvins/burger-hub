//automatically get year
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

//select toggle button and links container
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const linksContainer = document.querySelector(".links-container")

navToggle.addEventListener("click", function() {
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } 
    else {
        linksContainer.style.height = 0;
    }
})

const navbar = document.querySelector(".container")
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        //prevent default
        e.preventDefault();
        //navigate to specific spot
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        // calculate the heights
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        let position = element.offsetTop - navHeight;

            position = position + containerHeight;
    window.scrollTo( {
        left:0,
        top: position,
    })
    linksContainer.style.height = 0;
    })
}) 