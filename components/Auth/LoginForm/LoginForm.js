import React,{ useState } from "react";
import { Form, Button} from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

export default function LoginForm(props){
    const {showRegisterForm} = props;

    const formik = useFormik({
       initialValues: initialValues(),
       validationSchema: Yup.object(validationSchema()),
       onSubmit: (formData) => {
           console.log(formData);
       }
    })

  return(
      <Form className="login-form" onSubmit={formik.handleSubmit}>
          <Form.Input
            name="identifier"
            type="text"
            placeholder="Email" 
            onChange={formik.handleChange}
            error={formik.errors.identifier}
           />

          <Form.Input
            name="password"
            type="password"
            placeholder="Senha"
            onChange={formik.handleChange}
            error={formik.errors.password} 
           />


           <div className="actions">
              
              <div>
                  <Button className="submit" type="submit">
                      Logar
                  </Button>
                  <Button type="button">
                      Esqueceu a senha?
                  </Button>
              </div>

              <Button type="button" basic onClick={showRegisterForm}>
                  Cadastrar
              </Button>

           </div>
      </Form>
  )

}


function initialValues(){
   return {
       identifier: "",
       password: "",
   }
}

function validationSchema(){
   return {
       identifier: Yup.string().email(true).required(true),
       password: Yup.string().required(true),
   }
}