import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { updateEmailApi } from "../../../api/user";


export default function ChangeEmailForm(props){
    const { user, logout, setReloadUser} = props;
    const [loading, setLoading ] = useState(false);

    const formik = useFormik({
      initialValues: initialValues(),
      validationSchema: Yup.object(validationSchema()),
      onSubmit: async (formData) => {
        setLoading(true);

       const response = await updateEmailApi(user.id, formData.email, logout);
       if(!response || response?.statusCode === 400){
         toast.error("Erro ao atualizar o email");
       }else {
         setReloadUser(true);
         toast.success("Email Atualizado");
         formik.handleReset();
       }

        setLoading(false);
      }
    });

    return(
        <div className="change-email-form">
            <h4><hr/>Modifique seu email <span>(Atual: {user.email}) </span>
            </h4>

           <Form onSubmit={formik.handleSubmit}>
             <Form.Group widths="equal">
             <Form.Input 
                   name="email"
                   placeholder="Seu novo email"
                   onChange={formik.handleChange}
                   value={formik.values.email}
                   error={formik.errors.email}
                 />
                 <Form.Input 
                   name="repeatEmail"
                   placeholder="Confirme seu novo email"
                   onChange={formik.handleChange}
                   value={formik.values.repeatEmail}
                   error={formik.errors.repeatEmail}
                 />
                 <Button className="submit" loading={loading}>
                  Atualizar
              </Button>
             </Form.Group>
              

           </Form>

        </div>
    )
}


function initialValues(){
  return {
    email: "",
    repeatEmail: "",
  };
}

function validationSchema(){

   return {
     email: Yup.string().email(true).required(true).oneOf([Yup.ref("repeatEmail")], true),
     repeatEmail: Yup.string().email(true).required(true).oneOf([Yup.ref("email")], true),
   }


}