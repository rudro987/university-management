import express from 'express';
import { StudentControllers } from './student.controller';
import validatorMiddleWare from '../../middleWares/validateRequest';
import { studentValidations } from './student.validation';


const router = express.Router();

router.get('/:studentId', StudentControllers.getSingleStudent);

router.patch('/:studentId', validatorMiddleWare(studentValidations.updateStudentValidationSchema), StudentControllers.updateStudent);

router.delete('/:studentId', StudentControllers.deleteStudent);

router.get('/', StudentControllers.getAllStudents);

export const StudentRoutes = router;
