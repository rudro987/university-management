import express from 'express';
import validatorMiddleWare from '../../middleWares/validateRequest';
import { AcademicFacultyControllers } from './academicFaculty.controller';
import { AcademicFacultyValidation } from './academicFaculty.validation';


const router = express.Router();

router.post('/create-academic-faculty',
validatorMiddleWare(AcademicFacultyValidation.createAcademicFacultyValidationSchema),
AcademicFacultyControllers.createAcademicFaculty);

router.get(
    '/:facultyId',
    AcademicFacultyControllers.getSingleAcademicFaculty,
  );
  
  router.patch(
    '/:facultyId',
    validatorMiddleWare(AcademicFacultyValidation.updateAcademicFacultyValidationSchema),
    AcademicFacultyControllers.updateAcademicFaculty,
  );
  
  router.get('/', AcademicFacultyControllers.getAllAcademicFaculties);

export const AcademicFacultyRoutes = router;
