import { Container } from "semantic-ui-react"
import Header from '../../components/Header'



export default function LayoutBasico(props){
    const { children } = props;
       
    return (
         <Container fluid className="layout-basico">
             <Header/>
             <Container className="content">
                 {children}
             </Container>             
         </Container>
    )

 


}