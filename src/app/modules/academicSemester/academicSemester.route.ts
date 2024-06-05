import express from 'express';
import { AcademicSemesterControllers } from './academicSemester.controller';
import validatorMiddleWare from '../../middleWares/validateRequest';
import { AcademicSemesterValidation } from './academicSemester.validation';

const router = express.Router();

router.post('/create-academic-semester',
validatorMiddleWare(AcademicSemesterValidation.createAcademicSemesterValidationSchema),
AcademicSemesterControllers.createAcademicSemester);

router.get(
    '/:semesterId',
    AcademicSemesterControllers.getSingleAcademicSemester,
  );
  
  router.patch(
    '/:semesterId',
    validatorMiddleWare(AcademicSemesterValidation.updateAcademicSemesterValidationSchema),
    AcademicSemesterControllers.updateAcademicSemester,
  );
  
  router.get('/', AcademicSemesterControllers.getAllAcademicSemesters);

export const AcademicSemesterRoutes = router;
