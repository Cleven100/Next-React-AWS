import React from "react";
import LayoutBasico from "../../layouts/LayoutBasico";
import { useRouter } from "next/router";

export default function Produtos() {
    const {query} = useRouter();
  return (
    <LayoutBasico className="produtos">
      <h1>estamos em produtos: {query.platform}</h1>
    </LayoutBasico>
  );
}
