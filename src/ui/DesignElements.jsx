import { Link } from "react-router-dom";
import PropType from "prop-types";
import styled from "styled-components";
import { createContext } from "react";

import TopElement from "./Elelments/TopElement";
import LeftBottomElement from "./Elelments/LeftBottomElement";
import RightTopElement from "./Elelments/RightTopElement";
import RightBottomElement from "./Elelments/RightBottomElement";
import { smoothAppear2 } from "../keyframes/Keyframes";

const StyledElements = styled.div``;

const StyledMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  width: 100%;
  height: 100dvh;
  transform: translateY(35%);

  p {
    font-size: 4rem;
    color: var(--color-elements);
    animation: ${smoothAppear2} 0.5s forwards;
  }

  @media only screen and (min-width: 43.75em) {
    display: none;
  }
  @media only screen and (max-height: 43.75em) {
    transform: translateY(40%);
  }
  @media only screen and (max-height: 37.5em) {
    gap: 2rem;
  }
`;

const DesignElementsContext = createContext();

function Elelments({ children }) {
  return (
    <DesignElementsContext.Provider value={{}}>
      {children}
    </DesignElementsContext.Provider>
  );
}

function Main({ mode, compass }) {
  return (
    <StyledElements>
      <TopElement $mode={mode} $width="100rem" className={compass?.west}>
        <Link to={compass?.link?.dev}>
          <p data-text="Development">{compass?.west}</p>
        </Link>
      </TopElement>
      <LeftBottomElement $mode={mode} className={compass?.north}>
        <Link to={compass?.link?.art}>
          <p data-text="Articles">{compass?.north}</p>
        </Link>
      </LeftBottomElement>
      <RightTopElement $mode={mode} className={compass?.south}>
        <Link to={compass?.link?.skills}>
          <p data-text="Skills">{compass?.south}</p>
        </Link>
      </RightTopElement>
      <RightBottomElement $mode={mode} className={compass?.east}>
        <Link to={compass?.link?.cont}>
          <p data-text="Contacts">{compass?.east}</p>
        </Link>
      </RightBottomElement>
    </StyledElements>
  );
}

function Mobile({ compass }) {
  return (
    <StyledMobile>
      <Link to={compass?.link?.dev}>
        <p data-text="Development">{compass?.west}</p>
      </Link>

      <Link to={compass?.link?.art}>
        <p data-text="Designs">{compass?.north}</p>
      </Link>
      <Link to={compass?.link?.skills}>
        <p data-text="Skills">{compass?.south}</p>
      </Link>
      <Link to={compass?.link?.cont}>
        <p data-text="Contacts">{compass?.east}</p>
      </Link>
    </StyledMobile>
  );
}

Elelments.Main = Main;
Elelments.Mobile = Mobile;

Main.propTypes = {
  mode: PropType.string,
  compass: PropType.object,
};
Mobile.propTypes = {
  mode: PropType.string,
  compass: PropType.object,
};
Elelments.propTypes = {
  children: PropType.any,
};
export default Elelments;
