import React from 'react';
import { Form, Button } from "semantic-ui-react";

export default function AddressForm(){
   
    return(
        <Form>
            <Form.Input
              name="title"
              type="text"
              label="Logradouro"
              placeholder="Logradouro"

             /> 
              <Form.Group widths="equal">
              <Form.Input
                    name="name"
                    type="text"
                    label="Nome"
                    placeholder="Nome"
                   />
                  <Form.Input
                    name="address"
                    type="text"
                    label="Endereço"
                    placeholder="Endereço"

                    />

                 <Form.Input
                    name="cep"
                    type="text"
                    label="CEP"
                    placeholder="CEP"
                   />

              </Form.Group>

           <Form.Group>
               <Form.Group widths="equal"  >

                  <Form.Input
                    name="name"
                    type="text"
                    label="Cidade"
                    placeholder="Cidade"
                       />
                   <Form.Input
                    name="address"
                    type="text"
                    label="Estado"
                    placeholder="Estado"

                     />
                      <Form.Input
                    name="complemento"
                    type="text"
                    label="Complemento"
                    placeholder="Complemento"

                     />

                 </Form.Group>
              
                   

           </Form.Group>

              <div className="actions">
                  <Button className="submit" type="submit" >
                      Criar endereço
                  </Button>
              </div>
        </Form>
    )


}