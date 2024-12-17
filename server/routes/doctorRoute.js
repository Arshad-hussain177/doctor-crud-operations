import {createDoctor,getAll,getOne,updateData,deleteData} from "../controllers/doctorControllers.js";
import express from 'express';

const route =express.Router();

route.post("/create",createDoctor);
route.get("/all",getAll)
route.get("/getone/:id",getOne);
route.put("/update/:id",updateData);
route.delete("/delete/:id",deleteData)
export default route;