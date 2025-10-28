import livros from "./database/scr_livros.js";

const bookList = document.getElementById("bookList");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const emprestimosBtn = document.getElementById("meusEmprestimosBtn");

let meusEmprestimos = []; // Array para armazenar livros emprestados

/* === FUNÇÃO PARA EXIBIR OS LIVROS === */
function exibirLivros(lista) {
  bookList.innerHTML = "";

  if (lista.length === 0) {
    bookList.innerHTML = "<p class='no-results'>Nenhum livro encontrado.</p>";
    return;
  }

  lista.forEach(livro => {
    const card = document.createElement("div");
    card.classList.add("book-card");

    // Se o livro não tiver atributo "unidades", adicionamos um por padrão
    if (!("unidades" in livro)) livro.unidades = Math.floor(Math.random() * 3); // 0–2 unidades

    card.innerHTML = `
      <img src="${livro.ilustracao}" alt="Capa do livro ${livro.nome}">
      <h3>${livro.nome}</h3>
      <p><strong>Autor:</strong> ${livro.autor}</p>
      <p><strong>Gênero:</strong> ${livro.genero}</p>
      <p><strong>Linguagem:</strong> ${livro.linguagem}</p>
    `;

    // Evento de clique para abrir o modal
    card.addEventListener("click", () => abrirModal(livro));

    bookList.appendChild(card);
  });
}

exibirLivros(livros);

/* === PESQUISA === */
function pesquisar() {
  const termo = searchInput.value.toLowerCase().trim();

  const filtrados = livros.filter(livro =>
    livro.nome.toLowerCase().includes(termo) ||
    livro.autor.toLowerCase().includes(termo) ||
    livro.genero.toLowerCase().includes(termo)
  );

  exibirLivros(filtrados);
}

searchInput.addEventListener("input", pesquisar);
searchBtn.addEventListener("click", pesquisar);

/* === MODAL DINÂMICO === */
function criarModal() {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-btn">&times;</span>
      <div class="modal-body"></div>
    </div>
  `;
  document.body.appendChild(modal);
  return modal;
}

const modal = criarModal();
const modalContent = modal.querySelector(".modal-body");
const closeBtn = modal.querySelector(".close-btn");

closeBtn.addEventListener("click", () => modal.classList.remove("show"));
modal.addEventListener("click", e => {
  if (e.target === modal) modal.classList.remove("show");
});

/* === ABRIR MODAL DE LIVRO === */
function abrirModal(livro) {
  const status = livro.unidades > 0 
    ? `<p class="book-status available"><i class="fa-solid fa-circle-check"></i> Disponível (${livro.unidades} unidade${livro.unidades > 1 ? 's' : ''})</p>`
    : `<p class="book-status unavailable"><i class="fa-solid fa-circle-xmark"></i> Indisponível</p>`;

  modalContent.innerHTML = `
    <img src="${livro.ilustracao}" alt="Capa do livro ${livro.nome}">
    <h2>${livro.nome}</h2>
    <p><strong>Autor:</strong> ${livro.autor}</p>
    <p><strong>Editora:</strong> ${livro.editora}</p>
    <p><strong>Lançamento:</strong> ${livro.dataLancamento}</p>
    <p><strong>Gênero:</strong> ${livro.genero}</p>
    <p><strong>Linguagem:</strong> ${livro.linguagem}</p>
    ${status}
    <button id="emprestarBtn" class="btn"${livro.unidades === 0 ? "disabled" : ""}>
      ${livro.unidades === 0 ? "Indisponível" : "Adicionar aos meus empréstimos"}
    </button>
  `;

  const emprestarBtn = document.getElementById("emprestarBtn");
  emprestarBtn.addEventListener("click", () => {
    if (livro.unidades > 0) {
      if (!meusEmprestimos.some(l => l.id === livro.id)) {
        meusEmprestimos.push({ ...livro, devolvido: false });
        livro.unidades--; // Reduz a unidade disponível
        alert(`O livro "${livro.nome}" foi adicionado aos seus empréstimos!`);
      } else {
        alert("Você já adicionou este livro aos seus empréstimos!");
      }
      modal.classList.remove("show");
      exibirLivros(livros); // Atualiza lista de livros
    }
  });

  modal.classList.add("show");
}

/* === MODAL DE MEUS EMPRÉSTIMOS === */
emprestimosBtn.addEventListener("click", () => abrirModalEmprestimos());

function abrirModalEmprestimos() {
  modalContent.innerHTML = `<h2>Meus Empréstimos</h2>`;

  if (meusEmprestimos.length === 0) {
    modalContent.innerHTML += "<p>Nenhum livro emprestado ainda.</p>";
  } else {
    meusEmprestimos.forEach((livro, index) => {
      const status = livro.devolvido 
        ? "<span class='book-status available'>Devolvido ✅</span>"
        : "<span class='book-status unavailable'>Não devolvido ❌</span>";

      const livroDiv = document.createElement("div");
      livroDiv.classList.add("book-card");
      livroDiv.innerHTML = `
        <h3>${livro.nome}</h3>
        <p><strong>Autor:</strong> ${livro.autor}</p>
        ${status}
        <button class="devolverBtn" ${livro.devolvido ? "disabled" : ""}>Devolver</button>
      `;

      livroDiv.querySelector(".devolverBtn").addEventListener("click", () => {
        meusEmprestimos[index].devolvido = true;
        const livroOriginal = livros.find(l => l.id === livro.id);
        if (livroOriginal) livroOriginal.unidades++; // devolve ao estoque
        abrirModalEmprestimos(); // Atualiza modal
        exibirLivros(livros); // Atualiza lista de livros
      });

      modalContent.appendChild(livroDiv);
    });
  }

  modal.classList.add("show");
}
