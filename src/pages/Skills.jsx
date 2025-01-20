import { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import styled, { css } from "styled-components";

import { getSkills } from "../services/apiSkills";
import Decoration from "../ui/Decoration";
import Modal from "../ui/Modal";
import { SkillDescription, StyledOptions } from "../Variables/Variables";
import { smoothAppear } from "../keyframes/Keyframes";

const Container = styled.div`
  display: flex;
  gap: 2rem;
  transform: translateX(-70%);
  transition: all 0.2s linear;

  h3 {
    color: var(--color-h2);
  }

  @media only screen and (max-width: 68.75em) {
    transform: translateX(-70%);
  }
  @media only screen and (max-width: 56.25em) {
    transform: translateX(-60%);
  }
  @media only screen and (max-width: 50em) {
    transform: translateX(-80%);
    margin-bottom: 10rem;
  }
  @media only screen and (max-width: 43.75em) {
    gap: 40rem;
    transform: translateX(${(props) => props.$move}%);
  }
  @media only screen and (max-height: 43.75em) {
    margin-bottom: 10rem;
  }
  @media only screen and (max-width: 37.5em) {
    margin-top: 2.5rem;
  }
  @media only screen and (max-width: 18.75em) {
    margin-top: 8rem;
    transform: translateX(${(props) => props.$move + 2.5}%);
  }
`;

const TagsCloud = styled.div`
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
          animation: ${smoothAppear} ${(props) => props.$sec}s ease-out;

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

const SetBack = styled.span`
  cursor: pointer;
  @media only screen and (min-width: 43.75em) {
    display: none;
  }
`;

function Skills() {
  const { data: skills } = useQuery({
    queryKey: ["skills"],
    queryFn: getSkills,
  });

  const [tag, setTag] = useState(11);
  const [moveSkills, setMoveSkills] = useState(-35);
  const topRef = useRef(null);

  const skillArray = skills?.find((skill) => skill.id === 21);

  const skillsList = skillArray?.skillList;

  const description = skillsList?.find((skill) => skill.id === tag);

  const canvasWidth = window.innerWidth;

  function handleList(id) {
    if (canvasWidth >= 700) {
      setTag(id);
    } else {
      setMoveSkills(34);
      setTag(id);
    }
    return moveSkills;
  }

  return (
    <Decoration>
      <Decoration.Main>
        <StyledOptions $mode="secondary">
          <Modal>
            <Modal.Options mode="secondary" path="/options" />
          </Modal>
          <Container $move={moveSkills} ref={topRef}>
            <SkillDescription>
              <span>
                <h3>{description?.title}</h3>
                <p>{description?.description}</p>
              </span>
              <SetBack onClick={() => setMoveSkills(-35)}>⬅ Back</SetBack>
            </SkillDescription>
            <TagsCloud>
              <ul>
                {skillsList?.map((skill, i) => (
                  <List
                    key={i}
                    $weight={skill.level * 100}
                    $top={skill.position.x}
                    $left={skill.position.y}
                    $sec={`0.${i + 4}`}
                    onClick={() => {
                      handleList(skill.id);
                    }}
                  >
                    {skill.title}
                  </List>
                ))}
              </ul>
            </TagsCloud>
          </Container>
        </StyledOptions>
      </Decoration.Main>
    </Decoration>
  );
}

export default Skills;
