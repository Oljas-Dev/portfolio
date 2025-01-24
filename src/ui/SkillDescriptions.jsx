import styled from "styled-components";
import PropType from "prop-types";

import LinksContainer from "./LinksContainer";
import { useToggle } from "../contexts/BlogContext";
import { SkillDescription } from "../Variables/Variables";

const Container = styled(SkillDescription)``;

function SkillDescriptions({ title, desc }) {
  const { setMoveSkills } = useToggle();
  return (
    <Container>
      <span>
        <h3>{title}</h3>
        <p>{desc}</p>
      </span>
      <LinksContainer moveSkills={setMoveSkills} />
    </Container>
  );
}

SkillDescriptions.propTypes = {
  title: PropType.string,
  desc: PropType.string,
};

export default SkillDescriptions;
