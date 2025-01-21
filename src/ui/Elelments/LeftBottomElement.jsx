import styled, { css } from "styled-components";

import {
  leftBottom,
  devAnimNorth,
  devAnimParNorth,
  optionsNavigation,
} from "../../keyframes/Keyframes";
import { repeatingCode } from "../../Variables/Variables";
import { StyledDesignElements } from "../StyledDesignElements";

const LeftBottomElement = styled(StyledDesignElements)`
  ${(props) => {
    switch (props.$mode) {
      case "options":
        return css`
          top: -95%;
          left: 30%;
          height: 100%;
          width: 2rem;
          border: ${repeatingCode.fiction};
          box-shadow: ${repeatingCode.false};
          ${repeatingCode.zIndex};

          animation: ${devAnimNorth} 1s reverse ease-out;

          p {
            rotate: 270deg;
            top: 33%;
            left: -100%;

            border-bottom: ${repeatingCode.fictionLinks};
            animation: ${devAnimParNorth} 1.3s ease-out;
          }

          &:hover {
            ${repeatingCode.hover}
            border-right: ${repeatingCode.border};
            text-shadow: -7px -8px 10px rgb(0, 0, 0, 0.25);

            p {
              border-bottom: ${repeatingCode.borderLinks};
              ${repeatingCode.shine}
            }
          }

          ${repeatingCode.media}
        `;
      case "secondary":
        return css`
          left: 90%;
          top: 50%;
          width: 98em;
          ${repeatingCode.zIndex};

          animation: ${optionsNavigation} 0.8s ease-out;

          p {
            top: -300%;
            left: 5%;
            @media only screen and (max-width: 62.5em) {
              transform: translate(5rem, 5rem);
              color: var(--color-links);
              text-shadow: 0px 8px 8px rgb(0, 0, 0, 0.25);
            }
            @media only screen and (max-width: 37.5em) {
              top: 5rem;
              left: -18rem;
            }
          }

          @media only screen and (max-width: 68.75em) {
            width: 80rem;
          }
          @media only screen and (max-width: 62.5em) {
            width: 0;
          }
        `;
      default:
        return css`
          height: 50%;
          max-height: 35rem;
          width: 2rem;

          box-shadow: -2px 2px 4px rgb(0, 0, 0, 0.25);

          bottom: 0;
          left: 26rem;
          animation: ${leftBottom} 1.25s ease-out;

          @media only screen and (max-width: 75em) {
            left: 20rem;
          }
          @media only screen and (max-width: 68.75em) {
            left: 15rem;
          }
          @media only screen and (max-width: 62.5em) {
            display: none;
          }
        `;
    }
  }}
`;

export default LeftBottomElement;
