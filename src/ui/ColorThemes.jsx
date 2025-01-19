import styled from "styled-components";
import { runner } from "../keyframes/Keyframes";
import { useToggle } from "../contexts/BlogContext";

const StyledColorsToggle = styled.div`
  text-align: right;
  transform: rotate(270deg);
  transform-origin: center;

  position: absolute;
  top: 10rem;
  right: ${(props) => props.$right};
  z-index: 2;

  transition: all 0.2s ease-in;

  &:hover {
    transform: rotate(270deg) ${(props) => props.$y};
    letter-spacing: ${(props) => props.$space};
  }

  @media only screen and (max-width: 56.25em) {
    display: none;
  }
`;

const Text = styled.span`
  color: var(--color-links);
  position: relative;
  right: 1.5rem;
  cursor: pointer;

  &:before {
    content: attr(data-text);
    position: absolute;
    color: white;

    overflow: hidden;
    background: linear-gradient(90deg, transparent, #fff, transparent);
    background-repeat: no-repeat;
    background-size: 30%;
    animation: ${runner} 3s linear infinite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: rgba(255, 255, 255, 0);
  }
`;

const Colors = styled.div`
  display: flex;
  gap: 1rem;

  margin-top: 1rem;
  visibility: ${(props) => props.$visibility};

  transition: visibility 0.2s ease-in;
`;

const Samples = styled.span`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: ${(props) => props.$backcolor};
  border: 2px solid ${(props) => props.$border};

  box-shadow: -2px -4px 4px rgb(0, 0, 0, 0.2);
  cursor: pointer;
`;

const ClickOutsideDetector = styled.div`
  width: 100%;
  height: 100dvh;
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  rihgt: 0;
  bottom: 0;

  z-index: 2;
`;

function ColorThemes() {
  const {
    handleToggle,
    handleSelectedColor,
    colorThemeToggle: toggle,
    selectedColor,
    colors,
  } = useToggle();

  return (
    <>
      {!toggle && <ClickOutsideDetector onClick={() => handleToggle()} />}
      <StyledColorsToggle
        $right={`${toggle ? "-8.5rem" : "-3rem"}`}
        $space={`${toggle ? "1px" : "0px"}`}
        $y={`${toggle ? "translateY(-1rem)" : "translateY(0)"}`}
      >
        <Text data-text="Color schemes" onClick={() => handleToggle()}>
          Color schemes
        </Text>
        <Colors $visibility={`${toggle ? "hidden" : "visible"}`}>
          {colors.map((color) => (
            <Samples
              $backcolor={`${
                !color.inProgress ? color.icon : "var(--color-inactive)"
              }`}
              $border={`${
                color.background === selectedColor
                  ? color.color
                  : "var(--color-elements)"
              }`}
              id={color.id}
              key={color.id}
              onClick={() => handleSelectedColor(color)}
            />
          ))}
        </Colors>
      </StyledColorsToggle>
    </>
  );
}

export default ColorThemes;
