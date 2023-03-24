import { useState, useEffect } from "react";
import styled from "styled-components";

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
    <NavStyle className={`active ${show && "nav-hide"}`}>how fjaosdfj</NavStyle>
    //nav-hide class has own css in Global.tsx
  );
}

const NavStyle = styled.nav`
  height: 5.625rem;
  width: 100%;
  top: 0;
  text-align: center;
  position: fixed;
  transition: 0.5s ease-in-out;
  background: blue;
`;
