// const mysql = require("mysql2"); //เรียกใช้ mysql2 (link in database)
// const dbconfig = require("../config/db.config"); //เรียกตัว module จาก  db.config 
// require('dotenv').config()
// const connection = mysql.createConnection({ 



// connection.connect((error)=>{ //check error
//     if(error) console.log("MYsql connection " +error);//error : show error
//     else console.log("Successfully connected to database");//not error : show success that can connnect to database
// });
// module.exports = connection; //exprots เพื่อให้ file อื่นใช้ได้โดย require("ที่อยู่ไฟล์นี้")

// const mysql = require("mysql2");
// const dbConfig = require("../config/db.config.js");
// // Create a connection to the database
// const connection = mysql.createConnection({
// host: dbConfig.HOST,
// user: dbConfig.USER,
// password: dbConfig.PASSWORD,
// database: dbConfig.DB
// });
// // open the MySQL connection
 connection.connect(error => {
 if (error) console.log("MySQL connection: " + error);
 else console.log("Successfully connected to the database.");
 });
 module.exports = connection;

const mysql = require("mysql2");
require("dotenv").config()
const connection = mysql.createConnection(process.env.DATABASE_URL)