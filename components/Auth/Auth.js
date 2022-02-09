import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";


export default function Auth(props){
    const { onCloseModal, setTitleModal } = props;
    const [showLogin, setShowLogin] = useState(true);


    const showLoginForm = () => {
         setTitleModal("Iniciar sessão");
         setShowLogin(true);
    }
    const showRegisterForm = () => {
        setTitleModal("Criar novo usuário");
        setShowLogin(false);

    }

    return showLogin ? (<LoginForm 
    showRegisterForm={showRegisterForm} 
    onCloseModal={onCloseModal}
    /> 
    ) : (
    <RegisterForm showLoginForm={showLoginForm} />
    );


}