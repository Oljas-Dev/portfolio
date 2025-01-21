import styled from "styled-components";
import { Outlet, useNavigate } from "react-router-dom";

import ColorThemes from "./ColorThemes";
import Footer from "./Footer";
import Cursor from "./Cursor";
import { useToggle } from "../contexts/BlogContext";
import { useRef } from "react";
import MobileFooter from "./MobileFooter";
import ToTopBtn from "./ToTopBtn";

const MainStyled = styled.main`
  overflow-y: auto;
  overflow-x: hidden;
  padding-bottom: -10rem;

  background: linear-gradient(
    45deg,
    var(--color-mgradient1),
    var(--color-mgradient2)
  );

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  @media only screen and (max-width: 56.25em) {
    background: linear-gradient(
      0deg,
      var(--color-mgradient1),
      var(--color-mgradient2)
    );

    overflow: auto;
  }
`;

function Applayout() {
  const { scrolled, onScroll } = useToggle();

  const path = window.location.pathname;

  const topPos = useRef(null);
  const navigation = useNavigate();

  return (
    <MainStyled onScroll={onScroll}>
      <div ref={topPos}></div>
      <Outlet />
      <ColorThemes />
      {scrolled && <ToTopBtn ref={topPos} />}
      <Footer />
      <MobileFooter
        r={topPos}
        back={() => navigation(-1)}
        showBack={path === "/home" ? false : true}
      />
      <Cursor />
    </MainStyled>
  );
}

export default Applayout;
