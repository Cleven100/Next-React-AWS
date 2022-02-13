import React, { useState, useEffect } from "react";
import { Container, Menu, Grid, Icon, Label} from "semantic-ui-react";
import Link from "next/link";
import ModalBasico from "../../Modal/ModalBasico/ModalBasico";
import Auth from "../../Auth";
import TopBar from "../TopBar";
import useAuth from "../../../hooks/useAuth";
import { getMeApi } from "../../../api/user";

export default function MenuSite(){
    
   const [showModal, setShowModal] = useState(false);
   const [titleModal, setTitleModal] =useState("Inciar sessão");
   const [user, setUser] = useState(undefined);
   const { auth, logout } = useAuth();

   useEffect(() => {
       (async () =>{
         const response = await getMeApi(logout);
         setUser(response);
       }) ()
   }, [auth])
 
   const onShowModal = () => setShowModal(true);
   const onCloseModal = () => setShowModal(false);



    return (
        <div className="fundo">
              
                   <Grid>
                       
                    <Grid.Column className="menu__left" width={7}>
                        <TopBar/>
                        {/* <MenuPlatforms /> */}
                        
                    </Grid.Column>
                    <Grid.Column className="menu__right" width={7}>
                        {user !== undefined && (
                            <MenuOptions onShowModal={onShowModal} 
                            user={user} 
                            logout={logout}
                            />

                        )}
                       
                        
                    </Grid.Column>
                </Grid>
              
              <ModalBasico show={showModal} setShow={setShowModal} title={titleModal} size="small">
                  <Auth onCloseModal={onCloseModal} setTitleModal={setTitleModal}/>
              </ModalBasico>
               
            
        </div> 

    )
}


function MenuPlatforms() {
    return(
        <Menu >
            <Link href="/Nootbooks" >               
                    <Menu.Item as="a">
                      Nootbooks
                    </Menu.Item>               
            </Link>

            <Link href="/Desktops">
                     <Menu.Item as="a"> 
                       Desktops
                     </Menu.Item>
            </Link>

            <Link href="/Celulares">               
                    <Menu.Item as="a">
                     Celulares
                    </Menu.Item>               
            </Link>

            <Link href="/Perifericos">               
                    <Menu.Item as="a">
                      Periféricos
                    </Menu.Item>               
            </Link>
                        
        </Menu>
    )
}


function MenuOptions(props){
    const {onShowModal, user, logout } = props;
     return(
        <Menu>
            {user ? (
                <>
                 
                 <Link href="/cart">
                     <Menu.Item as="a" >
                        <Icon name="cart" />
                     
                 </Menu.Item>
                 </Link>
                <Link href="/orders">

                     <Menu.Item as="a">
                     <Icon name="desktop" />
                     Meus pedidos
                </Menu.Item>
                </Link>

                <Link href="/wishlist">
                     <Menu.Item as="a">
                     <Icon name="heart outline" />
                     Favoritos
                </Menu.Item>
                </Link>

                <Link href="/account">
                     <Menu.Item as="a">
                     <Icon name="user outline" />
                      {user.name}
                </Menu.Item>
                </Link>

                
                
               
                <Menu.Item onClick={logout}> 
                  <Icon name="power off"/>
                  
             </Menu.Item>
             </>
 
            ) : (
                <>
                <Menu.Item onClick={onShowModal}>
                        <Icon name="cart" />
                     
                 </Menu.Item>
                 <Menu.Item onClick={onShowModal}>
                        <Icon name="user outline" />
                     Login
                 </Menu.Item>
                 
                 </>
            )
            }
           
         </Menu> 
     )
}


