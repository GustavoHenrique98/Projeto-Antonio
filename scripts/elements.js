function getDOM(elemento){
    return document.querySelector(elemento);
}

const site = {
    formLogin:{
        login:getDOM('#formLogin'),
        username:getDOM('#username'),
        password:getDOM('#password'),
        btn__login:getDOM('#btn__login')
    },
    formCadastro:{
        cadastro:getDOM('#formCadastro'),
        REG__username:getDOM('#REG__username'),
        REG__password:getDOM('#REG__password'),
        btn__cadastro:getDOM('#btn__cadastro')
    },
    painel:{
        topo__painel:getDOM('#topo__painel'),
        user__painel:getDOM('#user_painel')
    }
}


export default site;