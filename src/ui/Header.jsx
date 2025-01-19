import styled, { keyframes } from "styled-components";

import { headerAnimation } from "../keyframes/Keyframes";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 2rem;
  transition: all 0.2s linear;

  padding: 2rem 3rem;
  animation: ${headerAnimation} 0.8s ease-in;

  h1 {
    text-transform: uppercase;
    font-weight: inherit;
  }
  @media only screen and (max-width: 56.25em) {
    padding: 2rem 7%;
    justify-content: space-between;
  }
`;

const StyledPicture = styled.span`
  background: var(--color-mtext);
  height: 10rem;
  overflow: hidden;

  border-radius: var(--radius-full);
  border: 2px solid var(--color-links);

  img {
    width: 10rem;

    @media only screen and (max-width: 56.25em) {
      width: 12rem;
    }
    @media only screen and (max-width: 25em) {
      width: 9rem;
    }
  }

  @media only screen and (max-width: 56.25em) {
    width: 13rem;
    height: 13rem;
  }
  @media only screen and (max-width: 25em) {
    width: 10rem;
    height: 10rem;
  }
`;

const slogan = keyframes`
  0% {
    opacity: 0;
    margin: 0 0 0 3.3rem;
  }

  85% {
  opacity: 0;
    margin: 0 0 0 3.3rem;
  }
    100% {
    opacity: 1;
    margin: 3rem 0 0 3.3rem;
    }
  `;

const Slogan = styled.div`
  font-family: "Homemade Apple", serif;
  font-size: 3.2rem;
  font-weight: 400;
  font-style: normal;

  margin: 3rem 0 0 3.3rem;

  animation: ${slogan} 2s ease-in-out;

  @media only screen and (max-width: 56.25em) {
    text-align: center;
  }
  @media only screen and (max-width: 31.25em) {
    font-size: 2.5rem;
  }
  @media only screen and (max-width: 25em) {
    font-size: 2.2rem;
  }
`;

const StyledSpan = styled.span`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media only screen and (max-width: 37.5em) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0rem;
  }
`;

function Header() {
  return (
    <>
      <StyledHeader>
        <StyledSpan>
          Hello, my name is
          <h1 id="head" className="main">
            oljas medetbayev
          </h1>
        </StyledSpan>
        <StyledPicture>
          <img src="../public/foto.png" alt="Developer Picture" />
        </StyledPicture>
      </StyledHeader>
      <Slogan>frontend developer and designer</Slogan>
    </>
  );
}

export default Header;
