import React, { useState } from 'react';
import { Form, Button } from "semantic-ui-react";
import { useFormik } from 'formik';
import * as Yup from "yup";
import useAuth from '../../../hooks/useAuth';
import { createAddressApi } from '../../../api/address';
import { toast } from 'react-toastify';


export default function AddressForm(props){
    const { setShowModal, setReloadAddresses, newAddress, address } = props;
    const [loading, setLoading] = useState(false);
    const { auth, logout } = useAuth();

    const formik = useFormik({ 
        initialValues: initialValues(address),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: (formData) => {
            
            newAddress ? createAddress(formData) : uodateAddress();
            
        },
     });

     const createAddress = async (formData) => {
      setLoading(true);
      const formDataTemp = {
       ...formData,
       user: auth.idUser,
      };
       const response = await createAddressApi(formDataTemp, logout);
       if(!response){
           toast.warning("Erro ao criar o endereço");
           setLoading(false);
       }else{
        
            formik.resetForm();
            setReloadAddresses(true);
            setLoading(false);
            setShowModal(false);
       }

      setLoading(false);
     }

     const updateAddress = (formData) => {


     }
   
    return(
        <Form onSubmit={formik.handleSubmit}>
            <Form.Input
              name="title"
              type="text"
              label="Titulo"
              placeholder="Titulo"
              onChange={formik.handleChange}
              value={formik.values.title}
              error={formik.errors.title}

             /> 
              <Form.Group widths="equal">
              <Form.Input
                    name="name"
                    type="text"
                    label="Nome"
                    placeholder="Nome"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    error={formik.errors.name}
                   />
                  <Form.Input
                    name="address"
                    type="text"
                    label="Endereço"
                    placeholder="Endereço"
                    onChange={formik.handleChange}
                    value={formik.values.address}
                    error={formik.errors.address}

                    />

                 <Form.Input
                    name="cep"
                    type="text"
                    label="CEP"
                    placeholder="CEP"
                    onChange={formik.handleChange}
                    value={formik.values.cep}
                    error={formik.errors.cep}
                   />

              </Form.Group>

           <Form.Group>
               <Form.Group widths="equal"  >

                  <Form.Input
                    name="cidade"
                    type="text"
                    label="cidade"
                    placeholder="Cidade"
                    onChange={formik.handleChange}
                    value={formik.values.cidade}
                    error={formik.errors.cidade}
                       />
                   <Form.Input
                    name="estado"
                    type="text"
                    label="Estado"
                    placeholder="Estado"
                    onChange={formik.handleChange}
                    value={formik.values.estado}
                    error={formik.errors.estado}

                     />
                      <Form.Input
                    name="complemento"
                    type="text"
                    label="Complemento"
                    placeholder="Complemento"
                    onChange={formik.handleChange}
                    value={formik.values.complemento}
                    error={formik.errors.complemento}

                     />

                 </Form.Group>
              
                   

           </Form.Group>

              <div className="actions">
                  <Button className="submit" type="submit" loading={loading} >
                      
                      {newAddress ? "Criar endereço" : "Atualizar endereço"}
                  </Button>
              </div>
        </Form>
    )


}


function initialValues(address){
    return {
        title: address?.title || "",
        name: address?.name || "",
        address: address?.address || "",
        cep: address?.cep || "",
        cidade: address?.cidade || "",
        estado: address?.estado || "",
        complemento:address?.complemento || "",
    }
}


function validationSchema() {

   return {
       title: Yup.string().required(true),
       name: Yup.string().required(true),
       address: Yup.string().required(true),
       cep: Yup.string().required(true),
       cidade: Yup.string().required(true),
       estado: Yup.string().required(true),
       complemento: Yup.string().required(true),
   }

}