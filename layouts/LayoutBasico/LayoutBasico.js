import { Container } from "semantic-ui-react"
import classNames from "classnames";
import Header from '../../components/Header'



export default function LayoutBasico(props){
    const { children, className } = props;
    const test = true;
       
    return (
         <Container fluid className={classNames("layout-basico",{
             [className]: className,
         })}>
             <Header/>
             <Container className="content">
                 {children}
             </Container>             
         </Container>
    )

 


}