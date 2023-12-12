import express  from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from "../backend/db/connectDB.js";
import patientRouter from '../backend/routes/patientRoute.js'

//connection of mongodb
connectDB()

dotenv.config()
const app = express();
const PORT = process.env.PORT || 5000

//Express Middlewares
app.use(express.json());
app.use(cors())


//Routes
app.use('/patient',patientRouter)


app.listen(PORT , ()=>{
    console.log(`listening on ${PORT}`);
}) 