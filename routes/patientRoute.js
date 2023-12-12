import express from 'express';
import { createPatient, getPatient, updatePatient } from '../controllers/patientController.js';
const patientRouter = express.Router();

patientRouter.post('/create' , createPatient)
patientRouter.get('/getpatient' , getPatient)
patientRouter.put('/:id' , updatePatient)


export default patientRouter;