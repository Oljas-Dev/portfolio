import styled from "styled-components";
import PropTypes from "prop-types";

import { FlexBetween } from "../Variables/Variables";

const Container = styled(FlexBetween)`
  width: 100%;
`;

const SetBack = styled.span`
  cursor: pointer;
  @media only screen and (min-width: 60em) {
    display: none;
  }
`;

const CV = styled.a`
  font-size: 1.6rem;
`;

function LinksContainer({ moveSkills }) {
  return (
    <Container>
      <CV
        href="https://qnbjfevuewavunubhtwa.supabase.co/storage/v1/object/public/CV/Lebenslauf.pdf?t=2025-01-24T09%3A53%3A02.687Z"
        target="_blank"
      >
        ⬇️CV
      </CV>
      <SetBack onClick={() => moveSkills(-35)}>⬅ Back</SetBack>
    </Container>
  );
}

LinksContainer.propTypes = {
  moveSkills: PropTypes.func,
};

export default LinksContainer;
