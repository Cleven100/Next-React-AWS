import LayoutBasico from "../layouts/LayoutBasico"
import { MenuPlatforms } from "../components/Header/MenuSite/MenuSite"
import { Search } from "../components/Header/TopBar/TopBar"
import { getPlatFormsApi } from "../api/platform"
import React, { useState, useEffect } from "react";

export default function Home() {

  const [platforms, setPlatforms] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getPlatFormsApi();
      setPlatforms(response || []);
    })();
  }, []);

  return (

    <LayoutBasico className="home">
      
      <MenuPlatforms platforms={platforms}/>
      <Search />

    </LayoutBasico>
  )
}
