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

sr.reveal(`.account__data, .home__img,
            .about__data, .about__img,
            .services__content, .menu__content,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content`, {
    interval: 200
})