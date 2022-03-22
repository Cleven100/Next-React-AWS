import { Container, Grid, Image, Input} from "semantic-ui-react"
import Link from "next/link"

export default function TopBar (){

    return(
        <div className="top-bar">
            
                <Grid className="top-bar">
                    
                    <Grid.Column width={14} className="top-bar__right">
                        <Logo/>
                        
                    </Grid.Column>
                </Grid>
            
        </div>
  
 
    )
 
 
 
 }
 
 
 
 function Logo(){
     return(     
         <Link href="/">
             <a className="Ecommerce">
                 <p>BigCart</p>
             </a>
         </Link>     
     )
 }
 
 export function Search(){
     return(
         <div className="top-bar__right">
         <Input  id="search-compras" icon={{ name: "search"}} /></div>
     )
 }