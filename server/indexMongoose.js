import express from 'express';
import bodyParser from 'body-parser';
// import path from 'path';
// import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// import Doctor from './models/doctorModel.js';
import route from './routes/doctorRoute.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const URL= process.env.MONGODB_URL;
console.log(URL);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(URL,{useNewUrlParser:true,useunifiedTopology:true})
.then(()=>{console.log("DB connected successfully");
    app.listen(PORT,()=>{
        console.log(`server is running  http://localhost:${PORT}`);
    });
})
.catch((err)=>{console.error("connection failed:",err)});

// app.use(express.static('public'));

// const createDoctor= async ()=>{
//     const doctor = new Doctor({
//          name:"arshad",
//          specialization:"Psychiatrist",
//          Phone_No:898656558,
//          Location:"Vadodara",
//          hospital:"city hospital"
//      })
//      const result=  await doctor.save();
//      console.log("Doctor is created",result);

//  }

// createDoctor();

app.use('/api',route);