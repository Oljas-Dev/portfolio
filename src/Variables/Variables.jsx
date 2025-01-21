import styled, { css } from "styled-components";
import { runner } from "../keyframes/Keyframes";
import { NavLink } from "react-router-dom";

const repeatingCode = {
  border: "1px solid var(--color-borders)",
  fiction: "1px solid transparent",
  fictionLinks: "5px solid transparent",
  borderLinks: "5px dashed var(--color-dashes)",
  false: "none",
  zIndex: "z-index: -2",
  hover:
    "box-shadow: -8px 10px 23px rgb(0, 0, 0, 0.25); border-top: 1px solid var(--color-borders);",
  shine: css`
    &:before {
      content: attr(data-text);
      position: absolute;
      color: white;

      overflow: hidden;
      background: linear-gradient(90deg, transparent, #fff, transparent);
      background-repeat: no-repeat;
      background-size: 30%;
      animation: ${runner} 1.5s linear infinite;
      -webkit-background-clip: text;
      -webkit-text-fill-color: rgba(255, 255, 255, 0);
    }
  `,
  media: `@media only screen and (max-width: 43.75em) {
            display: none;
          }
          @media only screen and (max-height: 43.75em) {
            display: none;
          }`,
};

const ArticleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin: 0 2rem 10rem 2rem;
  // transform: translateX(1%);

  cursor: pointer;

  @media only screen and (max-width: 62.5em) {
    transform: none;
  }
  @media only screen and (max-width: 50em) {
    flex-direction: column;
  }
  @media only screen and (max-width: 37.5em) {
    margin-top: 4rem;
  }
`;

const StyledOptions = styled.section`
  ${(props) => {
    switch (props.$mode) {
      case "secondary":
        return css`
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: ${(props) => props.$gap || "6rem"};
          width: 100%;

          position: absolute;
          top: 12rem;

          h3 {
            font-size: 2.4rem;
            font-weight: 400;
            color: var(--color-links);
          }

          p {
            font-size: 1.8rem;
          }
        `;

      default:
        return css`
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          height: 100dvh;
          margin-bottom: 4rem;
          position: relative;

          @media only screen and (max-width: 62.5em) {
            height: 100%;
          }
          @media only screen and (max-width: 43.75em) {
            display: block;
          }
        `;
    }
  }}
`;

const SkillDescription = styled.div`
  background-color: var(--color-elements);

  width: 40rem;
  height: 50rem;
  border-radius: 5px;
  padding: 1rem 2rem;

  @media only screen and (max-width: 50em) {
    width: 30rem;
  }
  @media only screen and (max-width: 43.75em) {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 30rem;
  }
`;

const NavBack = styled(NavLink)`
  width: 4.5rem;
  height: 4.5rem;
  fill: var(--color-elements);

  position: absolute;
  top: ${(props) => props.$top};
  left: 5rem;
  z-index: 100;

  cursor: pointer;
  transition: transform 0.2s ease-in;

  &:hover {
    transform: scale(1.1);

    &:before,
    &:after {
      background-color: var(--color-mtext);
    }
  }

  &:before,
  &:after {
    content: "";
    display: block;
    background: var(--color-elements);
    width: 0.8rem;
    height: 5rem;

    position: absolute;
    border-radius: 0.4rem;
  }

  &:before {
    transform: rotate(60deg);
  }
  &:after {
    transform: rotate(-60deg);
    top: 2.2rem;
  }

  // Toggle for mobile and tab screens

  @media only screen and (max-width: 43.75em) {
    display: ${(props) => props.$display};
  }
`;

const VeilBottom = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-mgradient1);
  width: 90%;
  height: 7rem;
  padding: 1rem;

  position: fixed;
  bottom: 0;
  right: 0;
  left: 5%;
  z-index: 1000;

  transition: all 0.2s linear;
`;
const VeilTop = styled.span`
  background-color: var(--color-mgradient2);
  width: 100%;
  height: 6rem;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  @media only screen and (min-width: 43.75em) {
    display: none;
  }
`;

const StyledParagraph = styled.p`
  font-size: 2rem !important;
  text-align: left;
  color: var(--color-p);

  max-width: 50%;
  transform-origin: left;

  margin: 0.5rem 0;

  @media only screen and (max-width: 43.75em) {
    max-width: 100%;
  }
`;

const Tags = styled.span`
  font-size: 1.6rem;
  color: var(--color-p);
  font-weight: 300;

  background-color: var(--color-elements);
  // margin: 1rem 0;
  padding: 0.3rem 1rem;
  border-radius: 5px;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export {
  repeatingCode,
  StyledOptions,
  SkillDescription,
  NavBack,
  VeilBottom,
  VeilTop,
  ArticleContainer,
  StyledParagraph,
  Tags,
  Flex,
};
