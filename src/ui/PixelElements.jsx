import styled, { css } from "styled-components";
import { rotate, appear, rotateReverse } from "../keyframes/Keyframes";

const StyledPixels = styled.div`
  ${(props) => {
    switch (props.$mode) {
      case "straightTop":
        return css`
          border-top: 1.5rem dotted var(--color-dashes);

          position: fixed;
          top: 0;
          right: 0;
          left: 0;

          z-index: 50;

          margin: ${(props) => props.$margin};
          transition: margin 0.2s ease-out;

          &:before {
            content: "";
            display: block;
            border-bottom: 0.5rem dotted var(--color-dashes);

            margin-top: 2rem;
          }

          // Toggle for mobile and tab screens

          @media only screen and (max-width: 43.75em) {
            display: ${(props) => props.$display};
          }
        `;

      case "straightBottom":
        return css`
          border-top: 1.5rem dotted var(--color-dashes);

          position: fixed;
          bottom: 0;
          right: 0;
          left: 0;

          margin: ${(props) => props.$margin};
          transition: margin 0.2s ease-out;

          &:before {
            content: "";
            display: block;
            border-bottom: 0.5rem dotted var(--color-dashes);

            margin-top: 2rem;
          }

          // Toggle for mobile and tab screens

          @media only screen and (max-width: 43.75em) {
            display: ${(props) => props.$display};
          }
        `;

      case "circle":
        return css`
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1.5rem dotted var(--color-dashes);

          width: 38rem;
          height: 38rem;
          border-radius: var(--radius-full);

          position: absolute;
          animation: ${rotate} 60s linear infinite, ${appear} 0.8s linear;
          transition: all 0.2s ease;

          &:before {
            content: "";
            width: 29rem;
            height: 29rem;
            border: 0.5rem dotted var(--color-dashes);
            border-radius: var(--radius-full);

            animation: ${rotateReverse} 30s linear infinite;

            @media only screen and (max-height: 43.75em) {
              width: 25rem;
              height: 25rem;
            }
          }

          @media only screen and (max-height: 43.75em) {
            width: 32rem;
            height: 32rem;
          }
        `;

      default:
        return css``;
    }
  }}
`;

export default StyledPixels;
