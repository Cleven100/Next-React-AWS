import LayoutBasico from "../layouts/LayoutBasico"
import { MenuPlatforms } from "../components/Header/MenuSite/MenuSite"
import { Search } from "../components/Header/TopBar/TopBar"
import { getPlatFormsApi } from "../api/platform"
import React, { useState, useEffect } from "react";
import { getLastProdutosApi } from "../api/produto";
import {size} from "lodash";


export default function Home() {

  const [platforms, setPlatforms] = useState([]);
  const [produtos, setProdutos] = useState(null);
  console.log(produtos);

   useEffect(() => {
     (async ()  =>{
       const response = await getLastProdutosApi(50);
       if(size(response) > 0) {
         setProdutos(response)
       } else {
         setProdutos([]);
       }
     })();
   }, [])
   


  useEffect(() => {
    (async () => {
      const response = await getPlatFormsApi();
      setPlatforms(response || []);
    })();
  }, []);

  return (

    <LayoutBasico className="home">
      
      <MenuPlatforms className="menu" platforms={platforms}/>

      <div className="content-produt">Teste</div>
      

    </LayoutBasico>
  )
}
