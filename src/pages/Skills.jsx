import styled from "styled-components";

import Decoration from "../ui/Decoration";
import Modal from "../ui/Modal";
import { StyledOptions } from "../Variables/Variables";
import { useToggle } from "../contexts/BlogContext";
import SkillDescriptions from "../ui/SkillDescriptions";
import TagsCloud from "../ui/TagsCloud";
import { getSkills } from "../services/apiSkills";
import { useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";

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

function Skills() {
  const { data: skills } = useQuery({
    queryKey: ["skills"],
    queryFn: getSkills,
  });
  const { moveSkills } = useToggle();
  const [tag, setTag] = useState(11);

  const topRef = useRef(null);

  const skillArray = skills?.find((skill) => skill.id === 21);

  const skillsList = skillArray?.skillList;

  const description = skillsList?.find((skill) => skill.id === tag);

  return (
    <Decoration>
      <Decoration.Main>
        <StyledOptions $mode="secondary" ref={topRef}>
          <Modal>
            <Modal.Options mode="secondary" path="/options" />
          </Modal>
          <Container $move={moveSkills}>
            <SkillDescriptions
              title={description?.title}
              desc={description?.description}
            />
            <TagsCloud setTag={setTag} ref={topRef} skillsList={skillsList} />
          </Container>
        </StyledOptions>
      </Decoration.Main>
    </Decoration>
  );
}

export default Skills;
