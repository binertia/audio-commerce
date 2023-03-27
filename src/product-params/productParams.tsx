import styled from "styled-components";
import fetchProduct from "./fetchProduct";
import useProduct from "./useProduct";

export default function productParams() {
  //array.length is 6; 0 - 5 index 
  //linked by data[i].slug ex. [slug: "xx99-mark-one-headphones"]

  const {data} = useProduct();
  const results = useQuery(["details", data], fetchProduct);

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }

  const pet = results.data.pets[0];
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
      //<!--array of includes -->
      <div>[].gallery.{first, second, third}.{desktop} x3 item</div>
      <div>YOU MAY ALSO LIKE</div>
      <div>[].others[...].image.desktop </div>
      <div>[].others[...].name</div>
      <div>SeeProduct : contain slug as value</div>
    </div>
  );
}
