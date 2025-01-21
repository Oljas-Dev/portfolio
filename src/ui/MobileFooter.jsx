import styled from "styled-components";
import PropTypes from "prop-types";

import { Flex, VeilBottom } from "../Variables/Variables";
import RightBottomElement from "./Elelments/RightBottomElement";
import { toTop } from "../helpers/Helpers";
import { useToggle } from "../contexts/BlogContext";
import References from "./References";
import ColorThemes from "./ColorThemes";

const Container = styled.footer`
  @media only screen and (min-width: 43.75em) {
    display: none;
  }
`;

const Back = styled.span`
  text-decoration: none;
  color: var(--color-mtext);

  margin-left: ${(props) => props.$margin || "0"};
  cursor: pointer;
`;

const NavSpan = styled(Flex)`
  gap: 1rem;

  transition: all 0.3s ease-out;
`;

function MobileFooter({ r, back, showBack }) {
  const { scrolled } = useToggle();
  return (
    <Container>
      <RightBottomElement $display="none" />
      <VeilBottom>
        <NavSpan>
          {showBack && <Back onClick={back}>⬅ go back</Back>}
          {scrolled && <Back onClick={() => toTop(r)}>⬆ go up</Back>}
          <ColorThemes footer={true} />
        </NavSpan>
        <References />
      </VeilBottom>
    </Container>
  );
}

MobileFooter.propTypes = {
  r: PropTypes.any,
  back: PropTypes.func,
  showBack: PropTypes.bool,
};

export default MobileFooter;
