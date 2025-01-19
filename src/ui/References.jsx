import styled from "styled-components";

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
      <a href="#">
        <Icon>
          <use xlinkHref="../../public/sprite.svg#behance" />
        </Icon>
      </a>

      <a href="#">
        <Icon>
          <use xlinkHref="../../public/sprite.svg#linkedin" />
        </Icon>
      </a>

      <a href="#">
        <Icon>
          <use xlinkHref="../../public/sprite.svg#github" />
        </Icon>
      </a>
    </Container>
  );
}

export default References;
