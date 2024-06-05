import config from "../../config";
import { TAcademicSemester } from "../academicSemester/academicSemester.interface";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  //create a user object
  const userData : Partial<TUser> = {}

  //handle case if password is not given, provide a default password

  userData.password = password || (config.default_pass as string);

  //set student role
  userData.role = 'student' 

  //set auto generated student id

  const generateStudentId = (payload: TAcademicSemester) => {

  }

  //set manually generated id

  userData.id = generateStudentId();
  
  //create a user
    const newUser = await User.create(userData);

    //create a student

    if(Object.keys(newUser).length){
      //set id, _id as user
      studentData.id = newUser.id;
      studentData.user = newUser._id;  //reference _id

      const newStudent = await Student.create(studentData);

      return newStudent
    }
  };

  export const UserServices = {
    createStudentIntoDB,
  }