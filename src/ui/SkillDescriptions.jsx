import styled from "styled-components";
import PropType from "prop-types";

import LinksContainer from "./LinksContainer";
import { useToggle } from "../contexts/BlogContext";
import { Flex, SkillDescription } from "../Variables/Variables";

const Container = styled(SkillDescription)`
  align-items: flex-start;

  h3 {
    margin-bottom: 0.8rem;
  }
`;

const MainInfo = styled.div`
  background: var(--color-btngradient1);
  color: var(--color-mtext);
  width: var(--width-skills);

  margin: -1rem -2rem;
  padding: 1rem 2rem;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  h3,
  h2,
  p {
    color: var(--color-mtext) !important;
  }

  a {
    font-size: 1.6rem;
  }
`;

const EngageBlock = styled.div`
  display: inline-block;
  width: 3rem;
  height: 2rem;
  background: ${(props) => props.$background};

  margin-left: 0.5rem;
  margin-bottom: -0.3rem;
  border-radius: 0.5rem;
`;

const InlineDisplay = styled(Flex)`
  gap: 1rem;

  p {
    flex-grow: 1;
    margin-bottom: 0.3rem;
  }
`;

function SkillDescriptions({ desc }) {
  const { setMoveSkills } = useToggle();

  function levels(num) {
    let colors = ["#97F28B", "#B4F17A", "#D4EE66", "#E5EE5D", "#FBEC4F"];

    return Array.from({ length: num }, (_, i) => (
      <EngageBlock key={i} $background={colors.find((_, ind) => ind === i)} />
    ));
  }
  return (
    <Container>
      <MainInfo>
        <h2>{desc?.title}</h2>
        {desc?.experience && (
          <InlineDisplay>
            <h3>⚒️Experience: </h3>
            <p>
              {`${desc?.experience} ${desc?.experience > 1 ? "years" : "year"}`}
            </p>
          </InlineDisplay>
        )}
        {desc?.cert && (
          <InlineDisplay>
            <h3>📄Certificates: </h3>
            <p>{desc?.cert.school}</p>
            <a href={desc?.cert?.link} target="_blank">
              ⬇️
            </a>
          </InlineDisplay>
        )}
        <h3>🎚️Engagement: {levels(desc?.engage)}</h3>
      </MainInfo>
      <p>{desc?.description}</p>
      <LinksContainer moveSkills={setMoveSkills} />
    </Container>
  );
}

SkillDescriptions.propTypes = {
  // title: PropType.string,
  desc: PropType.object,
};

export default SkillDescriptions;
