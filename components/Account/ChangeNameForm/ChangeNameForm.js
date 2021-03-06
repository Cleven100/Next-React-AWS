import React, { useState }  from 'react';
import { Form, Button} from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { updateNameApi } from '../../../api/user';

export default function ChangeNameForm(props){
    const { user, logout, setReloadUser } = props;
    const [loading, setLoading ] = useState(false);

   const formik = useFormik({
       initialValues: initialValues(user.name, user.lastname),
       validationSchema: Yup.object(validationSchema()),
       onSubmit: async (formData) => {
           setLoading(true);
           const response = await updateNameApi(user.id, formData, logout);
           console.log(response);
           if(!response){
               toast.error("Erro ao atualizar seu nome ou seu sobre nome: ");
           } else {
               setReloadUser(true);
               toast.success("Nome e sobrenome atualizados!");
           }
           setLoading(false);
       }
    
       
   })

    return (
        <div className="change-name-form">
            <h4>Modifique seu nome e sobrenome</h4>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group widths="equal">
                <Form.Input  name="name" 
                     placeholder="Seu novo nome"
                     onChange={formik.handleChange}
                     value={formik.values.name}
                     error={formik.errors.name}
                    />
                    <Form.Input  name="lastname" 
                     placeholder="Seu novo sobrenome"
                     onChange={formik.handleChange}
                     value={formik.values.lastname}
                     error={formik.errors.lastname}
                    />
                    <Button className="submit" loading={loading}>
                        Atualizar
                    </Button>

                </Form.Group>
            </Form>
        </div>
    )
}


function initialValues(name, lastname){
    return {
        name: name || "",
        lastname: lastname || "",
    }
}

function validationSchema() {
    return {
        name: Yup.string().required(true),
        lastname: Yup.string().required(true),
    }

}