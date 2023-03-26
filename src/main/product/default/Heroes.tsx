import styled from "styled-components";

export default function Heroes() {
  return (
    <HeroWrapper className="padding-r-l">
      <SpacingText>NEW PRODUCT</SpacingText>
      <HeroMain>XX99 Mark II HeadphoneS</HeroMain>
      <HeroText>
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </HeroText>
      <SeeProductButton>SEE PRODUCT</SeeProductButton>
    </HeroWrapper>
  );
}

const HeroWrapper = styled.div`
  padding-top: 90px;
  padding-bottom: 50px;
  color: var(--off-white);
  background-color: var(--black);
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const SpacingText = styled.div`
  letter-spacing: 6px;
  font-weight: 400;
  color: #6c6c6c;
`;

const HeroMain = styled.div`
  font: var(--ph-hero);
  padding-top: 26px;
  padding-bottom: 26px;
`;

const SeeProductButton = styled.button`
  width: 160px;
  height: 48px;
  border-radius: 0;
  border: none;
  color: white;
  font: var(--link);
  background-color: var(--orange);
  transition: 90ms ease-in-out;
  &:hover {
    background-color: var(--peach);
  }
`;

const HeroText = styled.div`
  width: 89%;
  font: var(--ph-text);
  color: var(--grey);
  padding-bottom: 26px;
`;
