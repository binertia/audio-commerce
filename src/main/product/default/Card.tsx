import styled from "styled-components";
import CardPicOne from "../../../assets/home/desktop/image-speaker-zx9.png";
import SecondCard from "./SecondCard";
import SeeProductButtonDark from "./SeeProductButtonDark";

export default function Card() {
  return (
    <CardStyle className="padding-r-l padding-b">
      <CardWrapper>
        <SvgCard>
          <svg
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 1500 1500" //change viewBox;
            width="944"
            height="944"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="#FFF" fill="none" fill-rule="evenodd" opacity=".202">
              <circle cx="472" cy="472" r="235.5" />
              <circle cx="472" cy="472" r="270.5" />
              <circle cx="472" cy="472" r="471.5" />
            </g>
          </svg>
        </SvgCard>
        <ImgContainer src={CardPicOne} />

        <HeadCard>ZX9 SPEAKER</HeadCard>
        <TextCard>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </TextCard>
        <SeeProductButtonDark />
      </CardWrapper>
      <SecondCard />
    </CardStyle>
  );
}

const CardStyle = styled.div`
  height: 1520px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const SvgCard = styled.div`
  position: absolute;
  top: -20%;
  left: calc(100% - 450px);
  z-index: -1;
`;

const ImgContainer = styled.img`
  position: relative;
  width: 195px;
  padding: 10%;
`;

const CardWrapper = styled.div`
  position: relative;
  border: box;
  height: 600px;
  padding: 10%;
  padding-bottom: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 10px;
  background-color: var(--orange);
  width: 100%;
  text-align: center;
  z-index: -2;
`;

const HeadCard = styled.div`
  font: var(--ph-hero);
  color: var(--white);
  width: 50%;
`;

const TextCard = styled.p`
  font: var(--text);
  color: var(--white);
  width: 100%;
`;

const HeroText = styled.div`
  width: 89%;
  font: var(--ph-text);
  color: var(--grey);
  padding-bottom: 26px;
`;
