import { createContext } from "react";
import PropTypes from "prop-types";

import { useToggle } from "../contexts/BlogContext";
import { StyledOptions } from "../Variables/Variables";
import StyledPixels from "./PixelElements";
import RightBottomElement from "./Elelments/RightBottomElement";
import WebsiteLogo from "./WebsiteLogo";

const DecorationContext = createContext();

function Decoration({ children }) {
  return (
    <DecorationContext.Provider value={{}}>
      {children}
    </DecorationContext.Provider>
  );
}

function Main({ children }) {
  const { colorThemeToggle: toggle } = useToggle();
  const pathFilter = window.location.pathname.split("/");

  const mobileCheck = pathFilter[pathFilter.length - 1] === "options";
  return (
    <StyledOptions>
      <WebsiteLogo />
      <StyledPixels
        $mode="straightTop"
        $margin={`4rem ${toggle ? "5.5rem" : "11rem"} 0 12rem`}
      />
      {children}
      <StyledPixels
        $mode="straightBottom"
        $margin="0 17rem 3rem 3rem"
        $display="none"
      />
      {mobileCheck && <RightBottomElement $display="none" />}
    </StyledOptions>
  );
}

Decoration.Main = Main;

Decoration.propTypes = {
  children: PropTypes.any,
};
Main.propTypes = {
  children: PropTypes.any,
};

export default Decoration;
