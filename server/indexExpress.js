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
import path from 'path';

import{fileURLToPath} from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = 8000;

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"views","index.html"))
})

app.use(express.static(path.join(__dirname,"views")))

app.listen(PORT,()=>(console.log(`Server is running on http://localhost:${PORT}`)))