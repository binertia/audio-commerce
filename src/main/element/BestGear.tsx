import styled from "styled-components";
import manPic from "../../assets/shared/desktop/image-best-gear.jpg";

export default function BestGear() {
  return (
    <div className="padding-r-l">
      <ImageBestGear src={manPic} />
      <Head>Bringing you the best audio gear</Head>
      <p>
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </p>
    </div>
  );
}

const ImageBestGear = styled.img`
  width: 100%;
  border-radius: 20%;
`;

const Head = styled.div`
  font: var(--ph-header);
`;
