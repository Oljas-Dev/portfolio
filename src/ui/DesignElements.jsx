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
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  width: 100%;
  height: 100%;
  transform: translateY(5%);

  p {
    font-size: 4rem;
    color: var(--color-elements);
    animation: ${smoothAppear2} 0.5s forwards;
  }

  @media only screen and (max-width: 43.75em) {
    display: flex;
  }
  @media only screen and (max-height: 43.75em) {
    display: flex;
    transform: translateY(13%);
  }
  @media only screen and (max-height: 37.5em) {
    transform: translateY(18%);
    gap: 2rem;
  }
  @media only screen and (max-height: 34.37em) {
    transform: none;
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
