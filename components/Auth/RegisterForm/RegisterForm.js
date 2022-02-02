import React, { useState } from 'react';
import {Form, Button} from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { registerApi } from '../../../api/user';

export default function RegisterForm(props) {
    const {showLoginForm} = props;
    const {loading, setLoading} = useState(true)

     const formik = useFormik({
         initialValues: initialValues(),
         validationSchema: Yup.object(validationSchema()),
         onSubmit: (formData) => {
          registerApi(formData);
         }
     })
     
  return (
     
        <Form className="login-form" onSubmit={formik.handleSubmit}>
         <Form.Input name="email" type="text" placeholder="Email" onChange={formik.handleChange} error={formik.errors.email}/>
         <Form.Input name="password" type="password" placeholder="Senha" onChange={formik.handleChange} error={formik.errors.password}/>
         <Form.Input name="name" type="text" placeholder="Nome" onChange={formik.handleChange} error={formik.errors.name}/> 
         <Form.Input name="lastname" type="text" placeholder="Apelido" onChange={formik.handleChange} error={formik.errors.lastname}/>        
         <div className="actions">
           <Button type="button" basic>
               Entrar
           </Button>
          <Button type="submit" className="submit" loading={loading}>
              Cadastrar
          </Button>
         </div>
     
     </Form>

  )
}

function initialValues() { 
    return{
       email: "",
       password: "",
       name: "",
       lastname: ""
    }
   
}

function validationSchema(){
 return {
     email: Yup.string().email(true),
     password: Yup.string().required(true),
     name: Yup.string().required(true),
     lastname: Yup.string().required(true)
 }
}