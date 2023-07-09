import mysql from 'mysql';
import dotenv from 'dotenv';
dotenv.config();


const connection=mysql.createConnection(
    {
    user:process.env.MYSQL_USER,    
    password:process.env.MYSQL_ROOT_PASSWORD,
    database:process.env.MYSQL_DATABASE,
    host:process.env.MYSQL_HOST,
    
    
}


) 

export default connection ;
