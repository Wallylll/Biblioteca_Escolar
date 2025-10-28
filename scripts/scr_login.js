import { usersArray } from "./database/scr_users.js";

let usuarioLogado = null; // Variável global para armazenar o usuário logado
const modalSpace = document.querySelector(".modalSpace");
const loginBtn = document.querySelector(".login");

// === MODAL DE LOGIN ===
const loginHTML = `
  <div class="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Entrar na sua conta</h5>
          <button type="button" class="close" aria-label="Fechar">&times;</button>
        </div>
        <div class="modal-body">
          <form class="login-form">
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Digite seu email" required>

            <label for="senha">Senha</label>
            <div class="password-field">
              <input type="password" id="senha" placeholder="Digite sua senha" required>
              <button type="button" id="togglePassword" aria-label="Mostrar senha">
                <i class="fa-solid fa-eye"></i>
              </button>
            </div>

            <div class="form-buttons">
              <button type="submit" class="btn btn-primary">Entrar</button>
              <button type="button" class="btn btn-secondary">Criar conta</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
`;

// === FUNÇÃO PARA MOSTRAR MODAL DE LOGIN ===
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  showLogin();
});

function showLogin() {
  modalSpace.innerHTML = loginHTML;
  modalSpace.style.display = "flex";

  const modal = document.querySelector(".modal");
  const btn_close = document.querySelector(".close");
  const togglePassword = document.querySelector("#togglePassword");
  const form = document.querySelector(".login-form");

  btn_close.addEventListener("click", closeLogin);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeLogin();
  });

  // Mostrar/ocultar senha
  togglePassword.addEventListener("click", () => {
    const senhaInput = document.querySelector("#senha");
    const icon = togglePassword.querySelector("i");
    const isPassword = senhaInput.type === "password";
    senhaInput.type = isPassword ? "text" : "password";
    icon.classList.toggle("fa-eye");
    icon.classList.toggle("fa-eye-slash");
  });

  // Verificar login ao enviar formulário
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    verificarLogin();
  });
}

function closeLogin() {
  modalSpace.style.display = "none";
  modalSpace.innerHTML = "";
}

// === FUNÇÃO DE VERIFICAÇÃO DE LOGIN ===
function verificarLogin() {
  const email = document.querySelector("#email").value.trim();
  const senha = document.querySelector("#senha").value.trim();

  const userEncontrado = usersArray.find(
    (u) => u.email === email && u.password === senha
  );

  if (userEncontrado) {
    usuarioLogado = userEncontrado;
    closeLogin();
    atualizarHeaderUsuario();
  } else {
    alert("Email ou senha incorretos. Tente novamente.");
  }
}

// === ATUALIZA O HEADER PARA MOSTRAR O USUÁRIO LOGADO ===
function atualizarHeaderUsuario() {
  const nav = document.querySelector("nav");

  // Remove o botão "Login"
  const loginLink = nav.querySelector(".login");
  if (loginLink) loginLink.remove();

  // Cria o ícone do usuário
  const userIcon = document.createElement("a");
  userIcon.href = "#";
  userIcon.classList.add("user-icon");
  userIcon.innerHTML = `<i class="fa-solid fa-user"></i>`;
  nav.appendChild(userIcon);

  // Evento para abrir modal de informações
  userIcon.addEventListener("click", (e) => {
    e.preventDefault();
    mostrarInfoUsuario();
  });
}

// === MOSTRAR MODAL COM INFORMAÇÕES DO USUÁRIO ===
function mostrarInfoUsuario() {
  if (!usuarioLogado) return;

  modalSpace.innerHTML = `
    <div class="modal">
      <div class="modal-dialog user-info">
        <div class="modal-content">
          <div class="modal-header">
            <h5>Informações do Usuário</h5>
            <button type="button" class="close" aria-label="Fechar">&times;</button>
          </div>
          <div class="modal-body">
            <p><strong>Nome:</strong> ${usuarioLogado.name}</p>
            <p><strong>Email:</strong> ${usuarioLogado.email}</p>
            <p><strong>Livros atuais:</strong> ${usuarioLogado.livrosAtuais.length}</p>
            <p><strong>Total de empréstimos:</strong> ${usuarioLogado.totalEmprestimos}</p>
            <p><strong>Histórico:</strong></p>
            <ul>
              ${
                usuarioLogado.historico.length > 0
                  ? usuarioLogado.historico
                      .map((livro) => `<li>${livro}</li>`)
                      .join("")
                  : "<li>Nenhum histórico encontrado.</li>"
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;

  modalSpace.style.display = "flex";

  const modal = document.querySelector(".modal");
  const btn_close = document.querySelector(".close");
  btn_close.addEventListener("click", closeLogin);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeLogin();
  });
}
