import React from 'react'
import { Image, Grid } from "semantic-ui-react";
import Link from "next/link"
import { map } from "lodash";
import useWindowSize from "../../hooks/useWindowSize";
import {breakpointUpSm, breakpointUpMd, breakpointUpLg, breakpointUpXL} from "../../utils/breakpoint";


export default function ListProdutos(props) {
    const {produtos} = props;
    const {width} = useWindowSize();
    console.log(width);

    const getColumnsRender = () => {
      switch (true) {
      
        case width > breakpointUpLg:
          return 5;
            case width > breakpointUpMd:
              return 4;
           case width >  breakpointUpSm:
             return 3;
             default:
                return 1; 
         
      }
    }

    console.log(getColumnsRender())


  return (
    <div className='list-produtos'>
      <Grid>
      <Grid.Row columns={getColumnsRender()}>
             {map(produtos, (produto) => (
        <Produto produto={produto}/>
      ))}
         
          </Grid.Row>
      </Grid>
     
    </div>
  )
}



function Produto(props) {
  const { produto } = props;
  return (
   
   <Grid.Column className="product">
       <Link href={`/${produto.url}`}>
         <a>
           <h2>{produto.title}</h2>
         </a>
          </Link>  
            <div className="product__info">
                 {produto.discount ? (
                   <span className="discount">-{produto.discount}%</span>
                 ): (
                   <span />
                 )}
                 <span className="product__price">${produto.price}</span>
                 <div className="product__rating">
                ⭐⭐⭐⭐⭐
                </div>
                <button className='Button'>Add to cart</button>
              </div>
              
              <Link href={`/${produto.url}`}>
         <a>
           <div className="list-produtos__produto-poster">
              <Image src={produto.poster.url} alt={produto.title} />
             
            </div>
         </a>
          </Link>  

            
            
         
      
   </Grid.Column>
  )
}