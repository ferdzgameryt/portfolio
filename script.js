const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n =>
    n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
);

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");

    function openModal(src) {
    modal.classList.remove("hidden");
    modalImg.src = src;
    }

    modal.addEventListener("click", () => {
    modal.classList.add("hidden");
 });