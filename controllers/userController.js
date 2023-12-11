
import UserModel from "../models/userModel.js";
import status from 'http-status'

export const getUser = async(req,res)=>{
    try {
        const users = await UserModel.find()
        console.log(users);

        if(!users) return res.status(404).json({
            success: false,
            message: "There Is No Users..."
        })

        res.status(status.OK).json({
            success: true,
            users
        })
    } catch (error) {
        res.status(status.BAD_REQUEST).json({
            success: false,
            message : "Error While Displaying Users...",
        })
    }
}


export const createUser = async(req,res)=>{
    try {
        const {firstName , lastName, mobileNumber ,email, setPassword} = req.body
        const user = await UserModel.create({
            firstName , 
            lastName, 
            mobileNumber ,
            email, 
            setPassword
        })
        res.status(status.CREATED).json({
            success: true,
            message : "User created successfully",
            user
        })
    } catch (error) {
        res.status(status.BAD_REQUEST).json({
            success: false,
            message : "Error While Creating User...",
            error
        })
    }
}