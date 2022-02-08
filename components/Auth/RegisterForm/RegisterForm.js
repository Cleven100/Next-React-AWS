import React , { useState } from "react";
import { Form, Button} from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { registerApi } from "../../../api/user";

export default function RegisterForm(props){
    const { showLoginForm } = props;
    const [loading, setLoading] = useState(false)

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),

        onSubmit: async (formData) => {
            setLoading(true);
            const response = await registerApi(formData);
            
            if(response?.jwt){
                toast.success("Cadastrado com sucesso");
                showLoginForm();
            }else {
                
                toast.error("Erro ao registrar o usuário");
            }
            setLoading(false);
        }
        
    });


    return(
        <Form className="login-form" onSubmit={formik.handleSubmit}>
        <Form.Input 
          name="email"
          type="text"
          placeholder="Email"
          onChange={formik.handleChange}
          error={formik.errors.email}
        />

        

          <Form.Input 
             name="password"
             type="password"
             placeholder="Senha"
             onChange={formik.handleChange}
             error={formik.errors.password}
           />

        <Form.Input 
             name="username"
             type="text"
             placeholder="Nome de usuário"
             onChange={formik.handleChange}
             error={formik.errors.username}
           />


          <Form.Input 
             name="name"
             type="text"
             placeholder="Nome"
             onChange={formik.handleChange}
             error={formik.errors.name}
           />


           <Form.Input 
             name="lastname"
             type="text"
             placeholder="Sobrenome"
             onChange={formik.handleChange}
             error={formik.errors.lastname}
           />

            <div className="actions">
                 
                 <Button type="submit"  className="submit" loading={loading}>
                     Cadastrar
                 </Button>
            </div>

       </Form>
    )



}



function initialValues(){
    return {
        email: "",
        password: "",
        username: "",
        name: "",
        lastname: ""

    }
}


function validationSchema(){
    return{
       email: Yup.string().email(true).required(true),
       password: Yup.string().required(true),
       username: Yup.string().required(true),
       name: Yup.string().required(true),
       lastname: Yup.string().required(true),
    };

    
}