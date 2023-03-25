import styled from "styled-components";

export default function Heroes() {
  return (
    <HeroWrapper className="padding-r-l">
      <div>NEW PRODUCT</div>
      <div>XX99 Mark II HeadphoneS</div>
      <div>
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </div>
      <div>See Product</div>
    </HeroWrapper>
  );
}

const HeroWrapper = styled.div`
  background-color: black;
`;
