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

//content-pick section
let contentPick = document.querySelector(".content-pick");
contentPick.addEventListener("click", () => {
    contentPick.style.backgroundColor = "orange";

})

let destination = document.querySelector(".destination");
destination.addEventListener("click", () => {
    destination.style.color = "green";

})

let btn = document.querySelector(".btn");
btn.addEventListener("click", (event) => {
    btn.style.backgroundColor = "white";
    btn.style.color = "black";
    event.stopPropagation();
})