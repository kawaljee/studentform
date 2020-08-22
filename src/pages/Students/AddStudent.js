import React, {useState} from 'react'
import AddStudentForm from "./AddStudentForm";
import PageHeader from "../../components/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper,makeStyles} from '@material-ui/core';
import Header from '../../components/Header';
import * as studentService from "../../services/studentService";
import {  useDispatch } from 'react-redux';
import * as Action from '../../store/action/studentAction';
 import Alert from '@material-ui/lab/Alert';


const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    

}))



export default function Students() {
    const dispatch = useDispatch();
    const [createdStudent, setCreatedStudent] =useState(false);
    const [refresher, setRefresher] = useState(false);
  
    const classes = useStyles();
    const addOrEdit = (student, resetForm) => {
           
            student['id'] = studentService.generateStudentId()
            dispatch(Action.createStudent(student));
            setCreatedStudent(true);
        
          
        
            
        resetForm()
        setRefresher(!refresher);
        
    }
    const showSuccess = () => (
        <div style={{ display: createdStudent ? '' : 'none' }}>
          
            <Alert severity="success">Student Registered Successfully!!</Alert>
        </div>
    );

    return (
        <>
 
        <Header/>
      
            <PageHeader
                title="Student Registration"
                subTitle="Student registration form design with validation"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />
            {showSuccess()}
            <Paper className={classes.pageContent}>
                <AddStudentForm 
                 recordForEdit={null}
                 addOrEdit={addOrEdit} />
            </Paper>
        </>
    )
}
