import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName:{
        type : String,
        required: true
    },
    lastName:{
        type : String,
        required: true
    },
    mobileNumber:{
        type : Number,
        required: true
    },
    email:{
        type : String,
        required: true,
        unique: true
    },
    setPassword:{
        type : String,
        required: true
    }
},{timespan: true});

const UserModel = mongoose.model('User' , userSchema)

export default UserModel