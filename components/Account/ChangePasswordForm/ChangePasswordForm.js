import React from "react";
import { Form, Button} from "semantic-ui-react";


export default function ChangePasswordForm(props){

    const {user, logout} = props;
   
    return(
        <div className="change-password-form">
            <h4><hr/>Modificar sua senha</h4>
            <Form>
                <Form.Group widths="equal">
                    <Form.Input 
                       name="password"
                       type="password"
                       placeholder="Sua nova senha"
                        
                    />

                      <Form.Input 
                       name="repeatPassword"
                       type="repeatPassword"
                       placeholder="Repita sua nova senha"
                        
                    />
                  
                  <Button className="submit">Atualizar</Button>
                 </Form.Group>

            </Form>
        </div>
    )



}