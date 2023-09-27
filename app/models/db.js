const mysql = require("mysql2"); //เรียกใช้ mysql2 (link in database)
const dbconfig = require("../config/db.config"); //เรียกตัว module จาก  db.config 
require('dotenv').config()
const connection = mysql.createConnection({ //link เข้ากับ sql โดยใช้ข้อมูลจาก dbconfig.js
    host: process.env.TIDB_HOST, //Host from db.config
    user:  process.env.TIDB_USER, //user from db.config
    password: process.env.TIDB_PASSWORD, //password from db.config
    database: process.env.TIDB_DATABASE,// database from db.config
    port: process.env.TIDB_PORT,
    ssl: {
        minVersion: process.env.minVersion,
        rejectUnauthorized: process.env.TIDB_ENABLE_SSL,
      },
      supportBigNumbers: true,
      enableKeepAlive: true

});


connection.connect((error)=>{ //check error
    if(error) console.log("MYsql connection " +error);//error : show error
    else console.log("Successfully connected to database");//not error : show success that can connnect to database
});
module.exports = connection; //exprots เพื่อให้ file อื่นใช้ได้โดย require("ที่อยู่ไฟล์นี้")