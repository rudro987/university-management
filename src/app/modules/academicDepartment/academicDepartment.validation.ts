import { z } from 'zod';

const createAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Academic Department name must be string',
      required_error: 'Name is required',
    }),
    AcademicFaculty: z.string({
      invalid_type_error: 'Academic faculty must be string',
      required_error: 'Academic faculty is required',
    }),
  }),
});

const updateAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Academic Department name must be string',
    }).optional(),
    AcademicFaculty: z.string({
      invalid_type_error: 'Academic faculty must be string',
    }).optional(),
  }),
});

export const AcademicDepartmentValidation = {
  createAcademicDepartmentValidationSchema,
  updateAcademicDepartmentValidationSchema,
};
