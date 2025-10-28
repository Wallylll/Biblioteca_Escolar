import livros from "./database/scr_livros.js";


const bookList = document.getElementById("bookList");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

// Função que exibe os livros
function exibirLivros(lista) {
  bookList.innerHTML = ""; // Limpa antes de renderizar novamente

  if (lista.length === 0) {
    bookList.innerHTML = "<p class='no-results'>Nenhum livro encontrado.</p>";
    return;
  }

  lista.forEach(livro => {
    const card = document.createElement("div");
    card.classList.add("book-card");

    card.innerHTML = `
      <img src="${livro.ilustracao}" alt="Capa do livro ${livro.titulo}">
      <h3>${livro.titulo}</h3>
      <p><strong>Autor:</strong> ${livro.autor}</p>
      <p><strong>Gênero:</strong> ${livro.genero}</p>
      <p><strong>Linguagem:</strong> ${livro.linguagem}</p>
    `;

    bookList.appendChild(card);
  });
}

// Renderiza todos os livros ao carregar
exibirLivros(livros);

// Função de pesquisa
function pesquisar() {
  const termo = searchInput.value.toLowerCase().trim();

  const filtrados = livros.filter(livro =>
    livro.titulo.toLowerCase().includes(termo) ||
    livro.autor.toLowerCase().includes(termo) ||
    livro.genero.toLowerCase().includes(termo)
  );

  exibirLivros(filtrados);
}

// Eventos de pesquisa
searchInput.addEventListener("input", pesquisar);
searchBtn.addEventListener("click", pesquisar);