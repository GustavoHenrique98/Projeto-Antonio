function getDOM(elemento) {
    return document.getElementById(elemento);
}

const formCadastro = {
    registro: getDOM('formRegistro'),
    REG__username: getDOM('REG__username'),
    REG__password: getDOM('REG__password'),
    btn__registro: getDOM('btn__registro')
}

formCadastro.registro.addEventListener('submit', async (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Acessa os valores dos campos de entrada
    const username = formCadastro.REG__username.value;
    const password = formCadastro.REG__password.value;

    try {
        // Envia a requisição POST com os dados do formulário
        const response = await axios.post('http://localhost:3000/registro/cadastroUsuario', {
            username: username,
            password: password
        });

        // Exibe a resposta do servidor
        console.log(response)
    } catch (error) {
        // Registra o erro no console e exibe uma mensagem de erro
        console.error('Erro ao cadastrar:', error);
        alert('Erro ao cadastrar');
    }
});

