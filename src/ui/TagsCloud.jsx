import styled, { css } from "styled-components";
import PropTypes from "prop-types";

import { useToggle } from "../contexts/BlogContext";
import { toTop } from "../helpers/Helpers";
import { smoothAppear } from "../keyframes/Keyframes";

const Container = styled.div`
  position: relative;
  transition: all 0.2s linear;
  transform-origin: center;

  ul {
    list-style: none;
    font-size: 4rem;
  }
`;

const List = styled.li`
  ${(props) => {
    switch (props.$mode) {
      default:
        return css`
          font-weight: ${(props) => props.$weight};

          position: absolute;
          top: ${(props) => props.$top}rem;
          left: ${(props) => props.$left}rem;

          cursor: pointer;
          transition: all 0.2s linear;
          animation: ${smoothAppear} ${(props) => props.$sec}s var(--easing);

          &:hover {
            transform: scale(1.1);
          }

          @media only screen and (max-width: 43.75em) {
            text-align: center;
            position: static;
          }
        `;
    }
  }}
`;

function TagsCloud({ setTag, ref, skillsList }) {
  const { moveSkills, setMoveSkills } = useToggle();

  const canvasWidth = window.innerWidth;

  function handleList(id) {
    if (canvasWidth >= 700) {
      setTag(id);
    } else {
      setMoveSkills(34);
      setTag(id);
      toTop(ref);
    }
    return moveSkills;
  }

  return (
    <Container>
      <ul>
        {skillsList?.map((skill, i) => (
          <List
            key={i}
            $weight={skill.level * 100}
            $top={skill.position.x}
            $left={skill.position.y}
            $sec={`1.${i + 4}`}
            onClick={() => {
              handleList(skill.id);
            }}
          >
            {skill.title}
          </List>
        ))}
      </ul>
    </Container>
  );
}

TagsCloud.propTypes = {
  setTag: PropTypes.number,
  ref: PropTypes.any,
  skillsList: PropTypes.array,
};

export default TagsCloud;
