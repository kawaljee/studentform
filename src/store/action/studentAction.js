import { data } from "../../data/Dummy";


export const DELETE_STUDENT = 'DELETE_STUDENT';
export const CREATE_STUDENT = 'CREATE_STUDENT';
export const UPDATE_STUDENT = 'UPDATE_STUDENT';
export const SET_STUDENT = 'SET_STUDENT';
export const fetchStudents = () => {
   
  return async (dispatch, getState) => {
        dispatch({
          type: SET_STUDENT
  
        });
   
  };
};

export const deleteStudent = (student) => {
  return async (dispatch, getState) => {
    dispatch({ type: DELETE_STUDENT, student });
  };
};

export const createStudent = (data) => {
  return async (dispatch, getState) => {
     
        dispatch({
          type: CREATE_STUDENT,
          studentData : data
        });
  };
};
export const updateStudent = (data) => {
  return async (dispatch, getState) => {
    dispatch({
      type: UPDATE_STUDENT,
      studentData : data
    });
};
};
