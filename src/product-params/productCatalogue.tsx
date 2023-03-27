import { useEffect, useState } from "react";
import styled from "styled-components";

export default function ProductCatalogue(props: any) {
  const { isNew, productName, description, link } = props;
  //has 3 state
  /* if 0 go default
  /* if 1 go to headphones */
  /* if 2 go to speakers*/
  /* if 3 go to earphones*/
  //get all index with data[i].category: "earphones" , "headphones", "speakers"
  //filter.map;
  /* [...data]*/

  const [Catalogue, setCatalogue] = useState([]);

  useEffect(() => {
    requestCatalogue();
    console.log([Catalogue]);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestCatalogue() {
    const res = await fetch(`/data/data.json`);
    if (!res.ok) {
      throw new Error(`Catalogue fetch not working`);
    }
    const data = await res.json();
    setCatalogue(data.Catalogue);
  }
  return (
    <div>
      <div className={"is" + isNew}>NewProduct</div>
      <div>(true || false):new </div>
      <div>uppercase `${productName}` : name</div>
      <div>string : description`${description}`</div>
      <div onClick={(slug) => slug}>see product button</div>
    </div>
  );
}
