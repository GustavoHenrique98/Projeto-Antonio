import mysqlConfig from "./mysqlconfig.js";
import mysql from "mysql2";
const conection = mysql.createConnection(mysqlConfig);

conection.connect(error=>{
    if(!error){
        console.log("Mysql conectado com sucesso!");
    }else{
        console.log(`ERROR! :${error.stack}`);
    }
})
export default conection;