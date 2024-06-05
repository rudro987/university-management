import express from 'express';
import { AcademicSemesterControllers } from './academicSemester.controller';
import validatorMiddleWare from '../../middleWares/validateRequest';
import { AcademicSemesterValidation } from './academicSemester.validation';

const router = express.Router();

router.post('/create-academic-semester',
validatorMiddleWare(AcademicSemesterValidation.createAcademicSemesterValidationSchema),
AcademicSemesterControllers.createAcademicSemester);

export const AcademicSemesterRoutes = router;
