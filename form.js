// Export a mutable binding so other modules can read updated `admin` state.
// Initialize `admin` from localStorage so the state persists across pages
export let admin = (localStorage.getItem('admin') === 'true');

// Attach the login handler to whichever element is used as the form on the page.
// Some pages use <form id="loginForm"> while others use <form id="formaction"> inside a wrapper div.
const loginForm = document.getElementById('loginForm') || document.getElementById('formaction');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); // impede o envio do form e recarregar a página

        // Pega os valores dos inputs
        const usuario = document.getElementById('usuario').value;
        const senha = document.getElementById('senha').value;

        // Valores esperados
        const usuarioEsperado = "admin";
        const senhaEsperada = "123";

        // Verifica se estão corretos
        if (usuario === usuarioEsperado && senha === senhaEsperada) {
            alert("Login como Admin");
            // Persist admin state so other pages (index.html) can read it
            admin = true;
            localStorage.setItem('admin', 'true');
            // Opcional: redirecionar para a página principal
            window.location.href = './index.html';
        } else {
            alert("Usuário ou senha incorretos!");
            admin = false;
            localStorage.setItem('admin', 'false');
        }
    });
}
