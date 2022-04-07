import React, {useState, useEffect} from 'react'
import { useRouter } from "next/router";
import LayoutBasico from "../layouts/LayoutBasico"
import { getProdutoByUrlApi } from '../api/produto';
import HeaderProduto from '../components/Produto/HeaderProduto';
import { MenuPlatforms } from '../components/Header/MenuSite/MenuSite';
import { getPlatFormsApi } from '../api/platform';
import { SearchMobile } from '../components/Header/TopBar/TopBar';
import TabsProduto from '../components/Produto/TabsProduto/TabsProduto';

export default function Produto() {
    const [produto, setProduto] = useState(null);
    const { query } = useRouter();

    const [platforms, setPlatforms] = useState([]);

    useEffect(() => {
        (async () => {
          const response = await getPlatFormsApi();
          setPlatforms(response || []);
        })();
      }, []);

    useEffect(() => {
        (async () => {
            const response = await getProdutoByUrlApi(query.produto);
            setProduto(response);
        })()
    }, [query])


    if(!produto) return null;
   
    return (
        


        <LayoutBasico className="home">
      
        <MenuPlatforms className="menu__products" platforms={platforms}/>
        <div className="menu__mobile">
          <button className="menu__selected">
            Selecione
            </button>
          <div className="search_visible">
            <SearchMobile/>
            
            
          </div>
          
  
        </div>
        
        
        <HeaderProduto produto={produto}/>
        <TabsProduto produto={produto}/>
      </LayoutBasico>
         

       
           
        
    )
}