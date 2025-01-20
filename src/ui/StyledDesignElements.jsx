import styled from "styled-components";

import { repeatingCode } from "../Variables/Variables";

const StyledDesignElements = styled.span`
  text-align: center;
  background-color: var(--color-elements);
  height: 2rem;
  width: 75%;
  max-width: ${(props) => props.$width || "100rem"};
  border-top: ${repeatingCode.border};
  border-right: ${repeatingCode.border};

  box-shadow: -1px 2px 4px rgb(0, 0, 0, 0.25);

  position: absolute;
  transition: all 0.3s ease-in;
  cursor: pointer;

  p {
    position: absolute;
    font-size: 4rem;
    color: var(--color-elements);

    @media only screen and (max-width: 37.5em) {
      position: relative;
    }
  }

  @media only screen and (max-width: 56.25em) {
    box-shadow: 0 0.4rem 0.4rem rgb(0, 0, 0, 0.25);
  }
`;

export { StyledDesignElements };
