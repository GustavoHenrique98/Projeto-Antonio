//Dependecias
import express from "express";
const app = express();
import cors from "cors";
import morgan from "morgan";
import conection from "./database/database.js";


//Middlewares
const API_AVAILABLE = true;
const API_VERSION = "1.0.1";

app.use((req,res,next)=>{
    if(API_AVAILABLE){
        next();
    }else{
        res.send('ERROR! API EM MANUTENÇÃO!')
    }
})

app.listen(3000,()=>{
    console.log('Servidor rodando em http://localhost:3000');
})

//Middlewares globais
app.use(morgan('Metodo: :method | URL : :url | Status: :status'))
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));




//Create
app.post("/usuarios/cadastro",(req,res)=>{
    const post__data = req.body;
    const username = post__data.username;
    const password = post__data.password;

    if(Object.keys(post__data).length===0){
        res.send("ERROR! DADOS VAZIOS!");
        return;
    }

    if(!(username || password)){
        res.send('DADOS INCOMPLETOS!');
        return;
    }

    conection.query('INSERT INTO Usuarios (username,password) VALUES(?,?)',[username,password],(err,rows)=>{
        if(!err){
            res.send("DADOS INSERIDOS COM SUCESSO! ");
        }else{
            res.send(`ERRRO!: ${err.message}`);
        }
    });


});


//READ

app.get('/usuarios',(req,res)=>{
    conection.query("SELECT * FROM Usuarios",(err,rows)=>{
        if(!err){
            res.send(rows);
        }else{
            res.send(err.message);
        }
    })
})



//404 Not found
app.use((req,res)=>{
    res.status(404).send('Rota não encontrada!');
})