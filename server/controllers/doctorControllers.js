import Doctor from "../models/doctorModel.js"

export const createDoctor=async (req,res)=>{
    try{
        const doctorData=new Doctor(req.body);
        if(!doctorData){
            res.status(400).json({msg:"User Not Found"});
        }
        await doctorData.save();
        res.status(200).json({msg:"User data saved successfully."})
    }
    catch(error){
        res.status(500).json({err:error})
    }
}
export const getAll = async(req,res)=>{
        try{
            const doctorData = await Doctor.find();
            if(!doctorData){res.status(404).json({msg:"User Not Found"});
            }
            res.status(200).json(doctorData);
        }
    
        catch(error){
            res.status(500).json({err:error})
        }
}

export const getOne = async (req,res)=>{
    try{
        const id = req.params.id;
        const doctorData = await Doctor.findById(id);
        if(!doctorData){
            res.status(404).json({msg:"User doesnt exist..... warsi give right id u dumb kid."});
        }
        res.status(200).json(doctorData);
    }
    catch(error){
        res.status(500).json({err:error});
    }
}

export const updateData = async(req,res)=>{
    try{
        const id = req.params.id;
        const doctorData = await Doctor.findByIdAndUpdate(id,req.body,{new:true});
        if(!doctorData){
            res.status(404).json({msg:"User doesnt exist...."});
        }
        res.status(200).json(doctorData);
    }
    catch(error){
        res.status(500).json({err:error});
    }
    
}

export const deleteData= async(req,res)=>{
    try{
        const id = req.params.id;
        const doctorData = await Doctor.findByIdAndDelete(id);
        if(!doctorData){
            res.status(404).json({msg:"doctor not found"});
        }
        res.status(200).json(doctorData);
    }
    catch(error){
        res.status(500).json({err:error});
    }
}