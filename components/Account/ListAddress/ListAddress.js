import React, { useState, useEffect } from "react";
import { Grid, Button } from "semantic-ui-react";
import { map, size} from "lodash";
import { getAddressesApi, deleteAddressApi } from "../../../api/address";
import useAuth from "../../../hooks/useAuth";


export default function ListAddress(props) {
    const  { reloadAddresses, setReloadAddresses, openModal } = props;
   const [addresses, setAddresses] = useState(null);
   const { auth, logout } = useAuth();
   
   useEffect(() => {
       (async () => {
           const response = await getAddressesApi(auth.idUser, logout);
           setAddresses(response || []);
           setReloadAddresses(false);
       })();
   }, [reloadAddresses]);

   if(!addresses) return null;
   
   return(
       <div className="list-address">
           {size(addresses) === 0 ? (
               <h3>Não há nenhum endereço criado</h3>
           ) : (
               <Grid>
                   {map(addresses, (address) => (
                     <Grid.Column key={address.id} mobile={16} tablete={8} computer={4}>
                         <Address address={address} logout={logout} setReloadAddresses={setReloadAddresses} openModal={openModal}/>
                     </Grid.Column>
                   ))}
               </Grid>
           ) }
       </div>
   )


}


function Address(props){
    const { address, logout, setReloadAddresses, openModal } = props;
    const [loadingDelete, setLoadingDelete] = useState(false);

    const deleteAddress = async () => {
        setLoadingDelete(true);
        const response = await deleteAddressApi(address._id, logout);
        if(!response){
             setReloadAddresses(true);
            }
            setLoadingDelete(false);
    }
    return(
        <div className="address">
            <p>{address.title}</p>
            <p>{address.name}</p>
            <p>{address.address}</p>
            <p>{address.cep}, {address.cidade}, {address.estado}</p>
            <p>{address.complemento}</p>

           <div className="actions">
               <Button primary onClick={() => openModal(`Editar: ${address.title}`)}>Editar</Button>
               <Button onClick={deleteAddress} loading={loadingDelete}>Excluir</Button> 
           </div>


        </div>
        
    )

}