import React from "react";
import { Form, Button } from "semantic-ui-react";

export default function ChangeEmailForm(props){
    const { user, logout, setReloadUser} = props;
    return(
        <div className="change-email-form">
            <h4><hr/>Modifique seu email <span>(Atual: {user.email}) </span>
            </h4>

           <Form>
             <Form.Group widths="equal">
             <Form.Input 
                   name="email"
                   placeholder="Seu novo email"
                 />
                 <Form.Input 
                   name="repeatEmail"
                   placeholder="Confirme seu novo email"
                 />
                 <Button className="submit">
                  Atualizar
              </Button>
             </Form.Group>
              

           </Form>

        </div>
    )
}