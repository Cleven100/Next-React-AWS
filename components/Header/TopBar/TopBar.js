import { Container, Grid, Image, Input} from "semantic-ui-react"
import Link from "next/link"

export default function TopBar (){

    return(
        <div className="top-bar">
            
                <Grid className="top-bar">
                    
                    <Grid.Column width={14} className="top-bar__right">
                        <Logo/>
                        <Search/>
                    </Grid.Column>
                </Grid>
            
        </div>
  
 
    )
 
 
 
 }
 
 
 
 function Logo(){
     return(     
         <Link href="/">
             <a className="Ecommerce">
                 <p>Ecommerce-bag</p>
             </a>
         </Link>     
     )
 }
 
 function Search(){
     return(
         <Input  id="search-compras" icon={{ name: "search"}} />
     )
 }