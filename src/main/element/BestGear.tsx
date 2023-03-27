import styled from "styled-components";

export default function BestGear() {
  return (
    <Wrapper className="padding-r-l padding-b">
      <ImageBestGear />
      <Head>
        Bringing you the <Highlight> best</Highlight> audio gear
      </Head>
      <BestGearText>
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </BestGearText>
    </Wrapper>
  );
}

const ImageBestGear = styled.div`
  width: 100%;
  height: 300px;
  max-height: 300px;
  border-radius: 10px;
  background-image: url(../../assets/shared/desktop/image-best-gear.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Head = styled.div`
  font: var(--ph-header);
  padding-top: 50px;
  padding-bottom: 50px;
`;

const Highlight = styled.span`
  color: var(--orange);
`;

const Wrapper = styled.div`
  text-align: center;
`;

const BestGearText = styled.div`
  font: var(--text);
  color: #8f8f8f;
`;
