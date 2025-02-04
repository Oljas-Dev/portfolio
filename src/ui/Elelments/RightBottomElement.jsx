import styled, { css } from "styled-components";

import {
  rightBottom,
  devAnimEast,
  devAnimParEast,
  optionsNavigation,
} from "../../keyframes/Keyframes";
import { repeatingCode } from "../../Variables/Variables";
import { StyledDesignElements } from "../StyledDesignElements";

const RightBottomElement = styled(StyledDesignElements)`
  ${(props) => {
    switch (props.$mode) {
      case "options":
        return css`
          width: 110%;
          border: ${repeatingCode.fiction};
          box-shadow: ${repeatingCode.false};

          top: 60%;
          left: -105%;
          ${repeatingCode.zIndex};
          animation: ${devAnimEast} 1s ease-out;

          p {
            top: -320%;
            left: 15%;
            border-top: ${repeatingCode.fictionLinks};

            animation: ${devAnimParEast} 1.2s ease-out;
          }

          &:hover {
            ${repeatingCode.hover}
            text-shadow: -7px 9px 10px rgb(0, 0, 0, 0.25);

            p {
              border-top: ${repeatingCode.borderLinks};
              ${repeatingCode.shine}
            }
          }

          ${repeatingCode.media}
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
            @media only screen and (max-width: 37.5em) {
              top: 5rem;
              left: -18.5rem;
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
          height: 2rem;
          width: 60%;
          border-right: none;

          box-shadow: -2px 2px 4px rgb(0, 0, 0, 0.25);

          bottom: 13rem;
          right: 0;
          animation: ${rightBottom} 1.5s var(--easing);

          @media only screen and (max-width: 75em) {
            width: 50%;
          }
          @media only screen and (max-width: 62.5em) {
            display: ${(props) => props.$display}
            width: 80%;
            position: fixed;
            bottom: 7rem;
          }
          @media only screen and (max-width: 56.25em) {
            width: 90%;
            left: 5%;

            z-index: 1000;
            box-shadow: 0 0.4rem 0.4rem rgb(0, 0, 0, 0.25);
          }
          
          @media only screen and (max-height: 37.5em) {
            bottom: 7rem;
          }


        `;
    }
  }}
`;

export default RightBottomElement;
