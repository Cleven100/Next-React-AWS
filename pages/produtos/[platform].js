import React, { useState, useEffect } from "react";
import LayoutBasico from "../../layouts/LayoutBasico";
import { useRouter } from "next/router";
import { MenuPlatforms } from "../../components/Header/MenuSite/MenuSite";
import { getPlatFormsApi } from "../../api/platform";
import { authFetch } from "../../utils/fetch";
import { Grid, GridRow } from "semantic-ui-react";
import { SearchMobile } from "../../components/Header/TopBar/TopBar";
import { getProdutosPlatformApi , getTotalProdutosPlatformApi} from "../../api/produto";
import { initial, size } from "lodash";
import { Loader } from "semantic-ui-react";
import ListProdutos from "../../components/ListProdutos/ListProdutos";
import Pagination from "../../components/Pagination";

const limitPerPage = 4;

export default function Platform() {

   
    const [produtos, setProdutos] = useState(null);
    const [platforms, setPlatforms] = useState([]);
    const {query} = useRouter();
    const [totalProdutos, setTotalProdutos] = useState(null);

   

    const getStartItem = () => {
      const currentPages = parseInt(query.page);
      if(!query.page || currentPages === 1) return 0;
      else return currentPages * limitPerPage - limitPerPage;
    }

     
  
    useEffect(() => {
      (async () => {
        const response = await getPlatFormsApi();
        setPlatforms(response || []);
      })();
    }, []);


    useEffect(() => {
      (async () => {
         if (query.platform){

           const response = await getProdutosPlatformApi(
           query.platform,
           limitPerPage, 
           getStartItem()
           );     
        setProdutos(response);
      }
        
      })();
    }, [query]);


   useEffect(() => {
     (async () => {
        const response = await getTotalProdutosPlatformApi(query.platform);
        console.log(response);
        setTotalProdutos(response);
     })();
      
     
   }, [query])    

  
    


  return (
    <LayoutBasico className="home">
      
      <MenuPlatforms className="menu__products" platforms={platforms}/>
      <div className="menu__mobile">
        <button className="menu__selected">
          Selecione
          </button>
        <div className="search_visible">
          <SearchMobile />
        </div>
        

      </div>
      
      
      {!produtos && <Loader active>Carregando produtos</Loader>}
      {produtos && size(produtos) === 0 && (
        <div>
          <h3>Não tem produtos cadastrados</h3>
        </div>
      )}
      {size(produtos) > 0 && (
        <ListProdutos produtos={produtos}/>
      )}

      {totalProdutos ? (
      <Pagination
       totalProdutos={totalProdutos}
        page={query.page ? parseInt(query.page): 1}
        limitPerPage={limitPerPage}
      /> 
      ) : null}

    </LayoutBasico>
  );
}
