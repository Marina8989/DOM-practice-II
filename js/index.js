// Your code goes here

//navigation

let logoHeading = document.querySelector(".logo-heading");
logoHeading.addEventListener("mouseenter", () => {
    logoHeading.style.color = "orange";

    logoHeading.addEventListener("mouseleave", () => {
        logoHeading.style.color = "black";
    })
});

//navigation list
let navLink = document.querySelectorAll(".nav-link").forEach(item => {
    item.addEventListener("mouseover", () => {
        item.style.color = "orange";
        item.style.fontSize = "2rem";
    })

    item.addEventListener("mouseleave", () => {
        item.style.fontSize = "1.7rem";
    })
})