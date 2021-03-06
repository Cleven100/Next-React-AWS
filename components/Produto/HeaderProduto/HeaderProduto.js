import React,{useState, useEffect} from 'react'
import { Grid, Image, Icon, Button, GridColumn } from 'semantic-ui-react';
import { size } from 'lodash';

export default function HeaderProduto(props) {
    const {produto} = props;
    const {poster, title} = produto;
    
    
    
        return (
        <Grid className="header-produto">
            <Grid.Column mobile={16} tablet={6} computer={5}>
              <Image src={poster.url}  alt={title}/>
            </Grid.Column>
            <Grid.Column mobile={16} table={10} computer={11}>
             <Info produto={produto}  link/>
            </Grid.Column> 
        </Grid>
    )

    
}

function Info(props) {
  
    const { produto } = props;
    const { title, summary, price, discount } = produto;

    return (
        <>
        <div className="header-produto__title">
        
             {title}
             <Icon name="heart outline" link/>

            
        </div>
          <div className="header-produto__delivery">
              Entrega entre 24/48 horas
          </div>
         <div className="header-produto__summary"  dangerouslySetInnerHTML={{__html: summary}} />
         <div className="header-produto__buy">
                 
                 <div className="header-produto__buy-price">
                     <p>Preço de venda: ${price} </p>
                     <div className="header-produto__buy-price-actions">
                         <p>-{discount}%</p>
                         <p>{price - Math.floor(price*discount) / 100} $</p>
                     </div>
                    
                 </div>
                       <Button className="header-produto__buy-btn">
                     Comprar
                    </Button>
         </div>

         </>
        
    )

}