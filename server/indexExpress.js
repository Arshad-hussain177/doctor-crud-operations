/**import express from 'express';
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

});
app.use(express.static(path.join(__dirname,"views")))

app.post("/name",()=>{
    const fName = req.body.firstname;
    const laName =req.body.secondName;
    const fullNmae= fName+laName;
    res.json({name:fullNmae});
})
app.use(express.static('public'));
app.listen(PORT,()=>(console.log(`Server is running on http://localhost:${PORT}`)))**/


//Post request body-parser00
import express from'express';
import bodyParser from 'body-parser';
import  path from'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const app=express();
const PORT=process.env.port;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.post("/name",(req,res)=>{
    const fName=req.body.firstName;
    const lName=req.body.lastName;
    const fullName=fName+lName;
    res.json({"name":fullName});
})

app.listen(PORT,()=>{
    console.log(`Server running at port http://localhost:${PORT}`)

})