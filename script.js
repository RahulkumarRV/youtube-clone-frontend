var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");
var colorMode = document.querySelector(".color-mode");
var navbar = document.querySelector("nav");


menuIcon.addEventListener("click", function() {
    sidebar.classList.toggle('small-sidebar');
    container.classList.toggle('large-container');
});


colorMode.addEventListener("click", function() {
    colorMode.src = colorMode.src.indexOf('dark-icon') !== -1 ? 'images/light-icon.png' : 'images/dark-icon.png';
});
