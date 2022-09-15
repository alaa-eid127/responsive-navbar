const navMenu = document.querySelector(".nav-menu");
navMenu.onclick = function () {
    const unorderedList = document.querySelector("ul");
    unorderedList.classList.toggle('active');
}