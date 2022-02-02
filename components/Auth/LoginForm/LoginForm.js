import React from "react"

export default function LoginForm(props){
    const {showRegisterForm} = props;
  return(
      <div>
          <h1>Estou em formulário de login</h1>
          <button onClick={showRegisterForm}>Registrar</button>
      </div>
  )

}