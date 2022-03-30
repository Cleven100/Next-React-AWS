import React from 'react'
import { map } from "lodash";

export default function ListProdutos(props) {
    const {produtos} = props;
  return (
    <div className='list-produtos'>
      {map(produtos, (produto) => (
        <h3>{produto.title}</h3>
      ))}
        
    </div>
  )
}

