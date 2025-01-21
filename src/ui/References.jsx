import styled from "styled-components";
import behance from "../../public/sprite.svg#behance";
import linkedin from "../../public/sprite.svg#linkedin";
import github from "../../public/sprite.svg#github";

const Container = styled.div`
  display: flex;
  gap: 2rem;
`;

const Icon = styled.svg`
  width: 2.4rem;
  height: 2.4rem;
  fill: var(--color-links);
`;

function References() {
  return (
    <Container>
      <a href="https://www.behance.net/olzhasmedets" target="_blank">
        <Icon>
          <use xlinkHref={behance} />
        </Icon>
      </a>

      <a
        href="https://www.linkedin.com/in/olzhas-medetbayev-97698a153/"
        target="_blank"
      >
        <Icon>
          <use xlinkHref={linkedin} />
        </Icon>
      </a>

      <a href="https://github.com/Oljas-Dev" target="_blank">
        <Icon>
          <use xlinkHref={github} />
        </Icon>
      </a>
    </Container>
  );
}

export default References;
