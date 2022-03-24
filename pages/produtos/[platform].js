import React, { useState, useEffect } from "react";
import LayoutBasico from "../../layouts/LayoutBasico";
import { useRouter } from "next/router";
import { MenuPlatforms } from "../../components/Header/MenuSite/MenuSite";
import { getPlatFormsApi } from "../../api/platform";
import { authFetch } from "../../utils/fetch";

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
      
      <h1>estamos em produtos: {query.platform}</h1>
    </LayoutBasico>
  );
}
