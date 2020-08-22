import Student from '../../models/Student'
import { data } from "../../data/Dummy";
import * as studentService from "../../services/studentService"
import {
    DELETE_STUDENT,
    CREATE_STUDENT,
    UPDATE_STUDENT,
    SET_STUDENT
  } from '../action/studentAction';
  const temp =data;
  const countries = studentService.getCountryCollection();
  temp.map(x => ({
    ...x,
    'countryName': countries[x.country - 1].title
}))
console.log("dataaaaaaaaaaa",data)
  const initialState = {
    userStudents: temp
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case SET_STUDENT:
        return {
          ...state
        };
      case CREATE_STUDENT:
        const newStudent = new Student(
          action.studentData.id,
          action.studentData.firstName,
          action.studentData.lastName,
          action.studentData.fatherName,
          action.studentData.email,
          action.studentData.address,
          action.studentData.mobile,
          action.studentData.gender,
          action.studentData.dob,
          action.studentData.photo,
          action.studentData.country,
          
        );
        return {
          ...state,
          userStudents: state.userStudents.concat(newStudent)
        };
      case UPDATE_STUDENT:
        const studentIndex = state.userStudents.findIndex(
          stud => stud.id === action.studentData.id
        );
        const updatedStudent = new Student(
          action.studentData.id,
          action.studentData.firstName,
          action.studentData.lastName,
          action.studentData.fatherName,
          action.studentData.email,
          action.studentData.address,
          action.studentData.mobile,
          action.studentData.gender,
          action.studentData.dob,
          action.studentData.photo,
          action.studentData.country,
        );
        const updatedUserStudent = [...state.userStudents];
        updatedUserStudent[studentIndex] = updatedStudent;
        return {
          ...state,
          userStudents: updatedUserStudent
        };
      case DELETE_STUDENT:

       return {
        ...state,
        userStudents: state.userStudents.filter(
          stud => stud.id !== action.student.id
        )
      };
       
    }
    return state;
  };
  