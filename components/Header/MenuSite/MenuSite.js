import { useState } from "react";
import { Container, Menu, Grid, Icon, Label} from "semantic-ui-react";
import Link from "next/link";
import ModalBasico from "../../Modal/ModalBasico/ModalBasico";
import Auth from "../../Auth";

export default function MenuSite(){
    
   const [showModal, setShowModal] = useState(false);
   const [titleModal, setTitleModal] =useState("Inciar sessão");
 
   const onShowModal = () => setShowModal(true);
   const onCloseModal = () => setShowModal(false);



    return (
        <div className="fundo">
              <Container>
                   <Grid>
                    <Grid.Column className="menu__left" width={5}>
                        <MenuPlatforms />
                    </Grid.Column>
                    <Grid.Column className="menu__right" width={10}>
                        <MenuOptions onShowModal={onShowModal}/>
                    </Grid.Column>
                </Grid>
              </Container>
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
    const {onShowModal} = props;
     return(
        <Menu>
            <Menu.Item onClick={onShowModal}>
               <Icon name="user outline" />
               Minha conta
            </Menu.Item>
         </Menu> 
     )
}