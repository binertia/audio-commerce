import styled from "styled-components";
import HeadphoneThumbnail from "./assets/image-category-thumbnail-headphones.png";
import SpeakerThumbnail from "./assets/image-category-thumbnail-speakers.png";
import EarphoneThumbnail from "./assets/image-category-thumbnail-earphones.png";
import MenuLink from "./MenuLink";

export default function BarMenu() {
  return (
    <div className="padding-r-l">
      <MenuBackdrop>
        <BarMenuChild src={HeadphoneThumbnail} alt="headphone" />
        <ThumbnailName>HeadPhones</ThumbnailName>
        <MenuLink text={"shop"} link={""} />
      </MenuBackdrop>
      <MenuBackdrop>
        <BarMenuChild src={SpeakerThumbnail} alt="speaker" />
        <ThumbnailName>Speaker</ThumbnailName>
        <MenuLink text={"shop"} link={""} />
      </MenuBackdrop>
      <MenuBackdrop>
        <BarMenuChild src={EarphoneThumbnail} alt="earphone" />
        <ThumbnailName>Earphone</ThumbnailName>
        <MenuLink text={"shop"} link={""} />
      </MenuBackdrop>
    </div>
  );
}

const BarMenuChild = styled.img`
  height: 110px;
  position: absolute;
  top: -45px;
`;

const MenuBackdrop = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  height: 165px;
  background: #f1f1f1;
  margin-top: 60px;
  font-size: var(--text);
  text-transform: uppercase;
`;

const ThumbnailName = styled.p`
  font: var(--text);
  font-weight: bold;
  margin-top: 75px;
  text-transform: uppercase;
`;
