const modalSpace = document.querySelector(".modalSpace");

const login = `
    <div class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Título do modal</h5>
                    <span aria-hidden="true">
                         <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">X</button>
                    </span>
                </div>
                <div class="modal-body">
                    <p>Texto do corpo do modal, é aqui.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                    <button type="button" class="btn btn-primary">Entrar</button>
                </div>
            </div>
        </div>
    </div>
`;

const btn_show = document.querySelector("#show");

btn_show.addEventListener("click", () => {
    showLogin();
});

function showLogin() {
    modalSpace.innerHTML = login;

    // Agora o botão existe no DOM
    const btn_close = document.querySelector(".close");
    const btn_secondary = document.querySelector(".btn-secondary");

    btn_close.addEventListener("click", closeLogin);
    btn_secondary.addEventListener("click", closeLogin);

    // showModal só funciona em <dialog>
    // se for <div>, use style.display
    modalSpace.style.display = "block";
}

function closeLogin() {
    modalSpace.style.display = "none";
}