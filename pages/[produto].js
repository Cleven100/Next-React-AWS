import React, {useState, useEffect} from 'react'
import { useRouter } from "next/router";
import LayoutBasico from "../layouts/LayoutBasico"
import { getProdutoByUrlApi } from '../api/produto';

export default function Produto() {
    const [produto, setProduto] = useState(null);
    const { query } = useRouter();

    useEffect(() => {
        (async () => {
            const response = await getProdutoByUrlApi(query.produto);
            console.log(response);
        })()
    }, [query])


    
    
    return (
        <LayoutBasico className="produto">
           <h1>Estamos no produto: {query.produto}</h1>
        </LayoutBasico>
           
        
    )
}