import { useEffect, useRef } from "react";
import styled from "styled-components";
import { rotate } from "../keyframes/Keyframes";

const StyledCursor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  transition: all 0.2s ease-in-out;

  z-index: 100;

  @media only screen and (max-width: 43.75em) {
    display: none;
  }
`;

const CircleOne = styled(StyledCursor)`
  border: 1px solid var(--color-mtext);
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;
  animation: ${rotate} 1.5s linear infinite;
`;
const CircleTwo = styled(StyledCursor)`
  border: 2px solid var(--color-links);
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 41% 44% 56% 59% / 38% 62% 63% 37%;
  animation: ${rotate} 2s linear infinite;
`;
const CircleThree = styled(StyledCursor)`
  border: 1.5px solid var(--color-plus);
  width: 3rem;
  height: 3rem;
  border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;
  animation: ${rotate} 3s reverse infinite;
`;

function Cursor() {
  const cursor = useRef(0);
  useEffect(
    function () {
      document.addEventListener("mousemove", (e) => {
        // console.log(e);
        cursor.current.setAttribute(
          "style",
          "top: " + (e.pageY + 40) + "px; left: " + (e.pageX + 30) + "px;"
        );
      });
    },

    [cursor]
  );
  return (
    <StyledCursor ref={cursor}>
      <CircleOne></CircleOne>
      <CircleTwo></CircleTwo>
      <CircleThree></CircleThree>
    </StyledCursor>
  );
}

export default Cursor;
