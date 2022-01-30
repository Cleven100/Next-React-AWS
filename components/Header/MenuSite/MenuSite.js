import { useState } from "react";
import { Container, Menu, Grid, Icon, Label} from "semantic-ui-react";
import Link from "next/link";
import ModalBasico from "../../Modal/ModalBasico/ModalBasico";

export default function MenuSite(){
    return (
        <div className="fundo">
              <Container>
                   <Grid>
                    <Grid.Column className="menu__left" width={5}>
                        <MenuPlatforms />
                    </Grid.Column>
                    <Grid.Column className="menu__right" width={10}>
                        <MenuOptions />
                    </Grid.Column>
                </Grid>
              </Container>
              <ModalBasico >
                  <h2>Conteúdo do modal</h2>
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


function MenuOptions(){
     return(
        <Menu>
            <Menu.Item>
               <Icon name="user outline" />
               Minha conta
            </Menu.Item>
         </Menu> 
     )
}