import { useFormik } from "formik";
import * as Yup from 'yup'

import Button from "../Button/Button";
import Input from "../Input/Input";
import {  EmployeeFormComponent, Title } from "./styles";
import { EmployeeFormValue } from "./types";

function EmployeeForm() {

    const schema = Yup.object().shape({
        fullName: Yup.string()
            .required('Field Full Name is required')
            .max(50, 'Max 50 symbols')
            .min(5, 'Min 5 symbols'),
        age: Yup.number()
            // .typeError(' Field must be a number')
            .required('Field Age is required')
            .max(80, 'Max 80 years')
            .min(18, 'Min 18 years'),
        acceptTerms: Yup.boolean()
        .isTrue('You must accept the terms and conditions')
       
    })
    const formik = useFormik({
        initialValues: {
            fullName: '',
            age: 0,
            acceptTerms: false
        } as EmployeeFormValue,
        validationSchema: schema,
        validateOnChange: false,
        onSubmit: (values: EmployeeFormValue) => { console.table(values) }
    })
    console.log(formik);

    return (
        <EmployeeFormComponent onSubmit={formik.handleSubmit}>
            <Title>Employee Form</Title>
            <Input
                name="fullName"
                label="Full Name *"
                id="fullNameId"
                placeholder="Enter your Full Name"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                error={formik.errors.fullName}
                
            />
            <Input
                name="age"
                label="Age *"
                id="ageId"
                placeholder="Enter your age"
                value={formik.values.age}
                onChange={formik.handleChange}
                error={formik.errors.age}
                type="number"

            />
            <Input
                type="checkbox"
                name="acceptTerms"
                id="acceptTermsId"
                label="I accept the terms and conditions"
                checked={formik.values.acceptTerms}
                onChange={formik.handleChange}
                error={formik.errors.acceptTerms}
    
            />

            <Button name='Create' />



        </EmployeeFormComponent>
    )
}
export default EmployeeForm