import React, { useState, useEffect } from "react";
import LayoutBasico from "../../layouts/LayoutBasico";
import { useRouter } from "next/router";
import { MenuPlatforms } from "../../components/Header/MenuSite/MenuSite";
import { Search } from "../../components/Header/TopBar/TopBar";
import { getPlatFormsApi } from "../../api/platform";

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
    <LayoutBasico className="platform">
      <MenuPlatforms platforms={platforms}/>
      <Search />
      <h1>estamos em produtos: {query.platform}</h1>
    </LayoutBasico>
  );
}
