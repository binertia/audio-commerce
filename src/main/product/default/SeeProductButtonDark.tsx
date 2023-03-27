import styled from "styled-components";

export default function SeeProductButtonDark() {
  return <SeeProductButtonDarkStyle>SEE PRODUCT</SeeProductButtonDarkStyle>;
}

export const SeeProductButtonDarkStyle = styled.button`
  width: 160px;
  height: 48px;
  border-radius: 0;
  border: 1px solid black;
  color: var(--black);
  font: var(--link);
  background-color: transparent;
  transition: 90ms ease-in-out;
  &:hover {
    background-color: var(--black);
    color: var(--white);
  }
`;
