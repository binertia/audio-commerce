import { useState, useEffect } from "react";
import styled from "styled-components";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(true);
      } else {
        // if scroll up show the navbar
        setShow(false);
      }

      // remember current page location to use in the next move
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
  );
}

const NavStyle = styled.nav`
  height: 90px;
  width: 100%;
  top: 0;
  text-align: center;
  position: fixed;
  background: blue;
`;
