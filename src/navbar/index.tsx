import { useState, useEffect } from "react";
import styled from "styled-components";

import Menu from "./components/Menu";
import CartButton from "./components/CartButton";
import Logo from "./components/Logo";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // hide
        setShow(true);
      } else {
        // show
        setShow(false);
      }

      // stored current;
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);
  return (
    <NavStyle className={`active ${show && "nav-hide"}`}>
      <Menu />
      <Logo />
      <CartButton />
    </NavStyle>
    //nav-hide class has own css in Global.tsx
  );
}

const NavStyle = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  height: 5.625rem;
  width: 100%;
  font: var(--ph-header);
  transition: 0.5s ease-in-out;
  background: var(--black);
  padding: 6.85%;
`;
