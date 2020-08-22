import React, {useState} from 'react'
import AddStudentForm from "./AddStudentForm";
import PageHeader from "../../components/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper,makeStyles } from '@material-ui/core';
import Header from '../../components/Header';
import * as studentService from "../../services/studentService";
import {  useDispatch } from 'react-redux';
import * as Action from '../../store/action/studentAction';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    

}))



export default function Students() {
    const dispatch = useDispatch();
    //const students = useSelector(state => state.student.userStudents);
    const [refresher, setRefresher] = useState(false);
   // const [records, setRecords] = useState(students);
    const classes = useStyles();
    const addOrEdit = (student, resetForm) => {
        console.log("inside addoredit of addstudent", student)       
            student['id'] = studentService.generateStudentId()
            dispatch(Action.createStudent(student));
        
          
        
            
        resetForm()
        setRefresher(!refresher);
        
    }

    return (
        <>
        <Header/>
            <PageHeader
                title="Student Registration"
                subTitle="Student registration form design with validation"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />
            <Paper className={classes.pageContent}>
                <AddStudentForm 
                 recordForEdit={null}
                 addOrEdit={addOrEdit} />
            </Paper>
        </>
    )
}
