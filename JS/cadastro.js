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

    axios.post('http://localhost:3000/registro/cadastroUsuario',{
        username,
        password
    }).then(response =>{
        console.log(response.data)
        alert('Funcionou porra')
    })
  
});

