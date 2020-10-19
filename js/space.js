setTimeout(function() {
    let loader = document.getElementById("loader");
    loader.classList.toggle("loaded");
},0);
function wrapNavbar() {
    let navbar = document.getElementById("navbar");
    navbar.classList.toggle("wrap-navbar-show");
}
function like() {
    let heart = document.getElementById("like");
    heart.classList.toggle('fa-heart-like');

}
function respace() {
    let rt = document.getElementById("respace");
    rt.classList.toggle('respace');
}