import express from "express"


import { pool } from "./db.js";
import { PORT } from "./config.js";

const app= express()



app.get('/', (req, res)=>{
   console.log("Welcome to server")

        const result=  pool.query(`SELECT * FROM users`, function(error,result){
            console.log(error)
            res.json(result)
            
        });

})

app.get('/create', (req, res)=>{
    const result=  pool.query(`INSERT INTO users(name) VALUES ("Jhon") `, function(error,result){
        console.log(result[0])

        res.json(result)
    });
})

app.get('/ping', async (req, res)=>{

    /*
    const result=  await pool.query(`SELECT "hello word" as RESULT`).result;
    console.log(result)
    */
    const result=  pool.query(`SELECT "hello word" as RESULT`, function(error,result){
        console.log(result[0])

        res.send(result[0])
    });

    

})


app.listen(PORT)
console.log("serve on port ", PORT)
