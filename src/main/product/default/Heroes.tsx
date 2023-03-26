import styled from "styled-components";

export default function Heroes() {
  return (
    <HeroWrapper className="padding-r-l">
      <div>NEW PRODUCT</div>
      <HeroMain>XX99 Mark II HeadphoneS</HeroMain>
      <div>
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </div>
      <div>See Product</div>
    </HeroWrapper>
  );
}

const HeroWrapper = styled.div`
  letter-spacing: 0.2rem;
  background-color: yellow;
  color: var(--off-white);
`;

const HeroMain = styled.div`
  font: var(--ph-hero);
`;
