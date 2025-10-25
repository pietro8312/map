document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // impede o envio do form e recarregar a página

    // Pega os valores dos inputs
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    // Valores esperados
    const usuarioEsperado = "admin";
    const senhaEsperada = "123";
    
    // Verifica se estão corretos
    if (usuario === usuarioEsperado && senha === senhaEsperada) {
        alert("Login realizado com sucesso!");
        // Aqui você pode redirecionar, ex.: window.location.href = "dashboard.html";
    } else {
        alert("Usuário ou senha incorretos!");
    }
});