import livros from "./database/scr_livros.js"


const slider = document.querySelector("#slider");

livros.forEach(livro => {
    let cover = `<div class="swiper-slide cover"><img src="${livro.ilustracao}" alt=""></div>`;

    slider.innerHTML += cover;
});