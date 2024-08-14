//Dependecies
import express from 'express';
const app = express();
import cors from 'cors';
import morgan from 'morgan';
import { fileURLToPath } from 'url';
import path from 'path';
import conection from './database/database.js';

//Dependecies2
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Middlewares
app.use(morgan('Metodo :method |  URL: :url | Status: :status '));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const api_available = true;
app.use((req,res,next)=>{
    if(api_available){
        next()
    }else{
        res.send('API EM MANUTENÇÃO SORRY!!');
    }
});
app.listen(3000,()=>{
    console.log(`Servidor rodando em http://localhost:3000`)
})

//Raíz
app.get('/', (req, res) => {
    res.send('<h1>Olá</h1>')
})


//Rotas de login e cadastro
app.get('/login',(req,res)=>{
    res.status(200).sendFile('index.html', { root: path.join(__dirname, 'views') });
})
app.get('/registro',(req,res)=>{
    res.status(200).sendFile('registro.html', { root: path.join(__dirname, 'views') });
})


//Rotas para carregar o CSS
app.get('/login/css',(req,res)=>{
    res.status(200).sendFile('style.css', { root: path.join(__dirname, 'views') });
})

app.get('/js',(req,res)=>{
    res.status(200).sendFile('cadastro.js', { root: path.join(__dirname, 'JS') });
})




//Create
app.post('/registro/cadastroUsuario',(req,res)=>{
    const post__data = req.body
    const username = post__data.username;
    const password = post__data.password;
    
    //Controller
    if(Object.keys(post__data).length ===0){
        res.send('Dados vazios')
        return
    }

    if(!(username && password)){
        res.send('ERROR! DADOS INVÁLIDOS!!');
        return;
    }
    
    //Services
    conection.query('INSERT INTO usuarios (username,password) VALUES(?,?)',[username,password],(err,rows)=>{
        if(!err){
            res.send('Dados inseridos com sucesso!!!');
        }else{
            res.send(`ERROR!: ${err.message}`);
        }
    });


})



//Read
app.get('/usuarios',(req,res)=>{
    conection.query('SELECT * FROM usuarios',(err,rows)=>{
       if(!err){
        res.json(rows);
       }else{
        res.send(`ERROR!! ${err.message}`);
       }
    });
});

app.get('/usuarios/:id',(req,res)=>{
    const id = req.params.id;
    conection.query('SELECT * FROM usuarios WHERE ID = ?',[id],(err,rows)=>{
       if(!err){
            if(rows.affectedRows>0){
                res.json(rows)
            }else{
                res.send(`Usuário com id inválido`);
            }
       }else{
        res.send(`ERROR!! ${err.message}`);
       }
    });
});

//Rotas undefined
app.use((req,res)=>{
    res.status(404).send('Rota não encontrada');
})