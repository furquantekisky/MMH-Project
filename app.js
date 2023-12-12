import express  from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from "./db/connectDB.js";
import patientRouter from './routes/patientRoute.js'
import morgan from "morgan";

//connection of mongodb
connectDB()

morgan('tiny')

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