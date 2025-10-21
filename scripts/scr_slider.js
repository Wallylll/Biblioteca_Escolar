import livros from "./scr_livros.js"


const slider = document.querySelector("#slider");

livros.forEach(livro => {
    let cover = `<li class="cover card-item swiper-slide"><img src="${livro.ilustracao}" alt=""></li>`;

    slider.innerHTML += cover;
});