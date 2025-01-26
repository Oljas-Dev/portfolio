import styled from "styled-components";
import PropType from "prop-types";

import LinksContainer from "./LinksContainer";
import { useToggle } from "../contexts/BlogContext";
import { SkillDescription } from "../Variables/Variables";

const Container = styled(SkillDescription)`
  h3 {
    margin-bottom: 1rem;

    a {
      font-size: 1.6rem;
    }
  }
`;

function SkillDescriptions({ desc }) {
  const { setMoveSkills } = useToggle();
  return (
    <Container>
      <span>
        <h2>{desc?.title}</h2>
        {desc?.experience && (
          <h3>{`Experience: ${desc?.experience} ${
            desc.experience > 1 ? "years" : "year"
          }`}</h3>
        )}
        {desc?.cert && (
          <h3>
            {`Certificates: ${desc?.cert.school}`}{" "}
            <a href={desc?.cert.link} target="_blank">
              ⬇️download
            </a>
          </h3>
        )}
        <p>{desc?.description}</p>
      </span>
      <LinksContainer moveSkills={setMoveSkills} />
    </Container>
  );
}

SkillDescriptions.propTypes = {
  // title: PropType.string,
  desc: PropType.object,
};

export default SkillDescriptions;
