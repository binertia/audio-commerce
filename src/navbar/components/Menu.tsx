import styled from "styled-components";

export default function Menu() {
  return (
    <MenuButton>
      <SpanStyle />
    </MenuButton>
  );
}

const MenuStyle = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const MenuButton = styled.div`
  border: box;
  position: relative;
  width: 20px;
  height: 20px;
  flex-direction: column;
  justify-content: space-between;
`;

const SpanStyle = styled.span`
  content: "";
  position: absolute;
  top: 8px;
  right: 2px;
  width: 16px;
  height: 3px;
  background: white;

  &:before,
  :after {
    content: "";
    position: absolute;
    background: #fff;
    width: 16px;
    height: 3px;
    width: 100%;
    transition: background-color 0.3s ease-in-out, transform 0.5s ease-in-out,
      top 0.5s ease-in-out;
  }
  &:before {
    top: 6px;
  }
  &:after {
    bottom: 6px;
  }
`;
