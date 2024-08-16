import site from "./elements.js";


const username = localStorage.getItem('username');

// Verificar se há um nome de usuário armazenado
if (username) {
    site.painel.user__painel.textContent = username;
} else {
    alert("Não tem nenhum usuário com esse nome!!!");
}