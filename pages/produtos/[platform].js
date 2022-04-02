import React, { useState, useEffect } from "react";
import LayoutBasico from "../../layouts/LayoutBasico";
import { useRouter } from "next/router";
import { MenuPlatforms } from "../../components/Header/MenuSite/MenuSite";
import { getPlatFormsApi } from "../../api/platform";
import { authFetch } from "../../utils/fetch";
import { Grid, GridRow } from "semantic-ui-react";
import { SearchMobile } from "../../components/Header/TopBar/TopBar";


export default function Platform() {
    const [platforms, setPlatforms] = useState([]);
    const {query} = useRouter();

    useEffect(() => {
      (async () => {
        const response = await getPlatFormsApi();
        setPlatforms(response || []);
      })();
    }, []);

  
    


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
      
      
      <h1>estamos em produtos: {query.platform}</h1>
    </LayoutBasico>
  );
}
