import styled from "styled-components";

export default function NavBar() {
  return (
    <>
      <LinkChild href="/">home</LinkChild>
      <LinkChild href="/">headphones</LinkChild>
      <LinkChild href="/">speakers</LinkChild>
      <LinkChild href="/">earphones</LinkChild>
    </>
  );
}

const LinkChild = styled.a`
  text-decoration: none;
  color: var(--white);
`;
