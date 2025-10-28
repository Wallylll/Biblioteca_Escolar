const modalSpace = document.querySelector(".modalSpace");

const login = `
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

const btn_show = document.querySelector("#show");

btn_show.addEventListener("click", showLogin);

function showLogin() {
    modalSpace.innerHTML = login;

    const modal = document.querySelector(".modal");
    const btn_close = document.querySelector(".close");
    const togglePassword = document.querySelector("#togglePassword");

    modalSpace.style.display = "flex";

    // Fechar modal ao clicar no X ou fora
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
}

function closeLogin() {
    modalSpace.style.display = "none";
}

const btn_library = document.querySelector(".forLibrary");
btn_library.addEventListener("click", () => {
    window.location.href = "templates/library.html"
});
