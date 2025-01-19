import styled, { css } from "styled-components";

import {
  leftTop,
  devAnimWest,
  devAnimParWest,
  optionsNavigation,
} from "../../keyframes/Keyframes";
import { repeatingCode } from "../../Variables/Variables";
import { StyledDesignElements } from "../StyledDesignElements";

const TopElement = styled(StyledDesignElements)`
  ${(props) => {
    switch (props.$mode) {
      case "options":
        return css`
          left: 85%;
          top: 30%;
          width: 200%;
          max-width: 35rem;
          border: ${repeatingCode.fiction};
          box-shadow: ${repeatingCode.false};
          ${repeatingCode.zIndex};

          animation: ${devAnimWest} 0.8s ease-out;

          p {
            top: 80%;
            left: 25%;
            border-bottom: ${repeatingCode.fictionLinks};

            animation: ${devAnimParWest} 0.9s ease-out;
          }

          &:hover {
            ${repeatingCode.hover}
            border-right: ${repeatingCode.border};
            text-shadow: -7px 8px 10px rgb(0, 0, 0, 0.25);

            p {
              border-bottom: ${repeatingCode.borderLinks};

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
              transform: translate(-20rem, 22rem);
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
          width: 75rem;
          left: -1rem;
          top: 13rem;

          animation: ${leftTop} 0.6s ease-out;

          @media only screen and (max-width: 62.5em) {
            width: 80rem;
          }
          @media only screen and (max-width: 56.25em) {
            width: 90%;
            top: 16.5rem;
            left: 5%;
          }
          @media only screen and (max-width: 31.25em) {
            top: 16rem;
          }
          @media only screen and (max-width: 25em) {
            top: 13rem;
          }
          @media only screen and (max-width: 17.69em) {
            top: 16rem;
          }
        `;
    }
  }}
`;

export default TopElement;
