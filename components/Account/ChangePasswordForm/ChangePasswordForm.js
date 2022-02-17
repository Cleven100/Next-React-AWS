import React, { useState } from "react";
import { Form, Button} from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { updatePasswordApi } from "../../../api/user";


export default function ChangePasswordForm(props){

    const {user, logout } = props;
    const [loading, setLoading ] = useState(false);

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) => {
            setLoading(true);
            const response = await updatePasswordApi(user.id, formData.password, logout);

            if(!response){
                toast.error("Erro ao atualizar a senha");

            }else{
              logout();
            }

            setLoading(false);
        }
    })
   
    return(
        <div className="change-password-form">
            <h4><hr/>Modificar sua senha</h4>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group widths="equal">
                    <Form.Input 
                       name="password"
                       type="password"
                       placeholder="Sua nova senha"
                       onChange={formik.handleChange}
                       value={formik.values.passowrd}
                       error={formik.errors.password}
                        
                    />

                      <Form.Input 
                       name="repeatPassword"
                       type="password"
                       placeholder="Repita sua nova senha"
                       onChange={formik.handleChange}
                       value={formik.values.repeatPassowrd}
                       error={formik.errors.repeatPassword}
                        
                    />
                  
                  <Button className="submit" loading={loading}>Atualizar</Button>
                 </Form.Group>

            </Form>
        </div>
    )



}


function initialValues(){
    return {
        password: "",
        repeatPassword: "",
    }
}


function validationSchema() {
    return {
        password: Yup.string().required(true).oneOf([Yup.ref("repeatPassword")], true),
        repeatPassword: Yup.string().required(true).oneOf([Yup.ref("password")], true),
    }
}