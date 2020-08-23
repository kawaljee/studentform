import React from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../../components/controls/Controls";
import { useForm, Form } from '../../components/useForm';
import * as studentService from "../../services/studentService";
import ImageUploader from 'react-images-upload';

import {  useDispatch } from 'react-redux';



const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' },
]

const initialFValues = {
    id: 0,
    firstName: '',
    lastName: '',
    fatherName: '',
    photo: '',
    email: '',
    address: '',
    mobile: '',
    gender: 'male',
    dob: new Date(),
    country: ''
}

const  AddStudentForm = (props) => {

   

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('firstName' in fieldValues)
            temp.firstName = fieldValues.firstName ? "" : "This field is required."
        if ('lastName' in fieldValues)
            temp.lastName = fieldValues.lastName ? "" : "This field is required."
        if ('fatherName' in fieldValues)
            temp.fathername = fieldValues.fatherName ? "" : "This field is required."
        if ('address' in fieldValues)
            temp.address = fieldValues.address ? "" : "This field is required."
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        if ('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
        if ('country' in fieldValues)
            temp.country = fieldValues.country.length !== 0 ? "" : "This field is required."
        setErrors({
            ...temp
        })

        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }



    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

//     const onDrop= (e)=> {
       
        
     
//         setValues({ ...values, 'photo': picture });
    
// }

const onDrop = (e) => {
    if(e[0]){
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
       
        setValues({ ...values, 'photo': reader.result });
      
       
      }
    }
    reader.readAsDataURL(e[0])
}
  };

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
          
            values['id'] = studentService.generateStudentId()
            props.addOrEdit(values, resetForm)
            resetForm()
        }
    }
   

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={12}  sm={6} md={6} lg={6}>
                    <Controls.Input
                        name="firstName"
                        label="First Name"
                        value={values.firstName}
                        onChange={handleInputChange}
                        error={errors.firstName}
                    />
                    <Controls.Input
                        name="lastName"
                        label="Last Name"
                        value={values.lastName}
                        onChange={handleInputChange}
                        error={errors.lastName}
                    />
                    <Controls.Input
                        name="fatherName"
                        label="Father Name"
                        value={values.fatherName}
                        onChange={handleInputChange}
                        error={errors.fatherName}
                    />
                    <Controls.Input
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                    />
                    <Controls.Input
                        label="Mobile"
                        name="mobile"
                        value={values.mobile}
                        onChange={handleInputChange}
                        error={errors.mobile}
                    />
                    <Controls.Input
                        label="Address"
                        name="address"
                        value={values.address}
                        onChange={handleInputChange}
                    />

                </Grid>
                <Grid item xs={12}  sm={6} md={6} lg={6}>
                    <Controls.RadioGroup
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    />
                    <Controls.Select
                        name="country"
                        label="Country"
                        value={values.country}
                        onChange={handleInputChange}
                        options={studentService.getCountryCollection()}
                        error={errors.country}
                    />
                    <Controls.DatePicker
                        name="dob"
                        label="Date Of Birth"
                        value={values.dob}
                        onChange={handleInputChange}
                    />

                    <ImageUploader
                        withPreview={true}
                        accept={"accept=image/*"}
                        withIcon={true}
                        buttonText='Upload images'
                        onChange={onDrop}
                        imgExtension={['.jpg', '.gif', '.png', '.gif','.jpeg']}
                        maxFileSize={5242880}
                    />

                    <div>
                        <Controls.Button
                            type="submit"
                            text="Submit" />
                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm} />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}

export default AddStudentForm;