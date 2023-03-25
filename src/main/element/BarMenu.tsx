import styled from "styled-components";
import Hiii from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";

export default function BarMenu() {
  return (
    <>
      <img src={Hiii}></img>
      <div id="bar-menu-1"></div>
      <div id="bar-menu-2"></div>
      <div id="bar-menu-3"></div>
    </>
  );
}

const BarMenuChild = styled.div`
  width: 100%;
  height: 40px;
`;
