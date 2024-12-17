/*const http = require("http");
const server = http.createServer((req,res) => {
    if(req.method === 'GET'&& req.url === '/arsh'){
        res.writeHead(200,{'content-Type':'text/plain'})
        res.end("Hello Everyone!!!");
    }else{
        res.writeHead(404,{'content-type':'text/plain'})
        res.end("Not Found");
    }
});

server.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000")
})**/


/**import express from 'express';
const express= require("express");
const app = express();
const PORT = 3000;

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/views/index.html");

})
app.listen(PORT,()=>{
    console.log(`server is Running on http://localhost:${PORT}`)
})
app.use(express.static(__dirname+"/views"));**/

import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import path from 'path';

import{fileURLToPath} from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT;

// app.get("/",(req,res)=>{
//     res.sendFile(path.join(__dirname,"views","index.html"))
// })

app.get('/arshad',(req,res)=>{
    res.json({"message":"This is arshad"})
})
app.use((req,res,next)=>{
    const secretcode =req.query.secret;
    if(secretcode==='1234'){
        req.isAuthorized=true;
        
    }
    else{
        req.isAuthorized=false;
    }
    next();
});

app.get("/auth",(req,res)=>{
    if(req.isAuthorized){
        // res.send("You are authorized");
        res.sendFile(path.join(__dirname,"views","index.html"))
    }
    else{
        res.send("Unauthorized");
    }

})
app.use(express.static(path.join(__dirname,"views")))

app.post("/name",()=>{
    const fName = req.body.firstname;
    const laName =req.body.secondName;
    const fullNmae= fName+laName;
    res.json({name:});
})
app.use(express.static('public'));
app.listen(PORT,()=>(console.log(`Server is running on http://localhost:${PORT}`)))