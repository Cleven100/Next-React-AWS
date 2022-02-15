import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import LayoutBasico from "../layouts/LayoutBasico";
import useAuth from '../hooks/useAuth';
import { getMeApi } from "../api/user"
import ChangeNameForm from '../components/Account/ChangeNameForm';

export default function Account(){
      const [user, setUser] = useState(undefined);
      const { auth, logout } = useAuth();
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
             <Configuracao user={user} logout={logout}/>
         </LayoutBasico>
     )


}


function Configuracao(props) {
    const { user, logout } = props;
    return (
        <div className="account_configuration">
        <div className="title">Configuração</div>
      <div className="data">
       <ChangeNameForm user={user} logout={logout}/>
      </div>
   </div>

    )
}