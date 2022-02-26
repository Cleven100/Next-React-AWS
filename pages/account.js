import React, { useState, useEffect } from 'react';
import { Icon } from "semantic-ui-react";
import { useRouter } from "next/router";
import LayoutBasico from "../layouts/LayoutBasico";
import useAuth from '../hooks/useAuth';
import { getMeApi } from "../api/user"
import ChangeNameForm from '../components/Account/ChangeNameForm';
import ChangeEmailForm from "../components/Account/ChangeEmailForm";
import ChangePasswordForm from '../components/Account/ChangePasswordForm';
import ModalBasico from '../components/Modal/ModalBasico/ModalBasico';
import AddressForm from "../components/Account/AddressForm";

export default function Account(){
      const [user, setUser] = useState(undefined);
      const { auth, logout, setReloadUser } = useAuth();
      const router = useRouter();

      useEffect(() => {
         
        (async () =>{
            const response = await getMeApi(logout);
            setUser(response || null)
        })()

      }, [auth]);

      if(user === undefined) return null;
      if(!auth && !user) {
          router.replace("/");
          return null;
      }
      

     return(
         <LayoutBasico className="account">
             <Configuracao user={user} logout={logout} setReloadUser={setReloadUser}/>
             <Addresses />
         </LayoutBasico>
     )


}


function Configuracao(props) {
    const { user, logout, setReloadUser } = props;
    return (
        <div className="account__configuration">
        <div className="title">Configuração</div>
      <div className="data">
       <ChangeNameForm 
          user={user} 
          logout={logout} 
          setReloadUser={setReloadUser}
          />
       <ChangeEmailForm 
           user={user} 
           loogut={logout} 
           setReloadUser={setReloadUser}
           />

           <ChangePasswordForm user={user} logout={logout}/>

      </div>
   </div>

    )
}



function Addresses(){
       
    const [showModal, setShowModal ] = useState(false);
    const [titleModal, setTitleModal] = useState("");
    const [formModal, setFormModal] = useState(null);

      const openModal = (title) => {
          setTitleModal(title);
          setFormModal(<AddressForm />)
          setShowModal(true);
      }

    return (
        <div className="account__addresses">
               <div className="title">
                   Endereços &nbsp;&nbsp;
                  <Icon  name="plus" link onClick={() => openModal("Novo endereço")} /> 
               </div>
               <div className="data"> 
                     <p>Lista de endereços</p>
               </div> 
               <ModalBasico show={showModal} setShow={setShowModal} title={titleModal}>
                    {formModal}
              </ModalBasico>
              </div>
    )
        
       
}