import React from 'react';
import { Form, Button} from "semantic-ui-react";

export default function ChangeNameForm(props){
    const { user } = props;
    return (
        <div className="change-name-form">
            <h4>Modifique seu nome e seu apelido</h4>
            <Form>
                <Form.Group widths="equal">
                <Form.Input  name="name" 
                     placeholder="Seu novo nome"
                     
                    />
                    <Form.Input  name="lastname" 
                     placeholder="Seu novo Apelido"
                     
                    />
                    <Button className="submit">
                        Atualizar
                    </Button>

                </Form.Group>
            </Form>
        </div>
    )
}