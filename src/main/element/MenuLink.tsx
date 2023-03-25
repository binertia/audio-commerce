import styled from "styled-components";

interface LinkProp {
  link: string;
  text: string;
}

export default function MenuLink({ link, text }: LinkProp) {
  return (
    <Wrapper>
      <Link href={"/" + link}>{text}</Link>
      <Arrow>
        <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.322 1l5 5-5 5"
            stroke="#D87D4A"
            stroke-width="2"
            fill="none"
            fill-rule="evenodd"
          />
        </svg>{" "}
      </Arrow>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Link = styled.a`
  font: var(--link);
  color: #c4c4c4;
  text-decoration: none;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const Arrow = styled.div`
  position: relative;
  margin-left: 4px;
  bottom: 10.5px;
  height: 12px;
`;
