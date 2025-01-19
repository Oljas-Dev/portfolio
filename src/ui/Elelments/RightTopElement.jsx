import styled, { css } from "styled-components";

import {
  rightTop,
  devAnimSouth,
  devAnimParSouth,
  optionsNavigation,
} from "../../keyframes/Keyframes";
import { repeatingCode } from "../../Variables/Variables";
import { StyledDesignElements } from "../StyledDesignElements";

const RightTopElement = styled(StyledDesignElements)`
  ${(props) => {
    switch (props.$mode) {
      case "options":
        return css`
          top: 100%;
          left: 60%;
          height: 70%;
          width: 2rem;
          border: ${repeatingCode.fiction};
          box-shadow: ${repeatingCode.false};
          ${repeatingCode.zIndex};

          animation: ${devAnimSouth} 0.8s ease-out;

          p {
            rotate: 270deg;
            top: 38%;
            left: -360%;

            border-top: ${repeatingCode.fictionLinks};
            animation: ${devAnimParSouth} 1.1s ease-out;
          }

          &:hover {
            ${repeatingCode.hover};
            text-shadow: -10px -9px 10px rgb(0, 0, 0, 0.25);
            border-right: ${repeatingCode.border};

            p {
              border-top: ${repeatingCode.borderLinks};
              ${repeatingCode.shine}
            }
          }

          @media only screen and (max-width: 43.75em) {
            display: none;
          }
        `;
      case "secondary":
        return css`
          left: 90%;
          top: 50%;
          width: 98rem;
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
            @media only screen and (max-width: 18.75em) {
              transform: translate(-13rem, 22rem);
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
          height: 60%;
          max-height: 57rem;
          width: 2rem;
          border-top: none;

          box-shadow: -2px 2px 4px rgb(0, 0, 0, 0.25);

          top: 0;
          right: 29rem;
          animation: ${rightTop} 1s ease-out;

          @media only screen and (max-width: 75em) {
            right: 20rem;
          }
          @media only screen and (max-width: 68.75em) {
            right: 15rem;
          }
          @media only screen and (max-width: 62.5em) {
            display: none;
          }
        `;
    }
  }}
`;

export default RightTopElement;
