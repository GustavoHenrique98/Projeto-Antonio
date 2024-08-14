import mysql from 'mysql2';
import mysql__config from './mysqlconfig.js';

const conection = mysql.createConnection(mysql__config);

conection.connect(error=>{
    if(error){
        console.log(`Erro! :${error.stack}`);
    }else{
        console.log('MySql conectado com sucesso!!');
    }
})


export default conection;