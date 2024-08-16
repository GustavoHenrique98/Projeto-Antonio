import site from "./elements.js";

site.formCadastro.cadastro.addEventListener('submit', (e)=>{
    e.preventDefault();
    const username = site.formCadastro.REG__username.value;
    const password = site.formCadastro.REG__password.value;
    axios.post('http://localhost:3000/usuarios/cadastro',{
        username,
        password
    })
    .then(response=>{
        if(response.status == 200){
            return response.data
        }
    }).then(dados=>{
        
    })
})