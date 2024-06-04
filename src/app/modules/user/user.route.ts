import express from 'express';
import { UserControllers } from './user.controller';
import { studentValidations } from '../student/student.validation';
import validatorMiddleWare from '../../middleWares/validateRequest';

const router = express.Router();

router.post(
  '/create-student',
  validatorMiddleWare(studentValidations.createStudentValidationSchema),
  UserControllers.createStudent,
);

export const UserRoutes = router;
