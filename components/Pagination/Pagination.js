import React from "react";
import {Pagination as PaginationSU } from "semantic-ui-react";
import { useRouter } from "next/router";
import queryString from "query-string"


export default function Pagination(props) {
    const {totalProdutos, page, limitPerPage } = props;
    const totalPages = Math.ceil(totalProdutos / limitPerPage);

   const goToPage = (newPage) => {
       console.log(newPage);
   }

  return (
      <div className="pagination">
          <PaginationSU 
          defaultActivePage={page}
          totalPages={totalPages}
          firstItem={null}
          lastItem={null}
          onPageChange={goToPage}
          boundaryRange={0}
          siblingRange={1}
          ellipsisItem={null}
          />
      </div>
  )



}

