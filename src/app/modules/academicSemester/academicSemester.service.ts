import { TAcademicSemester } from "./academicSemester.interface";
import { AcademicSemester } from "./acedemicSemester.model";

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
    // save academic semester into database
    const result = await AcademicSemester.create(payload);
    return result;
}

export const AcademicSemesterServices = {
    createAcademicSemesterIntoDB,
}