
import PatientModel from "../models/patientModel.js";
import status from 'http-status'

export const getPatient = async (req, res) => {
    try {
        const result = await PatientModel.find()
        // console.log(result);

        if (!result) return res.status(404).json({
            success: false,
            message: "There Is No Users..."
        })

        return res.status(status.OK).json({
            success: true,
            result
        })
    } catch (error) {
        return res.status(status.BAD_REQUEST).json({
            success: false,
            message: "Error While Displaying Users...",
            error: error.message
        })
    }
}


export const createPatient = async (req, res) => {
    try {
        console.log(req.body);
        const patientData = await PatientModel.create(req.body)
        // console.log(patientData);
        res.status(status.CREATED).json({
            success: true,
            message: "Patient created successfully",
            patientData
        })

        
    } catch (error) {
        return res.status(status.BAD_REQUEST).json({
            success: false,
            message: "Error While Creating Patient...",
            error: error.message + error.name
        })
        console.log(error);
    }
}

export const updatePatient = async (req, res) => {
    try {
        const id = req.params.id
        console.log(id);

        const patient = await PatientModel.findByIdAndUpdate(id, req.body)

        if (!patient) return res.status(status.BAD_REQUEST).json({
            success: false,
            message: "Invalid ID",
        })

        patient.save()
        return res.status(status.OK).json({
            success: true,
            message: "Patient record updated successfully",
            patient
        })

    } catch (error) {
        return res.status(status.BAD_REQUEST).json({
            success: false,
            message: "Error While Updating Patient...",
            error: error.message
        })
    }
}


export const deletePatient = async (req, res) => {

}