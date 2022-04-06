import React, {useState, useEffect} from 'react'
import { useRouter } from "next/router";
import LayoutBasico from "../layouts/LayoutBasico"

export default function Produto() {
    const { query } = useRouter();
    console.log(query)
    
    return (
        <LayoutBasico className="produto">
           <h1>Estamos no produto: {query.produto}</h1>
        </LayoutBasico>
           
        
    )
}