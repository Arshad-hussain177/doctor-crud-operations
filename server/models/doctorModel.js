import mongoose from "mongoose";

const doctorSchema= new mongoose.Schema(
    {
        id:{
            type:String,
            required:true,
            primary:true
        },
        name:{
            type:String,
            required:true
        },
        specialization:{
            type:String,
            required:true
        },
        Phone_No :{
            type:Number,
            required:true
        },
        Location:{
            type:String,
            required:true
        },
        hospital:{
            type:String,
            required:true
        },
        
        
    },{

        timestamps:true
    }
)


const Doctor=mongoose.model("Doctor",doctorSchema);

export default Doctor;