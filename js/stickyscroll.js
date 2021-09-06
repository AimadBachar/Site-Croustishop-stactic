
// detecter scroll 
window.onscroll = function() { sticky() };

// recupérer les élements
let header = document.getElementById('sticky-header');
let stickyComponent = header.offsetTop;

// faire la fonction
function sticky() {
    console.log(window.pageYOffset);
    if (window.pageYOffset > stickyComponent) {
        header.classList.add("sticky");
    }
    else {
        header.classList.remove("sticky");
    }
}