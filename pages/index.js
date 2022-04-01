import LayoutBasico from "../layouts/LayoutBasico"
import { MenuPlatforms } from "../components/Header/MenuSite/MenuSite"
import { Grid, Loader } from "semantic-ui-react";
import { getPlatFormsApi } from "../api/platform"
import React, { useState, useEffect } from "react";
import { getLastProdutosApi } from "../api/produto";
import { size } from "lodash";
import ListProdutos from "../components/ListProdutos";
import useWindowSize from "../hooks/useWindowSize";
import {breakpointUpSm, breakpointUpMd, breakpointUpLg, breakpointUpXL} from "../utils/breakpoint";


export default function Home() {

  const [platforms, setPlatforms] = useState([]);
  const [produtos, setProdutos] = useState(null);
  
  const {width} = useWindowSize();
   

  const getColumnsRender = () => {
    switch (true) {
      case width > breakpointUpXL:
           return 6;
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
      <MenuPlatforms className="menu__pro" platforms={platforms}/>
      
      

       {!produtos && <Loader active>Carregando Produtos</Loader>}
       {produtos && size(produtos) === 0 && (
         <div>
           <h3>Não há produtos cadastrados</h3>
         </div>
       )}
       {size(produtos)>0 && (
         <ListProdutos produtos={produtos} />
       )}
       
      
      

    </LayoutBasico>
  )
}
