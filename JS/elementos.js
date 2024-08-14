export function getDOM(elemento){
    return document.getElementById(elemento);
}

export const formLogin ={
    login:getDOM('formLogin'),
    username:getDOM('username'),
    password:getDOM('password'),
    btn__login:getDOM('btn__login')
}

export const formCadastro = {
    registro:getDOM('formRegistro'),
    REG__username:getDOM('REG__username'),
    REG__password:getDOM('REG__password'),
    btn__registro:getDOM('btn__registro')
}


