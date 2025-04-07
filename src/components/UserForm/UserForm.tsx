import { useFormik } from "formik";
import * as Yup from 'yup'

import Button from "../Button/Button";
import Input from "../Input/Input";
import { Title, UserFormComponent, Checkbox, CheckboxContainer, CheckboxLabel, ErrorMessage, LoginMessage } from "./styles";
import { UserFormValues } from "./types";
import { useEffect, useState } from "react";



function UserForm() {
    const [loginSuccess, setLoginSuccess] = useState(false);

    const schema = Yup.object().shape({
        code: Yup.number().typeError('Тип значения - число')
            .required('Поле Validation code является обязательным')
            .test('length', ' Validation code должен быть 6 символoв', (value) => String(value).length === 6),
        agreement: Yup.boolean().oneOf([true], 'Accept agreement'),

    })

    const formik = useFormik({
        initialValues: {
            code: '',
            agreement: false
        } as UserFormValues,
        validationSchema: schema,
        validateOnChange: false,
        onSubmit: (values: UserFormValues) => {
            console.table(values);
            setLoginSuccess(true);
        }

    })

    console.log(formik);

    useEffect(() => {
        setLoginSuccess(false);
    }, [formik.values]);


    return (
        <UserFormComponent onSubmit={formik.handleSubmit}>
            <Title> User form </Title>
            <Input
                name='code'
                label='Validation code *'
                id='code_id'
                placeholder="Enter your validation code"
                type="number"
                value={formik.values.code}
                onChange={formik.handleChange}
                error={formik.errors.code}
            />
            <CheckboxContainer>
                <Checkbox
                    name='agreement'
                    type='checkbox'
                    id='agree_id'
                    checked={formik.values.agreement}
                    onChange={formik.handleChange}
                />
                <CheckboxLabel htmlFor='agree_id'>
                    Privacy and policy
                </CheckboxLabel>
            </CheckboxContainer>
            <ErrorMessage>{formik.errors.agreement}</ErrorMessage>
            <Button name='Login'
                type="submit" />
            {loginSuccess && <LoginMessage>Вы успешно вошли</LoginMessage>}
        </UserFormComponent >
    )
}
export default UserForm;