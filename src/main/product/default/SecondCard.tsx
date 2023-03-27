import styled from "styled-components";
import ImgOne from "../../../assets/home/desktop/image-speaker-zx7.jpg";
import SeeProductButtonDark from "./SeeProductButtonDark";

export default function SecondCard() {
  return (
    <>
      <CardStyle>
        <ImgOneStyle>
          <CardText>ZX7 SPEAKER</CardText>
          <SeeProductButtonDark />
        </ImgOneStyle>
      </CardStyle>
      <CardTwo />
      <CardThree>
        <CardText>YX1 EARPHONES</CardText>
        <SeeProductButtonDark />
      </CardThree>
    </>
  );
}

const CardStyle = styled.div`
  position: relative;
  width: 100%;
  height: 320px;
`;

const ImgOneStyle = styled.div`
  padding-left: 10%;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(../../../assets/home/desktop/image-speaker-zx7.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const ImgOneHeader = styled.div`
  font: var(--ph-header);
  color: var(--black);
`;

const CardText = styled.p`
  font: var(--ph-header);
`;

const CardTwo = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  background-image: url(../../../assets/home/desktop/image-earphones-yx1.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const CardThree = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10%;
  width: 100%;
  height: 200px;
  border-radius: 10px;
  background-color: rgb(241, 241, 241);
`;
