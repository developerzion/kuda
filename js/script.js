function togglenav(x){
    x.classList.toggle("fa-times");
    document.querySelector(".mobile").classList.toggle("active")
}

const sr = ScrollReveal({
    origin: 'bottom',
    distance: '30px',
    duration: 1500,
    reset: true
});

sr.reveal(`.account__data, .home-sec`, {
    interval: 200
})