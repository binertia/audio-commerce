import styled from "styled-components";

export default function productParams() {
  //array.length is 6; 0 - 5 index 
  //linked by data[i].slug ex. [slug: "xx99-mark-one-headphones"]
  return (
    <div>
      <button>Go back</button>
      <div>image : {desktop:"./fdsjkl.jpg"}</div>
      <div>new:bool</div>
      <div>name : string</div>
      <div>description:string</div>
      <div>price : number</div>
      <button>button " - 0 + "   && "add to cart"</button>
      <div>FEATURES</div>
      <div>features : string</div>
      <div>IN THE BOX</div>
      //<!--array of includes -->
      //
      <div>2x Headphone Jack</div>
      <div>... includes[quantity : number, item : string]:[]array</div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}