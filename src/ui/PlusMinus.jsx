import styled, { css } from "styled-components";

import { StyledButton } from "./Button";

const cssObject = {
  background: "var(--color-plus);",
  position: "absolute;",
  width: "5.8rem;",
  height: "0.7rem;",
  "border-radius": "1rem;",
  top: "11.5rem;",
  left: "8.4rem;",
  transition: "all 0.2s ease-in;",
};

const PlusMinus = styled.div`
  ${(props) => {
    switch (props.$mode) {
      case "Plus":
        return css`
          ${cssObject}
          transform: rotate(90deg);

          ${StyledButton}:hover & {
            background: var(--color-plus-hover);
          }
          ${StyledButton}:active & {
            background: var(--color-dashes);
          }
          @media only screen and (max-height: 43.75em) {
            top: 10rem;
            left: 6.9rem;
          }
        `;

      case "Minus":
        return css`
          ${cssObject}

          ${StyledButton}:hover & {
            background: var(--color-plus-hover);
          }
          ${StyledButton}:active & {
            background: var(--color-dashes);
          }

          @media only screen and (max-height: 43.75em) {
            top: 10rem;
            left: 7rem;
          }
        `;

      case "secondary":
        return css`
          background: var(--color-plus);
          position: absolute;
          width: 3.8rem;
          height: 0.5rem;
          border-radius: 1rem;
          top: 8.3rem;
          left: 6.3rem;
          transition: all 0.2s ease-in;

          ${StyledButton}:hover & {
            background: var(--color-plus-hover);
          }
          ${StyledButton}:active & {
            background: var(--color-dashes);
          }
        `;

      default:
        return css``;
    }
  }}
`;

export { PlusMinus };
