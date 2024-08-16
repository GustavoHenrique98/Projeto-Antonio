import site from "./elements.js";

site.formLogin.login.addEventListener('submit', (e)=>{
    e.preventDefault();
    axios.get('http://localhost:3000/usuarios')
    .then(response=>{
        if(response.status ==200){
            return response.data;
        }
    }).then(dados=>{
        const username = site.formLogin.username.value;
        const password = site.formLogin.password.value;
        let userAutentication = false;
        console.log(username,password)
        for(let i=0;i<dados.length;i++){
            if(username === dados[i].username && password === dados[i].password){
                alert(`Seja bem vindo ${dados[i].username}!!!`);
                userAutentication = true;
                localStorage.setItem('username', dados[i].username);
                window.location.href="../views/painel.html";
                break
            }
        }

        if(!userAutentication){
           alert("Usuarios não existente!");        
        }

    })
});