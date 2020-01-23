// Your code goes here

//navigation

let logoHeading = document.querySelector(".logo-heading");
logoHeading.addEventListener("mouseenter", () => {
    logoHeading.style.color = "orange";

    logoHeading.addEventListener("mouseleave", () => {
        logoHeading.style.color = "black";
    })
});