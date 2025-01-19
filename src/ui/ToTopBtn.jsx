import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

import { toTop } from "../helpers/Helpers";

const toTopAppear = keyframes`
from {
  transform: translateY(-5rem);
}
  to {
    transform: none;
  }
`;

const TopBtn = styled(NavLink)`
  text-decoration: none;
  font-size: 5rem;
  color: var(--color-links);

  position: fixed;
  bottom: 8%;
  right: 5%;

  transition: all 0.2s linear;
  animation: ${toTopAppear} 0.3s ease-out;

  &:hover {
    color: var(--color-text);
  }

  @media only screen and (max-width: 62.5em) {
    right: 3%;
  }
  @media only screen and (max-width: 43.75em) {
    display: none;
  }
`;

function ToTopBtn({ ref }) {
  return <TopBtn onClick={() => toTop(ref)}>⬆</TopBtn>;
}

ToTopBtn.propTypes = {
  ref: PropTypes.any,
};

export default ToTopBtn;
