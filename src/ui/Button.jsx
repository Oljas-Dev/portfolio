import styled, { css } from "styled-components";
import PropTypes from "prop-types";

import { PlusMinus } from "./PlusMinus";
import { NavLink } from "react-router-dom";

const StyledButton = styled(NavLink)`
  ${(props) => {
    switch (props.$mode) {
      case "secondary":
        return css`
          background: linear-gradient(
            45deg,
            var(--color-btngradient1),
            var(--color-btngradient2)
          );
          border-radius: var(--radius-full);
          border: none;
          cursor: pointer;

          position: relative;
          width: 16.5rem;
          height: 16.5rem;

          &:active {
            background: linear-gradient(
              45deg,
              var(--color-btngradient2),
              var(--color-btngradient1)
            );
          }

          @media only screen and (max-height: 43.75em) {
            width: 20rem;
            height: 20rem;
          }
        `;

      default:
        return css`
          background: linear-gradient(
            45deg,
            var(--color-btngradient1),
            var(--color-btngradient2)
          );
          border-radius: var(--radius-full);
          border: none;
          cursor: pointer;

          position: relative;
          width: 23rem;
          height: 23rem;

          &:active {
            background: linear-gradient(
              45deg,
              var(--color-btngradient2),
              var(--color-btngradient1)
            );
          }
          @media only screen and (max-height: 43.75em) {
            width: 20rem;
            height: 20rem;
          }
        `;
    }
  }}
`;

const ButtonStroke = styled.div`
  ${(props) => {
    switch (props.$mode) {
      case "secondary":
        return css`
          width: 18.5rem;
          height: 18.5rem;
          border-radius: var(--radius-full);

          background: linear-gradient(
            45deg,
            var(--color-btnstroke1),
            var(--color-btnstroke2)
          );
          position: absolute;
          top: -1rem;
          left: -1rem;
          z-index: -1;

          box-shadow: -0.4rem 0.5rem 1rem rgb(0, 0, 0, 0.25);

          ${StyledButton}:active & {
            background: linear-gradient(
              45deg,
              var(--color-btnstroke2),
              var(--color-btnstroke1)
            );
            box-shadow: none;
          }

          @media only screen and (max-height: 43.75em) {
            width: 22rem;
            height: 22rem;
          }
        `;

      default:
        return css`
          width: 25rem;
          height: 25rem;
          border-radius: var(--radius-full);

          background: linear-gradient(
            45deg,
            var(--color-btnstroke1),
            var(--color-btnstroke2)
          );
          position: absolute;
          top: -1rem;
          left: -1rem;
          z-index: -1;

          box-shadow: -0.4rem 0.5rem 1rem rgb(0, 0, 0, 0.25);

          ${StyledButton}:active & {
            background: linear-gradient(
              45deg,
              var(--color-btnstroke2),
              var(--color-btnstroke1)
            );
            box-shadow: none;
          }

          @media only screen and (max-width: 56.25em) {
            box-shadow: 0 0.8rem 1rem rgb(0, 0, 0, 0.25);
          }

          @media only screen and (max-height: 43.75em) {
            width: 22rem;
            height: 22rem;
          }
        `;
    }
  }}
`;

function Button({ plus, mode, path }) {
  return (
    <>
      <StyledButton to={path} $mode={mode}>
        <ButtonStroke $mode={mode} />
        <PlusMinus $mode={`${mode === "secondary" ? "secondary" : "Minus"}`} />
        {plus && <PlusMinus $mode="Plus" />}
      </StyledButton>
    </>
  );
}

Button.propTypes = {
  mode: PropTypes.string,
  path: PropTypes.string,
  plus: PropTypes.bool,
};

export { Button, StyledButton };
