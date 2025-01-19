import { createContext, useContext } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { useQuery } from "@tanstack/react-query";

import StyledPixels from "./PixelElements";
import { Button } from "./Button";
import Elelments from "./DesignElements";
import { getState } from "../services/apiStates";
import Loaders from "./Loaders";

const Container = styled.div`
  ${(props) => {
    switch (props.$mode) {
      case "secondary":
        return css`
          align-self: center;
          display: flex;
          align-items: center;
          justify-content: center;

          max-height: 35rem;
          position: relative;
          transform: translateX(-350%);
          z-index: 1;

          @media only screen and (max-width: 62.5em) {
            transform: translateX(-145%);
          }
          @media only screen and (max-width: 50em) {
            transform: translateX(-40%);
          }
          @media only screen and (max-width: 18.75em) {
            transform: none;
          }
        `;

      case "options":
        return css`
          display: flex;
          align-items: center;
          justify-content: center;

          max-width: 35rem;
          max-height: 35rem;

          position: absolute;
          top: 50%;
          left: 50%;

          transform: translate(-50%, -50%);
          z-index: 1;

          @media only screen and (max-width: 43.75em) {
            top: 24rem;
          }
        `;

      default:
        return css`
          display: flex;
          align-items: center;
          justify-content: center;

          max-width: 35rem;
          max-height: 35rem;

          position: absolute;
          top: 50%;
          left: 50%;

          transform: translate(-50%, -50%);
          z-index: 1;

          @media only screen and (max-width: 62.5em) {
            top: 55%;
          }
          @media only screen and (max-height: 43.75em) {
            top: 60%;
          }
          @media only screen and (max-width: 37.5em) {
            top: 50%;
          }
        `;
    }
  }}
`;

const ModalContext = createContext();

function Modal({ children }) {
  const { data: states, isLoading } = useQuery({
    queryKey: ["states"],
    queryFn: getState,
  });

  const queryMain = states?.find((el) => el.id === 12);
  const queryOptions = states?.find((el) => el.id === 13);
  const querySamples = states?.find((el) => el.id === 14);
  const querySkills = states?.find((el) => el.id === 15);
  const queryContacts = states?.find((el) => el.id === 16);
  const queryArticles = states?.find((el) => el.id === 17);

  return (
    <ModalContext.Provider
      value={{
        queryOptions,
        querySamples,
        queryMain,
        querySkills,
        queryContacts,
        queryArticles,
        isLoading,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

function Main() {
  const { isLoading } = useContext(ModalContext);

  if (isLoading) {
    return <Loaders />;
  }

  return (
    <>
      <Elelments.Main />
      <Container>
        <StyledPixels $mode="circle" />
        <Button plus={true} path="/options" />
      </Container>
    </>
  );
}

function Options({ mode, path }) {
  const {
    queryOptions,
    querySamples,
    querySkills,
    queryContacts,
    queryArticles,
  } = useContext(ModalContext);

  const pathFilter = window.location.pathname.split("/");

  const mobileCheck = pathFilter[pathFilter.length - 1] === "options";

  const compass = () => {
    let data = {};
    if (pathFilter[pathFilter.length - 1] === "options") {
      data = queryOptions?.compass;
    } else if (pathFilter[pathFilter.length - 1] === "development") {
      data = querySamples?.compass;
    } else if (pathFilter[pathFilter.length - 1] === "skills") {
      data = querySkills?.compass;
    } else if (pathFilter[pathFilter.length - 1] === "contacts") {
      data = queryContacts?.compass;
    } else if (pathFilter[pathFilter.length - 1] === "articles") {
      data = queryArticles?.compass;
    }

    return data;
  };

  const { isLoading } = useContext(ModalContext);

  if (isLoading) {
    return <Loaders />;
  }

  return (
    <>
      <Container $mode={mode}>
        <Button plus={false} path={path} mode={mode} />
        <Elelments.Main mode={mode} compass={compass()} />
      </Container>
      {mobileCheck && <Elelments.Mobile mode={mode} compass={compass()} />}
    </>
  );
}

Modal.Main = Main;
Modal.Options = Options;

Modal.propTypes = {
  children: PropTypes.any,
};
Options.propTypes = {
  mode: PropTypes.string,
  path: PropTypes.string,
};

export default Modal;
