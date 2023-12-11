import express  from "express";
import dotenv from 'dotenv';
import connectDB from "./db/connectDB.js";
import userRouter from "./routes/userRoute.js";



dotenv.config()
const app = express();
const PORT = process.env.PORT || 5000

//Express Middlewares
app.use(express.json());


//Routes
app.use('/users',userRouter)


//connection of mongodb
connectDB()

app.listen(PORT , ()=>{
    console.log(`listening on ${PORT}`);
}) 