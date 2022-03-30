import React from 'react'
import { Image, Grid } from "semantic-ui-react";
import Link from "next/link"
import { map } from "lodash";

export default function ListProdutos(props) {
    const {produtos} = props;
  return (
    <div className='list-produtos'>
      <Grid>
          <Grid.Row columns={5}>
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
   <Grid.Column className="list-produto__produto">
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